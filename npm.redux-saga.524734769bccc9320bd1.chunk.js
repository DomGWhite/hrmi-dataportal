(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"000e687100360508b435":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(n){return"@@redux-saga/"+n},a=r("CANCEL_PROMISE"),o=r("CHANNEL_END"),c=r("IO"),u=r("MATCH"),f=r("MULTICAST"),i=r("SAGA_ACTION"),l=r("SELF_CANCELLATION"),s=r("TASK"),d=r("TASK_CANCEL"),v=r("TERMINATE"),p=r("LOCATION");t.CANCEL=a,t.CHANNEL_END_TYPE=o,t.IO=c,t.MATCH=u,t.MULTICAST=f,t.SAGA_ACTION=i,t.SELF_CANCELLATION=l,t.TASK=s,t.TASK_CANCEL=d,t.TERMINATE=v,t.SAGA_LOCATION=p},"0e7acf2eff3e1da4580d":function(n,t,e){"use strict";function r(n){return n&&"object"===typeof n&&"default"in n?n.default:n}var a=e("000e687100360508b435"),o=r(e("2c62cf50f9b98ad5e2af")),c=e("635837756f63384ac159"),u=r(e("20ffe07e14dbfd86f679")),f=function(n){return function(){return n}}(!0),i=function(){},l=function(n){return n};var s=function(n){throw n},d=function(n){return{value:n,done:!0}};var v=function(n){return Array.apply(null,new Array(n))},p=function(n){return n===a.TERMINATE},y=function(n){return n===a.TASK_CANCEL},h=function(n){return p(n)||y(n)};function A(n){return n[a.SAGA_LOCATION]}var C="Channel's Buffer overflow!",E=1,g=3,b=4,T={isEmpty:f,put:i,take:i};function S(n,t){void 0===n&&(n=10);var e=new Array(n),r=0,a=0,o=0,c=function(t){e[a]=t,a=(a+1)%n,r++},u=function(){if(0!=r){var t=e[o];return e[o]=null,r--,o=(o+1)%n,t}},f=function(){for(var n=[];r;)n.push(u());return n};return{isEmpty:function(){return 0==r},put:function(u){var i;if(r<n)c(u);else switch(t){case E:throw new Error(C);case g:e[a]=u,o=a=(a+1)%n;break;case b:i=2*n,e=f(),r=e.length,a=e.length,o=0,e.length=i,n=i,c(u)}},take:u,flush:f}}var m=function(){return T},L=function(n){return S(n,g)},N=function(n){return S(n,b)},k=Object.freeze({none:m,fixed:function(n){return S(n,E)},dropping:function(n){return S(n,2)},sliding:L,expanding:N}),O="TAKE",x="PUT",_="ALL",w="RACE",I="CALL",q="CPS",M="FORK",j="JOIN",R="CANCEL",P="SELECT",U="ACTION_CHANNEL",K="CANCELLED",D="FLUSH",H="GET_CONTEXT",F="SET_CONTEXT",G=Object.freeze({TAKE:O,PUT:x,ALL:_,RACE:w,CALL:I,CPS:q,FORK:M,JOIN:j,CANCEL:R,SELECT:P,ACTION_CHANNEL:U,CANCELLED:K,FLUSH:D,GET_CONTEXT:H,SET_CONTEXT:F}),X=function(n,t){var e;return(e={})[a.IO]=!0,e.combinator=!1,e.type=n,e.payload=t,e},J=function(n){return X(M,o({},n.payload,{detached:!0}))};function z(n,t){return void 0===n&&(n="*"),c.pattern(n)?X(O,{pattern:n}):c.multicast(n)&&c.notUndef(t)&&c.pattern(t)?X(O,{channel:n,pattern:t}):c.channel(n)?X(O,{channel:n}):void 0}function W(n,t){return c.undef(t)&&(t=n,n=void 0),X(x,{channel:n,action:t})}function B(n,t){var e,r=null;return c.func(n)?e=n:(c.array(n)?(r=n[0],e=n[1]):(r=n.context,e=n.fn),r&&c.string(e)&&c.func(r[e])&&(e=r[e])),{context:r,fn:e,args:t}}function Y(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return X(I,B(n,e))}function Q(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return X(M,B(n,e))}var V=Y.bind(null,u);t.kTrue=f,t.expanding=N,t.none=m,t.once=function(n){var t=!1;return function(){t||(t=!0,n())}},t.remove=function(n,t){var e=n.indexOf(t);e>=0&&n.splice(e,1)},t.TAKE=O,t.PUT=x,t.ALL=_,t.RACE=w,t.CALL=I,t.CPS=q,t.FORK=M,t.JOIN=j,t.CANCEL=R,t.SELECT=P,t.ACTION_CHANNEL=U,t.CANCELLED=K,t.FLUSH=D,t.GET_CONTEXT=H,t.SET_CONTEXT=F,t.getMetaInfo=function(n){return{name:n.name||"anonymous",location:A(n)}},t.noop=i,t.createAllStyleChildCallbacks=function(n,t){var e,r=Object.keys(n),a=r.length,o=0,u=c.array(n)?v(a):{},f={};return r.forEach(function(n){var r=function(r,c){e||(c||h(r)?(t.cancel(),t(r,c)):(u[n]=r,++o===a&&(e=!0,t(u))))};r.cancel=i,f[n]=r}),t.cancel=function(){e||(e=!0,r.forEach(function(n){return f[n].cancel()}))},f},t.createEmptyArray=v,t.assignWithSymbols=function(n,t){o(n,t),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach(function(e){n[e]=t[e]})},t.makeIterator=function(n,t,e){void 0===t&&(t=s),void 0===e&&(e="iterator");var r={meta:{name:e},next:n,throw:t,return:d,isSagaIterator:!0};return"undefined"!==typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r},t.shouldComplete=h,t.flatMap=function(n,t){var e;return(e=[]).concat.apply(e,t.map(n))},t.getLocation=A,t.shouldCancel=y,t.shouldTerminate=p,t.wrapSagaDispatch=function(n){return function(t){return n(Object.defineProperty(t,a.SAGA_ACTION,{value:!0}))}},t.logError=function(n,t){var e=t.sagaStack;console.error(n),console.error(e)},t.identity=l,t.take=z,t.fork=Q,t.cancel=function(n){return void 0===n&&(n=a.SELF_CANCELLATION),X(R,n)},t.call=Y,t.actionChannel=function(n,t){return X(U,{pattern:n,buffer:t})},t.sliding=L,t.delay=V,t.race=function(n){var t=X(w,n);return t.combinator=!0,t},t.buffers=k,t.detach=J,t.effectTypes=G,t.takeMaybe=function(){var n=z.apply(void 0,arguments);return n.payload.maybe=!0,n},t.put=W,t.putResolve=function(){var n=W.apply(void 0,arguments);return n.payload.resolve=!0,n},t.all=function(n){var t=X(_,n);return t.combinator=!0,t},t.apply=function(n,t,e){return void 0===e&&(e=[]),X(I,B([n,t],e))},t.cps=function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return X(q,B(n,e))},t.spawn=function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return J(Q.apply(void 0,[n].concat(e)))},t.join=function(n){return X(j,n)},t.select=function(n){void 0===n&&(n=l);for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return X(P,{selector:n,args:e})},t.cancelled=function(){return X(K,{})},t.flush=function(n){return X(D,n)},t.getContext=function(n){return X(H,n)},t.setContext=function(n){return X(F,n)}},"1c2b14b512f678e38462":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e("000e687100360508b435"),e("2c62cf50f9b98ad5e2af");var r=e("635837756f63384ac159"),a=e("0e7acf2eff3e1da4580d");e("20ffe07e14dbfd86f679");var o=function(n){return{done:!0,value:n}},c={};function u(n){return r.channel(n)?"channel":r.stringableFunc(n)?String(n):r.func(n)?n.name:String(n)}function f(n,t,e){var r,u,f,i=t;function l(t,e){if(i===c)return o(t);if(e&&!u)throw i=c,e;r&&r(t);var a=e?n[u](e):n[i]();return i=a.nextState,f=a.effect,r=a.stateUpdater,u=a.errorState,i===c?o(t):f}return a.makeIterator(l,function(n){return l(null,n)},e)}function i(n,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];var c,i={done:!1,value:a.take(n)},l=function(n){return c=n};return f({q1:function(){return{nextState:"q2",effect:i,stateUpdater:l}},q2:function(){return{nextState:"q1",effect:(n=c,{done:!1,value:a.fork.apply(void 0,[t].concat(r,[n]))})};var n}},"q1","takeEvery("+u(n)+", "+t.name+")")}function l(n,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];var c,i,l={done:!1,value:a.take(n)},s=function(n){return{done:!1,value:a.fork.apply(void 0,[t].concat(r,[n]))}},d=function(n){return{done:!1,value:a.cancel(n)}},v=function(n){return c=n},p=function(n){return i=n};return f({q1:function(){return{nextState:"q2",effect:l,stateUpdater:p}},q2:function(){return c?{nextState:"q3",effect:d(c)}:{nextState:"q1",effect:s(i),stateUpdater:v}},q3:function(){return{nextState:"q1",effect:s(i),stateUpdater:v}}},"q1","takeLatest("+u(n)+", "+t.name+")")}function s(n,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];var c,i={done:!1,value:a.take(n)},l=function(n){return c=n};return f({q1:function(){return{nextState:"q2",effect:i,stateUpdater:l}},q2:function(){return{nextState:"q1",effect:(n=c,{done:!1,value:a.call.apply(void 0,[t].concat(r,[n]))})};var n}},"q1","takeLeading("+u(n)+", "+t.name+")")}function d(n,t,e){for(var r=arguments.length,o=new Array(r>3?r-3:0),c=3;c<r;c++)o[c-3]=arguments[c];var i,l,s={done:!1,value:a.actionChannel(t,a.sliding(1))},d={done:!1,value:a.delay(n)},v=function(n){return i=n},p=function(n){return l=n};return f({q1:function(){return{nextState:"q2",effect:s,stateUpdater:p}},q2:function(){return{nextState:"q3",effect:{done:!1,value:a.take(l)},stateUpdater:v}},q3:function(){return{nextState:"q4",effect:(n=i,{done:!1,value:a.fork.apply(void 0,[e].concat(o,[n]))})};var n},q4:function(){return{nextState:"q2",effect:d}}},"q1","throttle("+u(t)+", "+e.name+")")}function v(n,t,e){for(var r=n,o=arguments.length,u=new Array(o>3?o-3:0),i=3;i<o;i++)u[i-3]=arguments[i];var l={done:!1,value:a.call.apply(void 0,[e].concat(u))},s={done:!1,value:a.delay(t)};return f({q1:function(){return{nextState:"q2",effect:l,errorState:"q10"}},q2:function(){return{nextState:c}},q10:function(n){if((r-=1)<=0)throw n;return{nextState:"q1",effect:s}}},"q1","retry("+e.name+")")}function p(n,t,e){for(var r=arguments.length,o=new Array(r>3?r-3:0),c=3;c<r;c++)o[c-3]=arguments[c];var i,l,s={done:!1,value:a.take(t)},d={done:!1,value:a.race({action:a.take(t),debounce:a.delay(n)})},v=function(n){return i=n},p=function(n){return l=n};return f({q1:function(){return{nextState:"q2",effect:s,stateUpdater:v}},q2:function(){return{nextState:"q3",effect:d,stateUpdater:p}},q3:function(){return l.debounce?{nextState:"q1",effect:(t=i,{done:!1,value:a.fork.apply(void 0,[e].concat(o,[t]))})}:{nextState:"q2",effect:(n=l.action,{done:!1,value:n}),stateUpdater:v};var n,t}},"q1","debounce("+u(t)+", "+e.name+")")}t.effectTypes=a.effectTypes,t.take=a.take,t.takeMaybe=a.takeMaybe,t.put=a.put,t.putResolve=a.putResolve,t.all=a.all,t.race=a.race,t.call=a.call,t.apply=a.apply,t.cps=a.cps,t.fork=a.fork,t.spawn=a.spawn,t.join=a.join,t.cancel=a.cancel,t.select=a.select,t.actionChannel=a.actionChannel,t.cancelled=a.cancelled,t.flush=a.flush,t.getContext=a.getContext,t.setContext=a.setContext,t.delay=a.delay,t.debounce=function(n,t,e){for(var r=arguments.length,o=new Array(r>3?r-3:0),c=3;c<r;c++)o[c-3]=arguments[c];return a.fork.apply(void 0,[p,n,t,e].concat(o))},t.retry=function(n,t,e){for(var r=arguments.length,o=new Array(r>3?r-3:0),c=3;c<r;c++)o[c-3]=arguments[c];return a.call.apply(void 0,[v,n,t,e].concat(o))},t.takeEvery=function(n,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return a.fork.apply(void 0,[i,n,t].concat(r))},t.takeLatest=function(n,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return a.fork.apply(void 0,[l,n,t].concat(r))},t.takeLeading=function(n,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return a.fork.apply(void 0,[s,n,t].concat(r))},t.throttle=function(n,t,e){for(var r=arguments.length,o=new Array(r>3?r-3:0),c=3;c<r;c++)o[c-3]=arguments[c];return a.fork.apply(void 0,[d,n,t,e].concat(o))}},"20ffe07e14dbfd86f679":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("000e687100360508b435");t.default=function(n,t){var e;void 0===t&&(t=!0);var a=new Promise(function(r){e=setTimeout(r,n,t)});return a[r.CANCEL]=function(){clearTimeout(e)},a}},"3562001638983595ee40":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=e("39781a14ae3d66868753"),o=(r=a)&&"object"===typeof r&&"default"in r?r.default:r;Object.keys(a).forEach(function(n){t[n]=a[n]}),t.default=o},"39781a14ae3d66868753":function(n,t,e){"use strict";n.exports=e("d0d639fde30af7d98691")},"5bb28af140da1909470a":function(n,t,e){"use strict";n.exports=e("1c2b14b512f678e38462")},"635837756f63384ac159":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("000e687100360508b435"),a=function(n){return"function"===typeof n},o=function(n){return"string"===typeof n},c=Array.isArray,u=function(n){return n&&a(n.take)&&a(n.close)},f=function(n){return Boolean(n)&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype};t.undef=function(n){return null===n||void 0===n},t.notUndef=function(n){return null!==n&&void 0!==n},t.func=a,t.number=function(n){return"number"===typeof n},t.string=o,t.array=c,t.object=function(n){return n&&!c(n)&&"object"===typeof n},t.promise=function(n){return n&&a(n.then)},t.iterator=function(n){return n&&a(n.next)&&a(n.throw)},t.iterable=function(n){return n&&a(Symbol)?a(n[Symbol.iterator]):c(n)},t.task=function(n){return n&&n[r.TASK]},t.sagaAction=function(n){return Boolean(n&&n[r.SAGA_ACTION])},t.observable=function(n){return n&&a(n.subscribe)},t.buffer=function(n){return n&&a(n.isEmpty)&&a(n.take)&&a(n.put)},t.pattern=function n(t){return t&&(o(t)||f(t)||a(t)||c(t)&&t.every(n))},t.channel=u,t.stringableFunc=function(n){return a(n)&&n.hasOwnProperty("toString")},t.symbol=f,t.multicast=function(n){return u(n)&&n[r.MULTICAST]},t.effect=function(n){return n&&n[r.IO]}},d0d639fde30af7d98691:function(n,t,e){"use strict";function r(n){return n&&"object"===typeof n&&"default"in n?n.default:n}Object.defineProperty(t,"__esModule",{value:!0});var a=e("000e687100360508b435"),o=r(e("2c62cf50f9b98ad5e2af")),c=r(e("84ed169f5b76a6b15fc0")),u=e("635837756f63384ac159"),f=e("0e7acf2eff3e1da4580d"),i=e("ab4cb61bcb2dc161defb"),l=r(e("f8df2ea81f3c0ea0da14"));e("20ffe07e14dbfd86f679");var s=[],d=0;function v(n){try{h(),n()}finally{A()}}function p(n){s.push(n),d||(h(),C())}function y(n){try{return h(),n()}finally{C()}}function h(){d++}function A(){d--}function C(){var n;for(A();!d&&void 0!==(n=s.shift());)v(n)}var E=function(n){return function(t){return n.some(function(n){return m(n)(t)})}},g=function(n){return function(t){return n(t)}},b=function(n){return function(t){return t.type===String(n)}},T=function(n){return function(t){return t.type===n}},S=function(){return f.kTrue};function m(n){var t="*"===n?S:u.string(n)?b:u.array(n)?E:u.stringableFunc(n)?b:u.func(n)?g:u.symbol(n)?T:null;if(null===t)throw new Error("invalid pattern: "+n);return t(n)}var L={type:a.CHANNEL_END_TYPE},N=function(n){return n&&n.type===a.CHANNEL_END_TYPE};function k(n){void 0===n&&(n=f.expanding());var t=!1,e=[];return{take:function(r){t&&n.isEmpty()?r(L):n.isEmpty()?(e.push(r),r.cancel=function(){f.remove(e,r)}):r(n.take())},put:function(r){if(!t){if(0===e.length)return n.put(r);e.shift()(r)}},flush:function(e){t&&n.isEmpty()?e(L):e(n.flush())},close:function(){if(!t){t=!0;var n=e;e=[];for(var r=0,a=n.length;r<a;r++)(0,n[r])(L)}}}}function O(){var n,t=!1,e=[],r=e,o=function(){r===e&&(r=e.slice())},c=function(){t=!0;var n=e=r;r=[],n.forEach(function(n){n(L)})};return(n={})[a.MULTICAST]=!0,n.put=function(n){if(!t)if(N(n))c();else for(var o=e=r,u=0,f=o.length;u<f;u++){var i=o[u];i[a.MATCH](n)&&(i.cancel(),i(n))}},n.take=function(n,e){void 0===e&&(e=S),t?n(L):(n[a.MATCH]=e,o(),r.push(n),n.cancel=f.once(function(){o(),f.remove(r,n)}))},n.close=c,n}function x(){var n=O(),t=n.put;return n.put=function(n){n[a.SAGA_ACTION]?t(n):p(function(){t(n)})},n}var _=0,w=1,I=2,q=3;function M(n,t){var e=n[a.CANCEL];u.func(e)&&(t.cancel=e),n.then(t,function(n){t(n,!0)})}var j,R=0,P=function(){return++R};function U(n){n.isRunning()&&n.cancel()}var K=((j={})[f.TAKE]=function(n,t,e){var r=t.channel,o=void 0===r?n.channel:r,c=t.pattern,f=t.maybe,i=function(n){n instanceof Error?e(n,!0):!N(n)||f?e(n):e(a.TERMINATE)};try{o.take(i,u.notUndef(c)?m(c):null)}catch(n){return void e(n,!0)}e.cancel=i.cancel},j[f.PUT]=function(n,t,e){var r=t.channel,a=t.action,o=t.resolve;p(function(){var t;try{t=(r?r.put:n.dispatch)(a)}catch(n){return void e(n,!0)}o&&u.promise(t)?M(t,e):e(t)})},j[f.ALL]=function(n,t,e,r){var a=r.digestEffect,o=R,c=Object.keys(t);if(0!==c.length){var i=f.createAllStyleChildCallbacks(t,e);c.forEach(function(n){a(t[n],o,i[n],n)})}else e(u.array(t)?[]:{})},j[f.RACE]=function(n,t,e,r){var a=r.digestEffect,o=R,c=Object.keys(t),i=u.array(t)?f.createEmptyArray(c.length):{},l={},s=!1;c.forEach(function(n){var t=function(t,r){s||(r||f.shouldComplete(t)?(e.cancel(),e(t,r)):(e.cancel(),s=!0,i[n]=t,e(i)))};t.cancel=f.noop,l[n]=t}),e.cancel=function(){s||(s=!0,c.forEach(function(n){return l[n].cancel()}))},c.forEach(function(n){s||a(t[n],o,l[n],n)})},j[f.CALL]=function(n,t,e,r){var a=t.context,o=t.fn,c=t.args,i=r.task;try{var l=o.apply(a,c);if(u.promise(l))return void M(l,e);if(u.iterator(l))return void Q(n,l,i.context,R,f.getMetaInfo(o),!1,e);e(l)}catch(n){e(n,!0)}},j[f.CPS]=function(n,t,e){var r=t.context,a=t.fn,o=t.args;try{var c=function(n,t){u.undef(n)?e(t):e(n,!0)};a.apply(r,o.concat(c)),c.cancel&&(e.cancel=c.cancel)}catch(n){e(n,!0)}},j[f.FORK]=function(n,t,e,r){var a=t.context,o=t.fn,c=t.args,i=t.detached,l=r.task,s=function(n){var t=n.context,e=n.fn,r=n.args;try{var a=e.apply(t,r);if(u.iterator(a))return a;var o=!1;return f.makeIterator(function(n){return o?{value:n,done:!0}:(o=!0,{value:a,done:!u.promise(a)})})}catch(n){return f.makeIterator(function(){throw n})}}({context:a,fn:o,args:c}),d=function(n,t){return n.isSagaIterator?{name:n.meta.name}:f.getMetaInfo(t)}(s,o);y(function(){var t=Q(n,s,l.context,R,d,i,f.noop);i?e(t):t.isRunning()?(l.queue.addTask(t),e(t)):t.isAborted()?l.queue.abort(t.error()):e(t)})},j[f.JOIN]=function(n,t,e,r){var a=r.task,o=function(n,t){if(n.isRunning()){var e={task:a,cb:t};t.cancel=function(){n.isRunning()&&f.remove(n.joiners,e)},n.joiners.push(e)}else n.isAborted()?t(n.error(),!0):t(n.result())};if(u.array(t)){if(0===t.length)return void e([]);var c=f.createAllStyleChildCallbacks(t,e);t.forEach(function(n,t){o(n,c[t])})}else o(t,e)},j[f.CANCEL]=function(n,t,e,r){var o=r.task;t===a.SELF_CANCELLATION?U(o):u.array(t)?t.forEach(U):U(t),e()},j[f.SELECT]=function(n,t,e){var r=t.selector,a=t.args;try{e(r.apply(void 0,[n.getState()].concat(a)))}catch(n){e(n,!0)}},j[f.ACTION_CHANNEL]=function(n,t,e){var r=t.pattern,a=k(t.buffer),o=m(r),c=function t(e){N(e)||n.channel.take(t,o),a.put(e)},u=a.close;a.close=function(){c.cancel(),u()},n.channel.take(c,o),e(a)},j[f.CANCELLED]=function(n,t,e,r){e(r.task.isCancelled())},j[f.FLUSH]=function(n,t,e){t.flush(e)},j[f.GET_CONTEXT]=function(n,t,e,r){e(r.task.context[t])},j[f.SET_CONTEXT]=function(n,t,e,r){var a=r.task;f.assignWithSymbols(a.context,t),e()},j);function D(n,t){return n+"?"+t}function H(n){var t=n.name,e=n.location;return e?t+"  "+D(e.fileName,e.lineNumber):t}function F(n){var t=f.flatMap(function(n){return n.cancelledTasks},n);return t.length?["Tasks cancelled due to error:"].concat(t).join("\n"):""}var G=null,X=[],J=function(n){n.crashedEffect=G,X.push(n)},z=function(){G=null,X.length=0},W=function(n){G=n},B=function(){var n,t,e=X[0],r=X.slice(1),a=e.crashedEffect?(n=e.crashedEffect,(t=f.getLocation(n))?t.code+"  "+D(t.fileName,t.lineNumber):""):null;return["The above error occurred in task "+H(e.meta)+(a?" \n when executing effect "+a:"")].concat(r.map(function(n){return"    created by "+H(n.meta)}),[F(X)]).join("\n")};function Y(n,t,e,r,o,c,u){var i,s,d,v=_,p=null,y=[],h=Object.create(e),A=function(n,t,e){var r,a=[],o=!1;function c(n){t(),i(),e(n,!0)}function u(t){a.push(t),t.cont=function(u,i){o||(f.remove(a,t),t.cont=f.noop,i?c(u):(t===n&&(r=u),a.length||(o=!0,e(r))))}}function i(){o||(o=!0,a.forEach(function(n){n.cont=f.noop,n.cancel()}),a=[])}return u(n),{addTask:u,cancelAll:i,abort:c,getTasks:function(){return a}}}(t,function(){y.push.apply(y,A.getTasks().map(function(n){return n.meta.name}))},C);function C(t,e){if(e){if(v=I,J({meta:o,cancelledTasks:y}),E.isRoot){var r=B();z(),n.onError(t,{sagaStack:r})}d=t,p&&p.reject(t)}else t===a.TASK_CANCEL?v=w:v!==w&&(v=q),s=t,p&&p.resolve(t);E.cont(t,e),E.joiners.forEach(function(n){n.cb(t,e)}),E.joiners=null}var E=((i={})[a.TASK]=!0,i.id=r,i.meta=o,i.isRoot=c,i.context=h,i.joiners=[],i.queue=A,i.cancel=function(){v===_&&(v=w,A.cancelAll(),C(a.TASK_CANCEL,!1))},i.cont=u,i.end=C,i.setContext=function(n){f.assignWithSymbols(h,n)},i.toPromise=function(){return p?p.promise:(p=l(),v===I?p.reject(d):v!==_&&p.resolve(s),p.promise)},i.isRunning=function(){return v===_},i.isCancelled=function(){return v===w||v===_&&t.status===w},i.isAborted=function(){return v===I},i.result=function(){return s},i.error=function(){return d},i);return E}function Q(n,t,e,r,o,c,i){var l=n.finalizeRunEffect(function(t,e,r){if(u.promise(t))M(t,r);else if(u.iterator(t))Q(n,t,d.context,e,o,!1,r);else if(t&&t[a.IO]){var c=K[t.type];c(n,t.payload,r,v)}else r(t)});p.cancel=f.noop;var s={meta:o,cancel:function(){s.status===_&&(s.status=w,p(a.TASK_CANCEL))},status:_},d=Y(n,s,e,r,o,c,i),v={task:d,digestEffect:y};return i.cancel=d.cancel,p(),d;function p(n,e){try{var o;e?(o=t.throw(n),z()):f.shouldCancel(n)?(s.status=w,p.cancel(),o=u.func(t.return)?t.return(a.TASK_CANCEL):{done:!0,value:a.TASK_CANCEL}):o=f.shouldTerminate(n)?u.func(t.return)?t.return():{done:!0}:t.next(n),o.done?(s.status!==w&&(s.status=q),s.cont(o.value)):y(o.value,r,p)}catch(n){if(s.status===w)throw n;s.status=I,s.cont(n,!0)}}function y(t,e,r,a){void 0===a&&(a="");var o,c=P();function u(e,a){o||(o=!0,r.cancel=f.noop,n.sagaMonitor&&(a?n.sagaMonitor.effectRejected(c,e):n.sagaMonitor.effectResolved(c,e)),a&&W(t),r(e,a))}n.sagaMonitor&&n.sagaMonitor.effectTriggered({effectId:c,parentEffectId:e,label:a,effect:t}),u.cancel=f.noop,r.cancel=function(){o||(o=!0,u.cancel(),u.cancel=f.noop,n.sagaMonitor&&n.sagaMonitor.effectCancelled(c))},l(t,c,u)}}function V(n,t){for(var e=n.channel,r=void 0===e?x():e,a=n.dispatch,o=n.getState,c=n.context,u=void 0===c?{}:c,l=n.sagaMonitor,s=n.effectMiddlewares,d=n.onError,v=void 0===d?f.logError:d,p=arguments.length,h=new Array(p>2?p-2:0),A=2;A<p;A++)h[A-2]=arguments[A];var C,E=t.apply(void 0,h),g=P();if(l&&(l.rootSagaStarted=l.rootSagaStarted||f.noop,l.effectTriggered=l.effectTriggered||f.noop,l.effectResolved=l.effectResolved||f.noop,l.effectRejected=l.effectRejected||f.noop,l.effectCancelled=l.effectCancelled||f.noop,l.actionDispatched=l.actionDispatched||f.noop,l.rootSagaStarted({effectId:g,saga:t,args:h})),s){var b=i.compose.apply(void 0,s);C=function(n){return function(t,e,r){return b(function(t){return n(t,e,r)})(t)}}}else C=f.identity;var T={channel:r,dispatch:f.wrapSagaDispatch(a),getState:o,sagaMonitor:l,onError:v,finalizeRunEffect:C};return y(function(){var n=Q(T,E,u,g,f.getMetaInfo(t),!0,f.noop);return l&&l.effectResolved(g,n),n})}t.CANCEL=a.CANCEL,t.SAGA_LOCATION=a.SAGA_LOCATION,t.buffers=f.buffers,t.detach=f.detach,t.default=function(n){void 0===n&&(n={});var t,e=n,r=e.context,a=void 0===r?{}:r,u=e.channel,i=void 0===u?x():u,l=e.sagaMonitor,s=c(e,["context","channel","sagaMonitor"]);function d(n){var e=n.getState,r=n.dispatch;return t=V.bind(null,o({},s,{context:a,channel:i,dispatch:r,getState:e,sagaMonitor:l})),function(n){return function(t){l&&l.actionDispatched&&l.actionDispatched(t);var e=n(t);return i.put(t),e}}}return d.run=function(){return t.apply(void 0,arguments)},d.setContext=function(n){f.assignWithSymbols(a,n)},d},t.runSaga=V,t.END=L,t.isEnd=N,t.eventChannel=function(n,t){void 0===t&&(t=f.none());var e,r=!1,a=k(t),o=function(){r||(r=!0,u.func(e)&&e(),a.close())};return e=n(function(n){N(n)?o():a.put(n)}),e=f.once(e),r&&e(),{take:a.take,flush:a.flush,close:o}},t.channel=k,t.multicastChannel=O,t.stdChannel=x},d782b72bc5b680c7122c:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("5bb28af140da1909470a");Object.keys(r).forEach(function(n){t[n]=r[n]})},f8df2ea81f3c0ea0da14:function(n,t,e){"use strict";function r(){var n={};return n.promise=new Promise(function(t,e){n.resolve=t,n.reject=e}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,t.arrayOfDeferred=function(n){for(var t=[],e=0;e<n;e++)t.push(r());return t}}}]);