(this["webpackJsonphey-stars"]=this["webpackJsonphey-stars"]||[]).push([[13],{349:function(e,n,t){var r,a=t(76),o=t(77),l=t(74),u=t(78),i=t(79),s=t(71),c=Object.create,p=Object.defineProperty,y=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,d=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,h=function(e,n,t,r){if(n&&"object"===typeof n||"function"===typeof n){var a,o=s(f(n));try{var l=function(){var o=a.value;m.call(e,o)||o===t||p(e,o,{get:function(){return n[o]},enumerable:!(r=y(n,o))||r.enumerable})};for(o.s();!(a=o.n()).done;)l()}catch(u){o.e(u)}finally{o.f()}}return e},v=function(e,n,t){return function(e,n,t){n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t}(e,"symbol"!==typeof n?n+"":n,t),t},b={};!function(e,n){for(var t in n)p(e,t,{get:n[t],enumerable:!0})}(b,{default:function(){return O}}),e.exports=(r=b,h(p({},"__esModule",{value:!0}),r));var P=function(e,n,t){return t=null!=e?c(d(e)):{},h(!n&&e&&e.__esModule?t:p(t,"default",{value:e,enumerable:!0}),e)}(t(0)),k=t(73),g=t(81),O=function(e){"use strict";i(t,e);var n=u(t);function t(){var e;return a(this,t),e=n.apply(this,arguments),v(l(e),"callPlayer",k.callPlayer),v(l(e),"duration",null),v(l(e),"currentTime",null),v(l(e),"secondsLoaded",null),v(l(e),"mute",(function(){e.callPlayer("mute")})),v(l(e),"unmute",(function(){e.callPlayer("unmute")})),v(l(e),"ref",(function(n){e.iframe=n})),e}return o(t,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var n=this;(0,k.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((function(e){n.iframe&&(n.player=new e.Player(n.iframe),n.player.setLoop(n.props.loop),n.player.on("ready",n.props.onReady),n.player.on("play",n.props.onPlay),n.player.on("pause",n.props.onPause),n.player.on("seeked",n.props.onSeek),n.player.on("ended",n.props.onEnded),n.player.on("error",n.props.onError),n.player.on("timeupdate",(function(e){var t=e.duration,r=e.seconds;n.duration=t,n.currentTime=r})),n.player.on("buffered",(function(e){var t=e.percent;n.duration&&(n.secondsLoaded=n.duration*t)})),n.props.muted&&n.player.mute())}),this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("setCurrentTime",e),n||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e=this.props.url.match(g.MATCH_URL_STREAMABLE)[1];return P.default.createElement("iframe",{ref:this.ref,src:"https://streamable.com/o/".concat(e),frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;"})}}]),t}(P.Component);v(O,"displayName","Streamable"),v(O,"canPlay",g.canPlay.streamable)}}]);
//# sourceMappingURL=reactPlayerStreamable.a74df103.chunk.js.map