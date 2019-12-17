'use strict';

import PahoMQTT from 'paho-mqtt/paho-mqtt.js';

export default class {
  constructor(mqttBroker, $store) {
    const client_id = 'c.' + Math.random().toString(32).substr(2);
    this.config = mqttBroker;
    this.client = new PahoMQTT.Client(this.config.hostname,
                                      this.config.port,
                                      this.config.path,
                                      client_id);
    this.client.onConnectionLost = (responseObject) => {
      this.onDisconnected(responseObject.errorMessage)
    }
    this.client.onMessageArrived = (message) => this.parseMessage(message);

    this.topic = mqttBroker.topic;
    this.$store = $store;
  }

  connect () {
    this.$store.dispatch('systemStatus', { newStatus: 'connecting' });
    this.client.connect({
      onSuccess: () => this.onConnected(),
      onFailure: () => this.onDisconnected(),
      reconnect: false,
      useSSL: this.config.tls
    });
  }

  onDisconnected ( errorMessage = '' ) {
    this.$store.dispatch('systemStatus', {
      newStatus: 'disconnected',
      errorMessage: errorMessage
    });
  }

  parseMessage (message) {
    if (message.topic === this.topic) {
      const msg = JSON.parse(message.payloadString);
      if (msg.hasOwnProperty('type')) {
        if (msg.type === 'res-config') {
          this.$store.dispatch('setMapConfig', { mapConfig: msg.config.map });
          this.$store.dispatch('setAnchors', { anchors: msg.config.anchors });
          this.$store.dispatch('setTags', { tags: msg.config.tags });
          this.$store.dispatch('systemStatus', { newStatus: 'ready' });
        } else if (msg.type === 'tag-position') {
          const anchors = this.$store.state.anchors
          const anchor = anchors.find(anchor =>
                                      anchor.macAddress === msg.anchor);
          if (anchor === undefined) {
            // ignore
          } else {
            this.$store.dispatch('setTagPosition',
                                 {
                                   position: {
                                     tagMacAddress: msg.tag,
                                     anchor: anchor,
                                     timestamp: msg.timestamp
                                   }
                                 });
          }
        }
      }
    } else {
      // ignore messages on topics which we're not interested to
    }
  }

  getConfig () {
    this.client.publish(this.topic, JSON.stringify({ type: 'req-config' }));
    this.$store.dispatch('systemStatus', { newStatus: 'fetching' });
    setTimeout(() => {
      if (this.$store.state.systemStatus === 'fetching') {
        this.$store.dispatch('systemStatus', { newStatus: 'connected' });
      }
    }, 10000);
  }

  onConnected () {
    this.$store.dispatch('systemStatus', { newStatus: 'connected' });
    this.client.subscribe(this.topic);
    this.getConfig();
  }
}
