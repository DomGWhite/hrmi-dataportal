(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"15d51e9ee376ded452c1":function(e,r,n){"use strict";var t,o=n("8af190b70a6bc55c6f1b"),a=(n("8a2d1b95e05b6a321e74"),n("ab039aecd4a1d4fedc0e")),i=n("eb656803928a435bd3cc"),s=n("66543f9bb6e90e461320"),c=n("a472c0138b6f8b46f40d"),l=n("bac14fcbe71a01730001"),u=n("e86a7b73cfdb20fb83e7"),f=n("fcb99a06256635f70435"),d=n("02ed36e7ccc5625439c9"),p=n("0b3cb19af78752326f59"),m=n("5ca68c6edf7ca33c5f8f");function g(e,r,n,o){t||(t="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(r||0===i||(r={children:void 0}),r&&a)for(var s in a)void 0===r[s]&&(r[s]=a[s]);else r||(r=a||{});if(1===i)r.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];r.children=c}return{$$typeof:t,type:e,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}var b,y=Object(p.default)(s.a).withConfig({displayName:"FilterOptions__Option",componentId:"sc-6dylx3-0"})([""]),v=function(e){var r=e.optionGroups,n=e.onSelect;return g(i.a,{pad:"small"},void 0,r&&r.map(function(e){return g(i.a,{direction:"column",pad:{bottom:"small"}},e.group,g("div",{},void 0,g(m.a,{size:"xsmall"},void 0,e.label)),e.options&&e.options.map(function(e){return g(y,{plain:!0,onClick:function(){return n(e)}},e.value,e.label)}))}))},h="hrmi.components.CountryFilters",O=Object(a.defineMessages)({addFilter:{id:"".concat(h,".addFilter"),defaultMessage:"Add country filter"},regionsFilterOptionGroup:{id:"".concat(h,".regionsFilterOptionGroup"),defaultMessage:"Regions"},incomeFilterOptionGroup:{id:"".concat(h,".incomeFilterOptionGroup"),defaultMessage:"Income group"},assessedFilterOptionGroup:{id:"".concat(h,".assessedFilterOptionGroup"),defaultMessage:"Assessment"}});function S(e,r,n,t){b||(b="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(r||0===a||(r={children:void 0}),r&&o)for(var i in o)void 0===r[i]&&(r[i]=o[i]);else r||(r=o||{});if(1===a)r.children=t;else if(a>1){for(var s=new Array(a),c=0;c<a;c++)s[c]=arguments[c+3];r.children=s}return{$$typeof:b,type:e,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}function M(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(t=(i=s.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(e){o=!0,a=e}finally{try{t||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(e){return function(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var x=function(e,r,n){var t=e.region,o=e.income,a=e.assessed,i=[];return!t&&n.indexOf("region")>-1&&(i=[].concat(w(i),[{group:"regions",label:r.formatMessage(O.regionsFilterOptionGroup),options:f.A.map(function(e){return{key:"region",value:e,label:r.formatMessage(d.a.regions[e])}})}])),!o&&n.indexOf("income")>-1&&(i=[].concat(w(i),[{group:"income",label:r.formatMessage(O.incomeFilterOptionGroup),options:f.m.map(function(e){return{key:"income",value:e.key,label:r.formatMessage(d.a.income[e.key])}})}])),!a&&n.indexOf("assessed")>-1&&(i=[].concat(w(i),[{group:"assessed",label:r.formatMessage(O.assessedFilterOptionGroup),options:f.a.map(function(e){return{key:"assessed",value:e,label:r.formatMessage(d.a.assessedFilters[e])}})}])),i},F=S(l.a,{}),A=S(l.a,{}),k=S(l.a,{}),j=S(u.a,{});r.a=Object(a.injectIntl)(function(e){var r=e.regionFilterValue,n=e.onRemoveFilter,t=e.onAddFilter,a=e.incomeFilterValue,l=e.assessedFilterValue,u=e.intl,f=e.filterGroups,p=M(Object(o.useState)(!1),2),m=p[0],g=p[1];return S(i.a,{direction:"row",pad:"xsmall"},void 0,f.indexOf("region")>-1&&r&&S(s.a,{primary:!0,icon:F,reverse:!0,onClick:function(){return n("region")},label:u.formatMessage(d.a.regions[r]),pad:"xxsmall",gap:"xxsmall",margin:{horizontal:"xsmall"}}),f.indexOf("income")>-1&&a&&S(s.a,{primary:!0,icon:A,reverse:!0,onClick:function(){return n("income")},label:u.formatMessage(d.a.income[a]),pad:"xxsmall",gap:"xxsmall",margin:{horizontal:"xsmall"}}),f.indexOf("assessed")>-1&&l&&S(s.a,{primary:!0,icon:k,reverse:!0,onClick:function(){return n("assessed")},label:u.formatMessage(d.a.assessedFilters[l]),pad:"xxsmall",gap:"xxsmall",margin:{horizontal:"xsmall"}}),(!(f.indexOf("region")&&r)||!(f.indexOf("income")>-1&&a)||!l&&f.indexOf("assessed")>-1)&&S(c.a,{plain:!0,reverse:!0,gap:"xxsmall",margin:{horizontal:"small"},icon:j,label:u.formatMessage(O.addFilter),onClose:function(){return g(!1)},onOpen:function(){return g(!0)},open:m,dropProps:{align:{top:"top",left:"left"}},dropContent:S(v,{optionGroups:x({region:r,income:a,assessed:l},u,f),onSelect:function(e){var r=e.key,n=e.value;g(!1),t(r,n)}})}))})},"412accbb2f56c6dae688":function(e,r,n){"use strict";var t,o=n("8af190b70a6bc55c6f1b"),a=n.n(o),i=(n("8a2d1b95e05b6a321e74"),n("ab039aecd4a1d4fedc0e")),s=n("eb656803928a435bd3cc"),c=n("a472c0138b6f8b46f40d"),l=n("66543f9bb6e90e461320"),u=n("1e6573c9df9849cdb69d"),f=n("fe9f56017646a6119f0d"),d=n("871dfc11635a925c219a"),p=n("20d362e3e41d598e9f77"),m="hrmi.components.CountrySort",g=Object(i.defineMessages)({sortBy:{id:"".concat(m,".sortBy"),defaultMessage:"Sort by:"},sortOptions:{name:{id:"".concat(m,".sortOptions.name"),defaultMessage:"Name"},score:{id:"".concat(m,".sortOptions.score"),defaultMessage:"Score"},assessment:{id:"".concat(m,".sortOptions.assessment"),defaultMessage:"Assessment"},gdp:{id:"".concat(m,".sortOptions.gdp"),defaultMessage:"GDP"},population:{id:"".concat(m,".sortOptions.population"),defaultMessage:"Population"}}}),b=n("0b3cb19af78752326f59");function y(e,r,n,o){t||(t="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(r||0===i||(r={children:void 0}),r&&a)for(var s in a)void 0===r[s]&&(r[s]=a[s]);else r||(r=a||{});if(1===i)r.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];r.children=c}return{$$typeof:t,type:e,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}var v,h=Object(b.default)(l.a).withConfig({displayName:"SortOptions__Option",componentId:"sc-1lc7sgl-0"})([""]),O=function(e){var r=e.options,n=e.onSelect;return y(s.a,{pad:"small"},void 0,r&&r.map(function(e){return y(h,{plain:!0,onClick:function(){return n(e)}},e,a.a.createElement(i.FormattedMessage,g.sortOptions[e]))}))};function S(e,r,n,t){v||(v="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(r||0===a||(r={children:void 0}),r&&o)for(var i in o)void 0===r[i]&&(r[i]=o[i]);else r||(r=o||{});if(1===a)r.children=t;else if(a>1){for(var s=new Array(a),c=0;c<a;c++)s[c]=arguments[c+3];r.children=s}return{$$typeof:v,type:e,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}function M(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(t=(i=s.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(e){o=!0,a=e}finally{try{t||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=S(u.a,{}),x=S(f.a,{}),F=S(d.a,{}),A=S(p.a,{});r.a=Object(i.injectIntl)(function(e){var r=e.sort,n=e.options,t=e.order,a=e.onSortSelect,i=e.onOrderToggle,u=e.intl,f=M(Object(o.useState)(!1),2),d=f[0],p=f[1];return S(s.a,{direction:"row",pad:"xsmall"},void 0,S(c.a,{plain:!0,reverse:!0,gap:"xxsmall",margin:{horizontal:"small"},icon:d?w:x,label:"".concat(u.formatMessage(g.sortBy)," ").concat(u.formatMessage(g.sortOptions[r])),onClose:function(){return p(!1)},onOpen:function(){return p(!0)},open:d,dropProps:{align:{top:"bottom",left:"left"}},dropContent:S(O,{options:n,onSelect:function(e){p(!1),a(e)}})}),S(l.a,{onClick:function(){return i("asc"===t?"desc":"asc")}},void 0,"asc"===t&&F,"desc"===t&&A))})},f598121af61dcb613e5b:function(e,r,n){"use strict";n.d(r,"d",function(){return o}),n.d(r,"f",function(){return a}),n.d(r,"c",function(){return i}),n.d(r,"b",function(){return s}),n.d(r,"e",function(){return c}),n.d(r,"g",function(){return p}),n.d(r,"h",function(){return m}),n.d(r,"a",function(){return g});var t=n("02ed36e7ccc5625439c9"),o=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e&&Object.values(e).filter(function(e){return e.dimension===r&&(n||"undefined"===typeof e.aggregate)})},a=function(e){return e&&e.empowerment&&!!e.empowerment.score},i=function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(e){return e.hasScoreRights||e.hasScoreIndicators}(r)?e.formatMessage(t.a.charts.incompleteData):function(e){return e.hasScoreAlternate||e.hasScoreRightsAlternate||e.hasScoreIndicatorsAlternate}(r)?e.formatMessage(t.a.charts.noDataForStandard):e.formatMessage(t.a.charts.noData)},s=function(e,r){return r.hasScoreAlternate?" (".concat(e.formatMessage(t.a.charts.incompleteData.changeStandard),")"):r.hasScoreRights?" (".concat(e.formatMessage(t.a.charts.incompleteData.drillDownRights),")"):r.hasScoreAlternateRights?" (".concat(e.formatMessage(t.a.charts.incompleteData.changeStandard)," & ").concat(e.formatMessage(t.a.charts.incompleteData.drillDownRights),")"):r.hasScoreIndicators?" (".concat(e.formatMessage(t.a.charts.incompleteData.drillDownIndicators),")"):r.hasScoreIndicatorsAlternate?" (".concat(e.formatMessage(t.a.charts.incompleteData.changeStandard)," & ").concat(e.formatMessage(t.a.charts.incompleteData.drillDownIndicators),")"):""},c=function(e,r){return{esr:r.esr&&r.esr[e],cpr:r.cpr&&r.cpr[e],indicators:r.indicators&&r.indicators[e]}},l=function(e){return(e.esr&&e.esr.esr?1:0)+(e.cpr&&e.cpr.empowerment?1:0)+(e.cpr&&e.cpr.physint?1:0)},u=function(e){return(e.esr?Object.keys(e.esr).length:0)+(e.cpr?Object.keys(e.cpr).length:0)},f=function(e){return e.indicators?Object.keys(e.indicators).length:0},d=function(e,r,n,o){var a="asc"===n?1:-1;return o.formatMessage(t.a.countries[e.country_code])>o.formatMessage(t.a.countries[r.country_code])?1*a:-1*a},p=function(e){var r=e.countries,n=e.sort,t=e.order,o=e.intl,a=e.scores;return"name"===n?r.sort(function(e,r){return d(e,r,t,o)}):a&&"assessment"===n?r.sort(function(e,r){return d(e,r,"asc",o)}).sort(function(e,r){return function(e,r,n,t){var o="asc"===t?-1:1,a=c(e.country_code,n),i=c(r.country_code,n),s=l(a),d=l(i);if(s>d)return-1*o;if(s<d)return 1*o;var p=u(a),m=u(i);if(p>m)return-1*o;if(p<m)return 1*o;var g=f(a),b=f(i);return g>b?-1*o:g<b?1*o:1}(e,r,a,t)}):r},m=function(e){var r=e.sort,n=e.order,t=e.intl,o=e.scores,a=e.column,i="asc"===n?-1:1;return"name"===r?o&&o.sort(function(e,r){return d(e,r,n,t)}):o&&o.sort(function(e,r){return parseFloat(e[a],10)<parseFloat(r[a],10)?1*i:-1*i})},g=function(e,r,n,t){var o=c(e.country_code,r);return"all"===n?o.cpr&&o.cpr.empowerment&&o.cpr.physint&&o.esr&&o.esr.esr&&o.esr.esr.find(function(e){return e.standard===t.code}):"cpr-all"===n?o.cpr&&o.cpr.empowerment&&o.cpr.physint:"esr-all"===n?o.esr&&o.esr.esr&&o.esr.esr.find(function(e){return e.standard===t.code}):"some"!==n||(o.cpr&&Object.keys(o.cpr).length>0||o.esr&&Object.keys(o.esr).length>0)}}}]);