import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'
import 'leaflet-pulse-icon/src/L.Icon.Pulse.js'
import 'leaflet-pulse-icon/src/L.Icon.Pulse.css'

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.config.productionTip = false

window.vm = new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
