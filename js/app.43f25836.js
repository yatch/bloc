(function(t){function e(e){for(var o,a,i=e[0],c=e[1],u=e[2],p=0,h=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",absolute:"",dense:""}},[n("v-toolbar-title",[t._v(" Bloc: "),n("b",[t._v("B")]),t._v("link "),n("b",[t._v("Loc")]),t._v("alization ")]),n("ConnectivityBadge"),t.showButton?n("v-btn",{attrs:{small:""},on:{click:t.clickHandler}},[t._v(" "+t._s(t.buttonText)+" ")]):t._e(),n("v-spacer"),n("v-checkbox",{attrs:{"hide-details":"",label:"Show Anchors"},model:{value:t.showAnchors,callback:function(e){t.showAnchors=e},expression:"showAnchors"}})],1),n("v-content",[n("v-container",{staticClass:"fill-height"},[n("FindTags")],1),n("ErrorDialog")],1),n("v-footer",{attrs:{padless:""}},[n("v-row",{staticClass:"text-right"},[n("v-col")],1)],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showMap?n("div",{staticStyle:{height:"100%",width:"100%"}},[n("l-map",{ref:"blocMap",staticStyle:{height:"90%",width:"100%"},attrs:{zoom:t.zoom,center:t.center,attribution:!0}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t.showAnchors?n("div",t._l(t.anchors,(function(e){return n("l-marker",{key:e.macAddress,attrs:{"lat-lng":e.position},on:{"update:latLng":function(n){return t.$set(e,"position",n)},"update:lat-lng":function(n){return t.$set(e,"position",n)}}},[n("l-tooltip",{attrs:{content:e.label}})],1)})),1):t._e(),t._l(t.tags,(function(e){return n("div",{key:e.macAddress},[void 0!==e.position?n("l-marker",{attrs:{"lat-lng":e.position,icon:t.tagActiveIcon},on:{"update:latLng":function(n){return t.$set(e,"position",n)},"update:lat-lng":function(n){return t.$set(e,"position",n)}}},[n("l-tooltip",{attrs:{content:t.tagTooltip(e)}})],1):t._e()],1)}))],2)],1):t._e()},i=[],c=n("2699"),u=n("a40a"),l=n("4e2b"),p=n("31dc"),h={name:"FindTags",components:{LMap:c["a"],LTileLayer:u["a"],LMarker:l["a"],LTooltip:p["a"]},data:function(){return{url:"https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",attribution:'&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',tagActiveIcon:void 0,tagInactiveIcon:void 0}},computed:{showMap:function(){return""===this.$store.state.errorMessage},showAnchors:function(){return this.$store.state.showAnchors},zoom:function(){return void 0===this.mapConfig?10:this.mapConfig.zoom},center:function(){return void 0===this.mapConfig?[0,0]:this.mapConfig.center},mapConfig:function(){return this.$store.state.mapConfig},anchors:function(){return this.$store.state.anchors},tags:function(){return this.$store.state.tags}},methods:{tagTooltip:function(t){var e=t.label;return void 0!==t.positionLabel&&(e+=", "+t.positionLabel),void 0!==t.positionTimestamp&&(e+=", "+t.positionTimestamp),e}},mounted:function(){this.$nextTick((function(){this.tagActiveIcon=window.L.icon.pulse({iconSize:[15,15],color:"#0040ff"}),this.tagInactiveIcon=window.L.icon.pulse({iconSize:[15,15],color:"#808080"})}))}},f=h,d=n("2877"),m=Object(d["a"])(f,a,i,!1,null,null,null),g=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.showErrorDialog,callback:function(e){t.showErrorDialog=e},expression:"showErrorDialog"}},[n("v-card",[n("v-card-title",[t._v("Error")]),n("v-card-text",[t._v(t._s(t.errorMessage))]),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{attrs:{color:"primary"},on:{click:t.clearErrorMessage}},[t._v(" OK ")])],1)],1)],1)],1)},b=[],y={computed:{errorMessage:function(){return this.$store.state.errorMessage},showErrorDialog:function(){return""!==this.errorMessage&&void 0!==this.errorMessage}},methods:{clearErrorMessage:function(){this.$store.dispatch("clearErrorMessage")}}},w=y,S=n("6544"),C=n.n(S),$=n("8336"),_=n("b0af"),M=n("99d9"),k=n("169a"),A=n("0fd9"),T=Object(d["a"])(w,v,b,!1,null,null,null),x=T.exports;C()(T,{VBtn:$["a"],VCard:_["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:M["c"],VDialog:k["a"],VRow:A["a"]});var O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-chip",t._g({staticClass:"ma-4",attrs:{color:t.color,"text-color":"white",label:""}},o),[t._v(" "+t._s(t.systemStatus)+" ")])]}}])},[n("span",[t._v(t._s(t.mqttBroker))])])},E=[],V={computed:{systemStatus:function(){return this.$store.state.systemStatus},mqttBroker:function(){return"ws://".concat(this.$store.state.mqttBroker.hostname)+":".concat(this.$store.state.mqttBroker.port)+"".concat(this.$store.state.mqttBroker.path)},color:function(){return"connected"===this.systemStatus?"orange":"ready"===this.systemStatus?"green":"disconnected"===this.systemStatus?"red":"blue"}}},q=V,B=n("cc20"),j=n("3a2f"),L=Object(d["a"])(q,O,E,!1,null,null,null),P=L.exports;C()(L,{VChip:B["a"],VTooltip:j["a"]});n("7db0"),n("d81d"),n("18a5");var I=n("d4ec"),D=n("bee2"),z=n("4259"),F=n.n(z),J=function(){function t(e,n){var o=this;Object(I["a"])(this,t),this.client=new F.a.Client(e.hostname,e.port,e.path,"clientId"),this.client.onConnectionLost=function(t){n.dispatch("systemStatus",{newStatus:"disconnected",errorMessage:t.errorMessage})},this.client.onMessageArrived=function(t){return o.parseMessage(t)},this.topic=e.topic,this.$store=n}return Object(D["a"])(t,[{key:"connect",value:function(){var t=this;this.$store.dispatch("systemStatus",{newStatus:"connecting"}),this.client.connect({onSuccess:function(){return t.onConnected()},reconnect:!1})}},{key:"parseMessage",value:function(t){if(t.topic===this.topic){var e=JSON.parse(t.payloadString);if(e.hasOwnProperty("type"))if("res-config"===e.type)this.$store.dispatch("setMapConfig",{mapConfig:e.config.map}),this.$store.dispatch("setAnchors",{anchors:e.config.anchors}),this.$store.dispatch("setTags",{tags:e.config.tags}),this.$store.dispatch("systemStatus",{newStatus:"ready"});else if("tag-position"===e.type){var n=this.$store.state.anchors,o=n.find((function(t){return t.macAddress===e.anchor}));void 0===o||this.$store.dispatch("setTagPosition",{position:{tagMacAddress:e.tag,anchor:o,timestamp:e.timestamp}})}}}},{key:"getConfig",value:function(){var t=this;this.client.publish(this.topic,JSON.stringify({type:"req-config"})),this.$store.dispatch("systemStatus",{newStatus:"fetching"}),setTimeout((function(){"fetching"===t.$store.state.systemStatus&&t.$store.dispatch("systemStatus",{newStatus:"connected"})}),1e4)}},{key:"onConnected",value:function(){this.$store.dispatch("systemStatus",{newStatus:"connected"}),this.client.subscribe(this.topic),this.getConfig()}}]),t}(),U={name:"App",components:{FindTags:g,ErrorDialog:x,ConnectivityBadge:P},data:function(){return{mqttClient:void 0}},computed:{mqttBroker:function(){return this.$store.state.mqttBroker},systemStatus:function(){return this.$store.state.systemStatus},showButton:function(){return"connected"===this.systemStatus},buttonText:function(){return"connected"===this.systemStatus?"get config":""},showAnchors:{get:function(){return this.$store.state.showAnchors},set:function(t){this.$store.state.showAnchors=t}}},methods:{mqttClientCallback:function(){},clickHandler:function(){"disconnected"===this.systemStatus?this.mqttClient.connect():"connected"===this.systemStatus&&this.mqttClient.getConfig()}},mounted:function(){this.$nextTick((function(){this.mqttClient=new J(this.mqttBroker,this.$store),this.mqttClient.connect()}))}},R=U,H=n("7496"),N=n("40dc"),K=n("ac7c"),W=n("62ad"),G=n("a523"),Q=n("a75b"),X=n("553a"),Y=n("2fa4"),Z=n("2a7f"),tt=Object(d["a"])(R,s,r,!1,null,null,null),et=tt.exports;C()(tt,{VApp:H["a"],VAppBar:N["a"],VBtn:$["a"],VCheckbox:K["a"],VCol:W["a"],VContainer:G["a"],VContent:Q["a"],VFooter:X["a"],VRow:A["a"],VSpacer:Y["a"],VToolbarTitle:Z["a"]});var nt=n("f309");o["a"].use(nt["a"]);var ot=new nt["a"]({}),st=(n("159b"),n("2f62"));o["a"].use(st["a"]);var rt=new st["a"].Store({state:{showAnchors:!1,connectedWithServer:!1,mapConfig:void 0,anchors:[],tags:[],mqttBroker:{hostname:"broker.hivemq.com",port:8e3,path:"/mqtt",topic:"bloc/demo"},systemStatus:"disconnected",errorMessage:""},mutations:{setMapConfig:function(t,e){t.mapConfig=e},setAnchors:function(t,e){t.anchors=[],e.forEach((function(e){t.anchors.push({macAddress:e.macAddress,label:e.label,position:{lat:e.latitude,lng:e.longitude}})}))},setTags:function(t,e){t.tags=[],e.forEach((function(e){t.tags.push({macAddress:e.macAddress,label:e.label,position:void 0,positionLabel:void 0,positionTimestamp:void 0})}))},setTagPosition:function(t,e){var n=t.tags.find((function(t){return t.macAddress===e.tagMacAddress}));void 0===n||(n.position={lat:e.anchor.position.lat,lng:e.anchor.position.lng},n.positionLabel=e.anchor.label,n.positionTimestamp=e.timestamp)},systemStatus:function(t,e){t.systemStatus=e},setErrorMessage:function(t,e){t.errorMessage=e}},actions:{setMapConfig:function(t,e){var n=t.commit;n("setMapConfig",e.mapConfig)},setAnchors:function(t,e){var n=t.commit;n("setAnchors",e.anchors)},setTags:function(t,e){var n=t.commit;n("setTags",e.tags)},setTagPosition:function(t,e){var n=t.commit;n("setTagPosition",e.position)},systemStatus:function(t,e){var n=t.commit;n("systemStatus",e.newStatus),"disconnected"===e.newStatus&&n("setErrorMessage",e.errroMessage)},clearErrorMessage:function(t){var e=t.commit;e("setErrorMessage","")}},modules:{}}),at=n("e11e");n("6cc5"),n("94ae"),n("e578"),n("0ca6");delete at["Icon"].Default.prototype._getIconUrl,at["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),o["a"].config.productionTip=!1,window.vm=new o["a"]({vuetify:ot,store:rt,render:function(t){return t(et)}}).$mount("#app")}});
//# sourceMappingURL=app.43f25836.js.map