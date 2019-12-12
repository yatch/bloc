import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showAnchors: false,
    connectedWithServer: false,
    mapConfig: undefined,
    anchors: [],
    tags: [],
    mqttBroker: config.mqttBroker,
    systemStatus: 'disconnected',
    errorMessage: ''
  },

  mutations: {
    setMapConfig (state, newMapConfig) { state.mapConfig = newMapConfig },
    setAnchors (state, newAnchors) {
      state.anchors = [];
      newAnchors.forEach(function (anchor) {
        state.anchors.push({
          macAddress: anchor.macAddress,
          label: anchor.label,
          position: { lat: anchor.latitude, lng: anchor.longitude }
        });
      });
    },
    setTags (state, newTags) {
      state.tags = [];
      newTags.forEach(function (tag) {
        state.tags.push({
          macAddress: tag.macAddress,
          label: tag.label,
          position: undefined,
          positionLabel: undefined,
          positionTimestamp: undefined
        });
      });
    },
    setTagPosition (state, position) {
      const tag = state.tags.find(tag =>
                                  tag.macAddress === position.tagMacAddress);
      if (tag === undefined) {
        // ignore
      } else {
        tag.position = { lat: position.anchor.position.lat,
                         lng: position.anchor.position.lng};
        tag.positionLabel = position.anchor.label;
        tag.positionTimestamp = position.timestamp;
      }
    },
    systemStatus (state, newStatus) { state.systemStatus = newStatus; },
    setErrorMessage (state, message) { state.errorMessage = message }
  },

  actions: {
    setMapConfig ({ commit }, payload) {
      commit('setMapConfig', payload.mapConfig);
    },
    setAnchors ({ commit }, payload) {
      commit('setAnchors', payload.anchors);
    },
    setTags ({ commit }, payload) {
      commit('setTags', payload.tags);
    },
    setTagPosition ({ commit }, payload) {
      commit('setTagPosition', payload.position);
    },
    systemStatus ({ commit }, payload) {
      commit('systemStatus', payload.newStatus);
      if (payload.newStatus === 'disconnected') {
        commit('setErrorMessage', payload.errroMessage);
      }
    },
    clearErrorMessage ({ commit }) { commit('setErrorMessage', ''); }
  },

  modules: {
  }
})
