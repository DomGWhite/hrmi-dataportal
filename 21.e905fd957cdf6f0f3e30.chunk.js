(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"8f188c1ce7a93ebd816b":function(e,n,t){"use strict";t.r(n);var o,r=t("8af190b70a6bc55c6f1b"),a=(t("8a2d1b95e05b6a321e74"),t("d7dd51e1bf6bfc2c9c3d")),i=t("a28fc3c963a1d4d1a2e5"),c=t("0d7f0986bcd2f33d8a2a"),f=t("ab4cb61bcb2dc161defb"),l=t("a72b40110d9c31c9b5c5"),d=t("6542cd13fd5dd1bcffd4"),u=t("d37a67ac65ef80407259");var b,p=function(e){var n,t=e.innerhtml;return function(e,n,t,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),n&&a)for(var c in a)void 0===n[c]&&(n[c]=a[c]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var f=new Array(i),l=0;l<i;l++)f[l]=arguments[l+3];n.children=f}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}("div",{className:"hrmi-html",dangerouslySetInnerHTML:{__html:(n=t,n.split("<a ").join('<a target="_blank" '))}})};function s(e,n,t,o){b||(b="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&r)for(var i in r)void 0===n[i]&&(n[i]=r[i]);else n||(n=r||{});if(1===a)n.children=o;else if(a>1){for(var c=new Array(a),f=0;f<a;f++)c[f]=arguments[f+3];n.children=c}return{$$typeof:b,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var v,y=s(t("0b3cb19af78752326f59").default.div.withConfig({displayName:"Loading__Styled",componentId:"kpdw1x-0"})(["animation:pulsate 1s ease-out;animation-iteration-count:infinite;opacity:0.5;@keyframes pulsate{0%{opacity:0.5;}50%{opacity:1;}100%{opacity:0.5;}}"]),{},void 0,"Loading..."),m=function(){return y};function h(e,n,t,o){v||(v="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&r)for(var i in r)void 0===n[i]&&(n[i]=r[i]);else n||(n=r||{});if(1===a)n.children=o;else if(a>1){for(var c=new Array(a),f=0;f<a;f++)c[f]=arguments[f+3];n.children=c}return{$$typeof:v,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}t.d(n,"PathPage",function(){return S});var g=h(c.Helmet,{},void 0,h("title",{},void 0,"Page"),h("meta",{name:"description",content:"Description of Page"})),w=h(m,{});function S(e){var n=e.match,t=e.onLoadContent,o=e.content,a=e.closeTarget;return Object(r.useEffect)(function(){t(n.params.page)}),h("div",{},void 0,g,h(u.a,{closeTarget:a}),h("div",{},void 0,o&&h(p,{innerhtml:o}),!o&&w))}var j=Object(i.b)({content:function(e,n){return Object(d.e)(e,n.match.params.page)},closeTarget:function(e){return Object(d.d)(e)}});var k=Object(a.connect)(j,function(e){return{onLoadContent:function(n){e(Object(l.g)(n))}}});n.default=Object(f.compose)(k)(S)}}]);