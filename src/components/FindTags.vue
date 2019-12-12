<template>
<div
  v-if="showMap"
  style="height: 100%; width: 100%"
  >
  <l-map
    ref="blocMap"
    style="height: 90%; width: 100%"
    :zoom="zoom"
    :center="center"
    :attribution=true
    >
    <l-tile-layer
      :url="url"
      :attribution="attribution"
      >
    </l-tile-layer>
    <div v-if="showAnchors">
      <l-marker
        v-for="anchor in anchors"
        :key="anchor.macAddress"
        :lat-lng.sync="anchor.position"
        >
        <l-tooltip :content="anchor.label"></l-tooltip>
      </l-marker>
    </div>
    <div
      v-for="tag in tags"
      :key="tag.macAddress"
      >
      <l-marker
        v-if="tag.position !== undefined"
        :lat-lng.sync="tag.position"
        :icon="tagActiveIcon"
        >
        <l-tooltip :content="tagTooltip(tag)"></l-tooltip>
      </l-marker>
    </div>
  </l-map>
</div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet'

export default {

  name: 'FindTags',

  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },

  data: () => ({
    url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
    attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    tagActiveIcon: undefined,
    tagInactiveIcon: undefined
  }),

  computed: {
    showMap () { return this.$store.state.errorMessage === ''; },
    showAnchors () { return this.$store.state.showAnchors; },
    zoom () {
      if (this.mapConfig === undefined) {
        return 10;
      } else {
        return this.mapConfig.zoom;
      }
    },
    center () {
      if (this.mapConfig === undefined) {
        return [0, 0];
      } else {
        return this.mapConfig.center;
      }
    },
    mapConfig () { return this.$store.state.mapConfig },
    anchors () { return this.$store.state.anchors; },
    tags () { return this.$store.state.tags; }
  },

  methods: {
    tagTooltip (tag) {
      let ret = tag.label;
      if (tag.positionLabel !== undefined) {
        ret += ', ' + tag.positionLabel;
      }
      if (tag.positionTimestamp !== undefined) {
        ret += ', ' + tag.positionTimestamp;
      }
      return ret;
    }
  },

  mounted: function () {
    this.$nextTick(function () {
      this.tagActiveIcon = window.L.icon.pulse({
        iconSize:[15,15],
        color: '#0040ff'
      });
      this.tagInactiveIcon = window.L.icon.pulse({
        iconSize:[15,15],
        color: '#808080'
      });
    })
  }
}
</script>
