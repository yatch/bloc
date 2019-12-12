#!/usr/bin/env python

import datetime
import json
import os
import random
import time

import click
import paho.mqtt.client as mqtt
import yaml

DEFAULT_CONFIG_FILE_PATH = os.path.join(os.path.dirname(__file__),
                                        'config.yml')

MQTT_BROKER_HOST = 'broker.hivemq.com'
MQTT_BROKER_PORT = 1883
MQTT_TOPIC = 'bloc/demo'

class Manager:


    def __init__(self, config):
        self.config = config
        self.client = mqtt.Client()
        self.client.on_connect = self._on_connect
        self.client.on_message = self._on_message
        self.publish_tag_positions = False

    def connect(self):
        self.client.connect(MQTT_BROKER_HOST, MQTT_BROKER_PORT)

    def loop_forever(self):
        last_time_sent = None
        while True:
            self.client.loop(1) # block for 2 seconds
            now = int(time.time())
            if (self.publish_tag_positions and
                last_time_sent != now and
                now % 30 == 0):
                self._send_tag_position()
                last_time_sent = now

    def _send_tag_position(self):
        ts = datetime.datetime.now()
        tag = random.choice(self.config['tags'])
        anchor = random.choice(self.config['anchors'])
        position = {'type': 'tag-position',
                    'timestamp': ts.strftime('%c'),
                    'tag': tag['macAddress'],
                    'anchor': anchor['macAddress']}
        print('publish position: {}'.format(position))
        self.client.publish(MQTT_TOPIC, json.dumps(position))

    def _on_connect(self, client, userdata, flags, rc):
        print('connected')
        client.subscribe(MQTT_TOPIC)
        print('subscribe to {}'.format(MQTT_TOPIC))
        self.publish_tag_positions = True

    def _on_message(self, client, userdata, message):
        msg = json.loads(message.payload)
        if ('type' in msg) and (msg['type'] == 'req-config'):
            client.publish(MQTT_TOPIC, json.dumps({'type': 'res-config',
                                                   'config': self.config}))
            self._send_tag_position()
        else:
            pass

@click.command()
@click.option('-c', '--config-file-path',
              default=DEFAULT_CONFIG_FILE_PATH,
              type=click.File('r'))
def main(config_file_path):
    manager = Manager(yaml.safe_load(config_file_path))
    manager.connect()
    manager.loop_forever()

if __name__ == '__main__':
    main()
