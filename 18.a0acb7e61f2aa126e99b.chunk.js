(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"20bbe04dcb1390032f91":function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),a=n("76abbe2db5a955046df2");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function(e){return o.a.createElement(a.a,i({margin:{top:"5px"}},e))}},"2117e87f864c730da6a3":function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),a=n("eb656803928a435bd3cc");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function(e){return o.a.createElement(a.a,i({direction:"column"},e))}},"52a9b20d5dc3a84fe9b3":function(e,t,n){"use strict";n.r(t);var r,o=n("8af190b70a6bc55c6f1b"),a=n.n(o),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("ab039aecd4a1d4fedc0e"),l=n("a28fc3c963a1d4d1a2e5"),d=n("ab4cb61bcb2dc161defb"),u=n("76abbe2db5a955046df2"),f=n("0b3cb19af78752326f59"),s=n("6542cd13fd5dd1bcffd4"),p=n("66543f9bb6e90e461320"),b=n("eb656803928a435bd3cc"),m=n("a72b40110d9c31c9b5c5"),v=n("fcb99a06256635f70435"),h=n("02ed36e7ccc5625439c9");function y(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var c in a)void 0===t[c]&&(t[c]=a[c]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var g=Object(f.default)(p.a).withConfig({displayName:"OverviewMetrics__Option",componentId:"rtytvu-0"})([""]);var O=Object(l.b)({scale:function(e){return Object(s.D)(e)}});var w,j=Object(i.connect)(O,function(e){return{onSelectMetric:function(t){return e(Object(m.k)(t))}}}),k=Object(d.compose)(j)(function(e){var t=e.scale,n=e.onSelectMetric;return y(b.a,{pad:"medium"},void 0,v.B.map(function(e){var r=v.k.filter(function(t){return t.type===e});return y(b.a,{pad:{bottom:"medium",top:"none"}},e,y(u.a,{level:6,margin:{top:"none",bottom:"xsmall",horizontal:"none"}},void 0,a.a.createElement(c.FormattedMessage,h.a["rights-types"][e])),r.map(function(e){var r="r"===t&&v.A.filter(function(t){return t.dimension===e.key&&"undefined"===typeof t.aggregate});return y(b.a,{pad:{bottom:"xsmall",top:"none"}},e.key,y(g,{plain:!0,onClick:function(){n(e.key)}},void 0,y(u.a,{level:4,margin:{vertical:"xsmall",horizontal:"none"}},void 0,a.a.createElement(c.FormattedMessage,h.a.dimensions[e.key]))),r&&r.map(function(e){return y("div",{},e.key,y(g,{plain:!0,onClick:function(){n(e.key)}},void 0,a.a.createElement(c.FormattedMessage,h.a.rights[e.key])))}))}))}))}),S=n("bd226f9aa780a11317db"),x=n("bac14fcbe71a01730001"),_=n("5ca68c6edf7ca33c5f8f"),C=n("f96223989a6a4c69bd43");function M(e,t,n,r){w||(w="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:w,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var I=100,E=I*Math.pow(2,.5),P=f.default.div.withConfig({displayName:"DiamondChart__Styled",componentId:"sc-1vx7rnt-0"})(["height:","px;padding-top:","px;"],E,(E-I)/2),z=Object(f.default)(function(e){return a.a.createElement(b.a,A({direction:"row"},e,{align:"center",alignSelf:"center"}))}).withConfig({displayName:"DiamondChart__BarWrapRotated",componentId:"sc-1vx7rnt-1"})(["display:block;width:","px;margin:0 auto;transform:rotate(-45deg);"],I);var N,F=function(e){var t=e.dimensions,n=e.rights;return t||n?M(P,{},void 0,M(z,{},void 0,t&&M(C.a,{omitMinMaxLabels:!0,minValue:0,data:t,level:0,height:I}),n&&M(C.a,{omitMinMaxLabels:!0,minValue:0,data:n,level:0}))):null},$=Object(c.defineMessages)({hi:{id:"".concat("hrmi.containers.CountryPreview",".hi"),defaultMessage:" (HI)"}});function R(e,t,n,r){N||(N="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:N,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){B(e,t,n[t])})}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=function(e,t){return 0!==Object.keys(e).length&&Object.values(e).reduce(function(e,n){return n.find(function(e){return e.standard===t.code})?e+1:e},0)>0},D=function(e,t,n,r){if(!e||!t)return!1;var o=t.filter(function(e){return n?!!v.m.find(function(t){return t.code===e.metric_code&&t.right===n.key})&&("Both"===e.standard||e.standard===r.code):"Both"===e.standard||e.standard===r.code});return e&&!!Object.values(e).find(function(e){return o.indexOf(e.metric_code)>-1})},T=function(e,t,n,r,o){return v.k.map(function(a){return V({},a,{score:e[a.type]&&e[a.type][a.key]&&("cpr"===a.type?e.cpr[a.key][0]:e.esr[a.key].find(function(e){return e.standard===t.code})),hasScoreAlternate:"esr"===a.type&&e.esr&&e.esr.esr&&!!e.esr.esr.find(function(e){return e.standard===r.code}),hasScoreRights:"esr"===a.type&&e.esr&&H(e.esr,t),hasScoreRightsAlternate:"esr"===a.type&&e.esr&&H(e.esr,r),hasScoreIndicators:"esr"===a.type&&D(e.indicators,o,!1,t),hasScoreIndicatorsAlternate:"esr"===a.type&&D(e.indicators,o,!1,r),column:"cpr"===a.type?v.c.CPR.MEAN:n&&n.column||v.c.ESR.CORE,maxValue:"cpr"===a.type?10:100})})},L=function(e,t,n,r,o){return(a=v.A,Object.values(a).filter(function(e){return"undefined"===typeof e.aggregate}).sort(function(e,t){return"cpr"===e.type&&"cpr"!==t.type?-1:"esr"===e.type&&"esr"!==t.type?1:"cpr"===e.type&&"cpr"===t.type?"empowerment"===e.dimension&&"empowerment"!==t.dimension?-1:("empowerment"!==e.dimension&&t.dimension,1):1})).map(function(a){return V({},a,{score:e[a.type]&&e[a.type][a.key]&&("cpr"===a.type?e.cpr[a.key][0]:e.esr[a.key].find(function(e){return e.standard===t.code&&"All"===e.group})),hasScoreAlternate:"esr"===a.type&&e.esr&&e.esr[a.key]&&!!e.esr[a.key].find(function(e){return e.standard===r.code}),hasScoreIndicators:"esr"===a.type&&D(e.indicators,o,a,t),hasScoreIndicatorsAlternate:"esr"===a.type&&D(e.indicators,o,a,r),column:"cpr"===a.type?v.c.CPR.MEAN:n&&n.column||v.c.ESR.CORE,maxValue:"cpr"===a.type?10:100})});var a};var J,K=Object(c.injectIntl)(function(e){var t=e.onSelectCountry,n=e.country,r=e.scale,o=e.standard,i=e.otherStandard,l=e.benchmark,d=e.scores,u=e.indicators;return n?R(b.a,{pad:"small",width:"200px",alignContent:"center"},void 0,n&&R(p.a,{onClick:function(){return t(n.country_code)}},void 0,"d"===r&&R("div",{},void 0,R(F,{dimensions:T(d,o,l,i,u),benchmark:l})),"r"===r&&R("div",{},void 0,R(F,{rights:L(d,o,l,i,u),benchmark:l})),R(b.a,{},void 0,R(_.a,{textAlign:"center",alignSelf:"center"},void 0,R("strong",{},void 0,a.a.createElement(c.FormattedMessage,h.a.countries[n.country_code]),"1"===n.high_income_country&&a.a.createElement(c.FormattedMessage,$.hi)))))):null});function W(e,t,n,r){J||(J="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:J,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var q=function(e,t){return"0"===e.high_income_country&&"core"===t.key||"1"===e.high_income_country&&"hi"===t.key},G=function(e,t){return{esr:t.esr&&t.esr[e],cpr:t.cpr&&t.cpr[e],indicators:t.indicators&&t.indicators[e]}},Q=function(e){return(e.esr&&e.esr.esr?1:0)+(e.cpr&&e.cpr.empowerment?1:0)+(e.cpr&&e.cpr.physint?1:0)},U=function(e){return(e.esr?Object.keys(e.esr).length:0)+(e.cpr?Object.keys(e.cpr).length:0)},X=function(e){return e.indicators?Object.keys(e.indicators).length:0},Y=W(x.a,{}),Z=W(x.a,{});var ee=Object(l.b)({regionFilterValue:function(e){return Object(s.w)(e)},incomeFilterValue:function(e){return Object(s.p)(e)},scale:function(e){return Object(s.D)(e)},standard:function(e){return Object(s.F)(e)},benchmark:function(e){return Object(s.a)(e)},indicators:function(e){return Object(s.n)(e)}});var te,ne=Object(i.connect)(ee,function(e){return{onRemoveFilter:function(t){return e(Object(m.i)({pathname:""},{replace:!1,deleteParams:[t]}))},onSelectCountry:function(t){return e(Object(m.j)(t))}}}),re=Object(d.compose)(ne)(Object(c.injectIntl)(function(e){var t=e.countries,n=e.scoresAllCountries,r=e.regionFilterValue,o=e.incomeFilterValue,a=e.onRemoveFilter,i=e.onSelectCountry,c=e.intl,l=e.scale,d=e.standard,u=e.benchmark,f=e.indicators;if(!n)return null;var s=t&&t.sort(function(e,t){return c.formatMessage(h.a.countries[e.country_code])>c.formatMessage(h.a.countries[t.country_code])?1:-1}).sort(function(e,t){var r=G(e.country_code,n),o=G(t.country_code,n),a=Q(r),i=Q(o);if(a>i)return-1;if(a<i)return 1;var c=U(r),l=U(o);if(c>l)return-1;if(c<l)return 1;var d=X(r),u=X(o);return d>u?-1:1}),m=v.K.find(function(e){return e.key===d}),y=v.K.find(function(e){return e.key!==d});return W(b.a,{pad:{horizontal:"medium"}},void 0,r&&W("span",{},void 0,W(p.a,{primary:!0,icon:Y,reverse:!0,onClick:function(){return a("region")},label:c.formatMessage(h.a.regions[r])})),o&&W("span",{},void 0,W(p.a,{primary:!0,icon:Z,reverse:!0,onClick:function(){return a("income")},label:c.formatMessage(h.a.income[o])})),s&&n&&W(b.a,{direction:"row",wrap:!0,width:"100%"},void 0,W(S.a,{items:s,step:30,show:0},void 0,function(e){return W(K,{country:e,scale:l,scores:G(e.country_code,n),standard:m,otherStandard:y,defaultStandard:q(e,m),benchmark:v.b.find(function(e){return e.key===u}),onSelectCountry:function(){return i(e.country_code)},indicators:f},e.country_code)})))})),oe=n("7010be3016a461c303eb"),ae=n("2117e87f864c730da6a3"),ie=n("d0c45d704573d70701d7"),ce=n("20bbe04dcb1390032f91"),le=Object(c.defineMessages)({aboveTitle:{id:"".concat("hrmi.components.Overview",".aboveTitle"),defaultMessage:"Human rights performance overview"},title:{id:"".concat("hrmi.components.Overview",".title"),defaultMessage:"{number} countries"}});function de(e,t,n,r){te||(te="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:te,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"PathOverview",function(){return pe});var fe=Object(f.default)(function(e){return a.a.createElement(u.a,ue({level:4},e))}).withConfig({displayName:"PathOverview__SuperHeadingStyled",componentId:"sc-12jmd80-0"})(["font-weight:normal;margin-bottom:5px;margin-top:0;"]),se=de(k,{});function pe(e){var t=e.countries,n=e.scoresAllCountries,r=e.intl;return de(ae.a,{},void 0,de(ie.a,{paddingTop:!0},void 0,t&&de("span",{},void 0,de(fe,{},void 0,a.a.createElement(c.FormattedMessage,le.aboveTitle)),de(ce.a,{},void 0,a.a.createElement(c.FormattedMessage,ue({},le.title,{values:{number:t.length}}))))),de(oe.a,{tabs:[{key:"countries",title:r.formatMessage(h.a.tabs.countries),content:de(re,{countries:t,scoresAllCountries:n})},{key:"metrics",title:r.formatMessage(h.a.tabs.metrics),content:se}]}))}var be=Object(l.b)({countries:function(e){return Object(s.h)(e)},scoresAllCountries:function(e){return Object(s.E)(e)}}),me=Object(i.connect)(be,null);t.default=Object(d.compose)(me)(Object(c.injectIntl)(pe))},"7010be3016a461c303eb":function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),a=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),i=n("ab4cb61bcb2dc161defb"),c=n("a28fc3c963a1d4d1a2e5"),l=n("761b1f7fdd256e4f5426"),d=n("eb656803928a435bd3cc"),u=n("944163eca94c79db0ae1"),f=n("d3a5f7bd22eda8331e4b"),s=n("6542cd13fd5dd1bcffd4"),p=n("a72b40110d9c31c9b5c5"),b=n("0b3cb19af78752326f59"),m=n("5ca68c6edf7ca33c5f8f");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=Object(b.default)(m.a).withConfig({displayName:"ColumnTitle__Styled",componentId:"qvvrwc-0"})(["font-weight:",";display:block;padding-bottom:1px;border-bottom:2px solid transparent;"],function(e){return e.theme.columnHeader.fontWeight}),y=function(e){return o.a.createElement(h,v({margin:{horizontal:"none",vertical:"none"}},e))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O=Object(b.default)(d.a).withConfig({displayName:"ColumnHeader__Styled",componentId:"sc-1o1t2dt-0"})(["border-bottom:",";"],function(e){return e.theme.columnHeader.border});var w,j=function(e){return o.a.createElement(O,g({pad:{left:e.main?"medium":"xsmall"}},e))},k=b.default.div.withConfig({displayName:"ColumnContent",componentId:"sc-1wsfc7w-0"})(["border-right:",";border-width:","px;}};"],function(e){return e.theme.columnHeader.border},function(e){return e.main?1:0});function S(e,t,n,r){w||(w="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:w,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var x=Object(c.b)({tabIndex:function(e){return Object(s.G)(e)}});var _=Object(a.connect)(x,function(e){return{onTabClick:function(t){return e(Object(p.p)(t))}}});t.a=Object(i.compose)(_)(function(e){var t=e.tabs,n=e.tabIndex,r=e.onTabClick;return S(l.a.Consumer,{},void 0,function(e){var o=t.filter(function(e){return e.content}),a="small"===e?o:o.slice(0,o.length-1);return S(d.a,{direction:"row"},void 0,S(d.a,{direction:"column",flex:!0},void 0,("small"===e||o.length>2)&&S(u.a,{justify:"start",activeIndex:n,onActive:function(e){return e!==n&&r(e)}},void 0,a.slice().map(function(e){return S(f.a,{title:e.title},e.key,S(k,{main:!0},void 0,e.content))})),"small"!==e&&o.length<=2&&S(d.a,{direction:"column"},void 0,S(j,{main:!0},void 0,S(y,{},void 0,o[0].title)),S(k,{main:!0},void 0,o[0].content))),"small"!==e&&o.length>1&&S(d.a,{width:"medium"===e?"280px":"360px",direction:"column"},void 0,S(j,{},void 0,S(y,{},void 0,o[o.length-1].title)),S(k,{},void 0,o[o.length-1].content)))})})},d0c45d704573d70701d7:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),a=n("0b3cb19af78752326f59"),i=n("eb656803928a435bd3cc");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=Object(a.default)(i.a).withConfig({displayName:"ContentContainer__Styled",componentId:"sc-1iurujo-0"})(["width:100%;margin:0 auto;position:relative;padding-top:",";"],function(e){return e.paddingTop?"30px":0});t.a=function(e){return o.a.createElement(l,c({pad:{horizontal:"medium"},direction:"row"},e))}},f96223989a6a4c69bd43:function(e,t,n){"use strict";var r,o=n("8af190b70a6bc55c6f1b"),a=n.n(o),i=(n("8a2d1b95e05b6a321e74"),n("0b3cb19af78752326f59")),c=n("eb656803928a435bd3cc"),l=n("5ca68c6edf7ca33c5f8f"),d=n("ab039aecd4a1d4fedc0e"),u=n("f598121af61dcb613e5b");function f(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var c in a)void 0===t[c]&&(t[c]=a[c]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e){return a.a.createElement(c.a,s({direction:"row"},e,{align:"center",fill:"horizontal"}))},b=function(e){return a.a.createElement(c.a,s({},e,{width:"25px",pad:"xxsmall"}))},m=function(e){return a.a.createElement(c.a,s({},e,{width:"50px",pad:"xxsmall"}))},v=function(e){return a.a.createElement(c.a,s({},e,{fill:"horizontal"}))},h=[100,35,15,8],y=i.default.div.withConfig({displayName:"BarMultipleHorizontal__BarAnchor",componentId:"sc-13gv5rv-0"})(["position:relative;display:block;width:100%;height:","px;"],function(e){return e.height}),g=i.default.div.withConfig({displayName:"BarMultipleHorizontal__NoData",componentId:"sc-13gv5rv-1"})(["position:absolute;left:2px;top:4px;"]),O=i.default.div.withConfig({displayName:"BarMultipleHorizontal__BarReference",componentId:"sc-13gv5rv-2"})(["position:absolute;left:0;top:","px;width:100%;height:","px;background-color:",";border:1px solid;border-color:",";"],function(e){return e.top||0},function(e){return e.height},function(e){return e.noData?"transparent":e.theme.global.colors["light-2"]},function(e){return e.noData?e.theme.global.colors["light-4"]:"transparent"}),w=i.default.div.withConfig({displayName:"BarMultipleHorizontal__BarValue",componentId:"sc-13gv5rv-3"})(["position:absolute;left:0;top:","px;height:","px;background-color:",";"],function(e){return e.top||0},function(e){return e.height},function(e){return e.theme.global.colors[e.color]});t.a=Object(d.injectIntl)(function(e){var t=e.minValue,n=e.maxValue,r=e.data,o=e.color,a=e.column,i=e.unit,c=e.level,d=void 0===c?1:c,s=e.intl,j=e.hideMsg,k=void 0!==j&&j,S=e.omitMinMaxLabels,x=void 0!==S&&S,_=e.height,C=d>0&&r&&r.reduce(function(e,t){return e||!!t.score},!1),M=d>0&&r&&r.reduce(function(e,t){return e||t.hasScoreAlternate},!1),A=d>0&&r&&r.reduce(function(e,t){return e||t.hasScoreIndicators},!1),I=_||h[d],E=r&&(I-(r.length-1))/r.length;return f(p,{},void 0,!x&&f(b,{},void 0,f(l.a,{size:"small",alignSelf:"end"},void 0,t)),f(v,{},void 0,f(y,{height:I},void 0,!C&&!k&&d>0&&f(O,{height:I,noData:!0},void 0,f(g,{},void 0,f(l.a,{size:"small"},void 0,Object(u.b)(s,{hasScoreAlternate:M,hasScoreIndicators:A}),Object(u.a)(s,{hasScoreAlternate:M,hasScoreIndicators:A})))),(C||0===d)&&r&&r.map(function(e,t){var i=e.column||a,c=e.maxValue||n,p=e.score&&e.score[i];return f(O,{height:E,top:E*t+t,noData:!p},e.key,p&&f(w,{height:E,color:e.dimension||e.key||o,style:{width:"".concat(p/c*100,"%")}}),!p&&d<1&&r.length<4&&!k&&f(g,{level:d},void 0,f(l.a,{size:"xsmall"},void 0,Object(u.b)(s,e))))}))),!x&&f(m,{},void 0,f(l.a,{size:"small"},void 0,i?"".concat(n).concat(i):"".concat(n))))})}}]);