<template>
<v-app>
  <v-app-bar
    app
    absolute
    dense
    >
    <v-toolbar-title>
      Bloc: <b>B</b>link <b>Loc</b>alization
    </v-toolbar-title>
    <ConnectivityBadge/>
    <v-btn
      v-if="showButton"
      @click="clickHandler"
      small
      >
      {{ buttonText }}
    </v-btn>
    <v-spacer></v-spacer>
    <v-checkbox
      hide-details
      v-model="showAnchors"
      label="Show Anchors"
      >
    </v-checkbox>
  </v-app-bar>
  <v-content>
    <v-container
      class="fill-height"
      >
      <FindTags/>
    </v-container>
    <ErrorDialog/>
  </v-content>
</v-app>
</template>

<script>
import FindTags from './components/FindTags';
import ErrorDialog from './components/ErrorDialog';
import ConnectivityBadge from './components/ConnectivityBadge'
import mqttClient from './mqtt-client.js';


export default {
  name: 'App',

  components: {
    FindTags,
    ErrorDialog,
    ConnectivityBadge
  },

  data () {
    return {
      mqttClient: undefined
    }
  },

  computed: {
    mqttBroker () { return this.$store.state.mqttBroker; },
    systemStatus () { return this.$store.state.systemStatus; },
    showButton () {
      return this.systemStatus === 'connected';
    },
    buttonText () {
      if (this.systemStatus === 'connected') {
        return 'get config';
      } else {
        return '';
      }
    },
    showAnchors: {
      get: function () {
        return this.$store.state.showAnchors;
      },
      set: function (newValue) {
        this.$store.state.showAnchors = newValue;
      }
    }
  },

  methods: {
    mqttClientCallback: function () {
      // newState
    },
    clickHandler () {
      if (this.systemStatus === 'disconnected') {
        this.mqttClient.connect();
      } else if (this.systemStatus === 'connected') {
        this.mqttClient.getConfig();
      } else {
        // do nothing
      }
    }
  },

  mounted: function () {
    this.$nextTick(function () {
      this.mqttClient = new mqttClient(this.mqttBroker,
                                       this.$store);
      this.mqttClient.connect();
    });
  }
};
</script>
