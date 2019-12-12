<template>
<v-tooltip right>
  <template v-slot:activator="{ on }">
    <v-chip
      class="ma-4"
      :color="color"
      text-color="white"
      label
      v-on="on"
      >
      {{ systemStatus }}
  </v-chip>
  </template>
  <span>{{ mqttBroker }}</span>
</v-tooltip>
</template>

<script>
export default {
  computed: {
    systemStatus () { return this.$store.state.systemStatus; },
    mqttBroker () {
      return (`ws://${this.$store.state.mqttBroker.hostname}` +
              `:${this.$store.state.mqttBroker.port}` +
              `${this.$store.state.mqttBroker.path}`);
    },
    color () {
      if (this.systemStatus === 'connected') {
        return 'orange';
      } else if (this.systemStatus === 'ready') {
        return 'green';
      } else if (this.systemStatus === 'disconnected') {
        return 'red';
      } else {
        return 'blue';
      }
    }
  }

}
</script>
