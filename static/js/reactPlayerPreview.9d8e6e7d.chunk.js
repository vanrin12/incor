(this.webpackJsonpincor=this.webpackJsonpincor||[]).push([[11],{357:function(e,t,n){var r,a=n(82),i=n(76),o=n(77),l=n(74),u=n(78),s=n(79),c=n(71),p=Object.create,d=Object.defineProperty,f=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,m=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,g=function(e,t,n,r){if(t&&"object"===typeof t||"function"===typeof t){var a,i=c(h(t));try{var o=function(){var i=a.value;y.call(e,i)||i===n||d(e,i,{get:function(){return t[i]},enumerable:!(r=f(t,i))||r.enumerable})};for(i.s();!(a=i.n()).done;)o()}catch(l){i.e(l)}finally{i.f()}}return e},b=function(e,t,n){return function(e,t,n){t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},v={};!function(e,t){for(var n in t)d(e,n,{get:t[n],enumerable:!0})}(v,{default:function(){return _}}),e.exports=(r=v,g(d({},"__esModule",{value:!0}),r));var w=function(e,t,n){return n=null!=e?p(m(e)):{},g(!t&&e&&e.__esModule?n:d(n,"default",{value:e,enumerable:!0}),e)}(n(0)),k={},_=function(e){"use strict";s(n,e);var t=u(n);function n(){var e;return i(this,n),e=t.apply(this,arguments),b(l(e),"mounted",!1),b(l(e),"state",{image:null}),b(l(e),"handleKeyPress",(function(t){"Enter"!==t.key&&" "!==t.key||e.props.onClick()})),e}return o(n,[{key:"componentDidMount",value:function(){this.mounted=!0,this.fetchImage(this.props)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.url,r=t.light;e.url===n&&e.light===r||this.fetchImage(this.props)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"fetchImage",value:function(e){var t=this,n=e.url,r=e.light,a=e.oEmbedUrl;if(!w.default.isValidElement(r))if("string"!==typeof r){if(!k[n])return this.setState({image:null}),window.fetch(a.replace("{url}",n)).then((function(e){return e.json()})).then((function(e){if(e.thumbnail_url&&t.mounted){var r=e.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");t.setState({image:r}),k[n]=r}}));this.setState({image:k[n]})}else this.setState({image:r})}},{key:"render",value:function(){var e=this.props,t=e.light,n=e.onClick,r=e.playIcon,i=e.previewTabIndex,o=this.state.image,l=w.default.isValidElement(t),u={display:"flex",alignItems:"center",justifyContent:"center"},s={preview:a({width:"100%",height:"100%",backgroundImage:o&&!l?"url(".concat(o,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},u),shadow:a({background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:"64px",width:"64px",height:"64px",position:l?"absolute":void 0},u),playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},c=w.default.createElement("div",{style:s.shadow,className:"react-player__shadow"},w.default.createElement("div",{style:s.playIcon,className:"react-player__play-icon"}));return w.default.createElement("div",{style:s.preview,className:"react-player__preview",onClick:n,tabIndex:i,onKeyPress:this.handleKeyPress},l?t:null,r||c)}}]),n}(w.Component)}}]);
//# sourceMappingURL=reactPlayerPreview.9d8e6e7d.chunk.js.map