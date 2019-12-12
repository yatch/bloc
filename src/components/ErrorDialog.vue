<template>
  <v-row
    justify="center"
    >
    <v-dialog
      v-model="showErrorDialog"
      persistent
      max-width="290"
      >
      <v-card>
        <v-card-title>Error</v-card-title>
        <v-card-text>{{ errorMessage }}</v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            color="primary"
            @click="clearErrorMessage"
            >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  computed: {
    errorMessage () { return this.$store.state.errorMessage; },
    showErrorDialog () {
      return (this.errorMessage !== '' && this.errorMessage !== undefined);
    }
  },

  methods: {
    clearErrorMessage () { this.$store.dispatch('clearErrorMessage'); }
  }
}
</script>
