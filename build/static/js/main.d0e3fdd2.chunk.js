(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(e,t,r){e.exports=r.p+"static/media/logo.06106ad7.png"},56:function(e,t,r){e.exports=r(90)},90:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(53),i=r.n(o),c=r(26),l=r(4),u=r(6),s=r(47),f=r(38);r(63),r(91),r(92);f.a.initializeApp({apiKey:"AIzaSyCXKGC0qR-T_mKmiD65Kw-MuICiqZ5YwA8",authDomain:"projecttrek-d9caa.firebaseapp.com",databaseURL:"https://projecttrek-d9caa-default-rtdb.europe-west1.firebasedatabase.app",projectId:"projecttrek-d9caa",storageBucket:"projecttrek-d9caa.appspot.com",messagingSenderId:"515533784142",appId:"1:515533784142:web:8fe8ce019a812c1fd86f1f",measurementId:"G-VL73NPFMSG"});var h=f.a.firestore(),p=f.a.auth(),m=f.a.storage(),d=(f.a.firestore.Timestamp,Object(n.createContext)()),v=function(e,t){switch(t.type){case"LOGIN":return Object(s.a)({},e,{user:t.payload});case"LOGOUT":return Object(s.a)({},e,{user:null});case"AUTH_IS_READY":return{user:t.payload,authIsReady:!0};default:return e}},g=function(e){var t=e.children,r=Object(n.useReducer)(v,{user:null,authIsReady:!1}),o=Object(u.a)(r,2),i=o[0],c=o[1];return Object(n.useEffect)(function(){var e=p.onAuthStateChanged(function(t){c({type:"AUTH_IS_READY",payload:t}),e()})},[]),console.log("AuthContext state:",i),a.a.createElement(d.Provider,{value:Object(s.a)({},i,{dispatch:c})},t)},y=function(){var e=Object(n.useContext)(d);if(!e)throw Error("useAuthContext must be used inside an AuthContextProvider");return e},b=(r(65),r(94));var E=function(){return a.a.createElement("div",null,"Dashboard")},w=r(12);function x(){x=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:w(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var f={};function h(){}function p(){}function m(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==t&&r.call(g,o)&&(d=g);var y=m.prototype=h.prototype=Object.create(d);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=m,n(y,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var j=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),r=t[0],a=t[1],o=Object(n.useState)(null),i=Object(u.a)(o,2),c=i[0],l=i[1],s=Object(n.useState)(!1),f=Object(u.a)(s,2),m=f[0],d=f[1],v=y().dispatch,g=function(){var e=Object(w.a)(x().mark(function e(t,n){var a,o;return x().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),d(!0),e.prev=2,e.next=5,p.signInWithEmailAndPassword(t,n);case 5:return a=e.sent,o=h.collection("users").doc(a.user.uid),e.next=9,o.update({online:!0});case 9:v({type:"LOGIN",payload:a.user}),r||(d(!1),l(null)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),r||(l(e.t0.message),d(!1));case 16:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t,r){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){return function(){return a(!0)}},[]),{login:g,isPending:m,error:c}};function L(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),r=t[0],o=t[1],i=Object(n.useState)(""),c=Object(u.a)(i,2),l=c[0],s=c[1],f=j(),h=f.login,p=f.error,m=f.isPending;return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h(r,l)},className:"p-4 bg-white border rounded shadow-sm",style:{maxWidth:"360px",margin:"60px auto"}},a.a.createElement("h2",{className:"text-center"},"Log in"),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"email",className:"mt-3 w-100"},a.a.createElement("span",null,"Email:"),a.a.createElement("input",{required:!0,type:"email",className:"form-control",id:"email",onChange:function(e){return o(e.target.value)},value:r}))),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"password",className:"mt-3 w-100"},a.a.createElement("span",null,"Password:"),a.a.createElement("input",{required:!0,type:"password",className:"form-control",id:"password",onChange:function(e){return s(e.target.value)},value:l}))),a.a.createElement("div",{className:"d-flex justify-content-center"},!m&&a.a.createElement("button",{className:"btn btn-primary mt-4 px-5 rounded-pill shadow-sm"},"Log in"),m&&a.a.createElement("button",{className:"btn btn-primary mt-4 px-5 rounded-pill shadow-sm",disabled:!0},"Loading"),p&&a.a.createElement("div",{className:"alert alert-danger mt-2"},p)))}function O(){O=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:w(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var f={};function h(){}function p(){}function m(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==t&&r.call(g,o)&&(d=g);var y=m.prototype=h.prototype=Object.create(d);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=m,n(y,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var N=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),r=t[0],a=t[1],o=Object(n.useState)(null),i=Object(u.a)(o,2),c=i[0],l=i[1],s=Object(n.useState)(!1),f=Object(u.a)(s,2),d=f[0],v=f[1],g=y().dispatch,b=function(){var e=Object(w.a)(O().mark(function e(t,n,a,o){var i,c,u,s;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),v(!0),e.prev=2,e.next=5,p.createUserWithEmailAndPassword(t,n);case 5:if(i=e.sent){e.next=8;break}throw new Error("Could not complete signup");case 8:return c="avatars/".concat(i.user.uid,"/").concat(o.name),e.next=11,m.ref(c).put(o);case 11:return u=e.sent,e.next=14,u.ref.getDownloadURL();case 14:return s=e.sent,e.next=17,i.user.updateProfile({displayName:a,photoURL:s});case 17:return e.next=19,h.collection("users").doc(i.user.uid).set({online:!0,displayName:a,photoURL:s});case 19:g({type:"LOGIN",payload:i.user}),r||(v(!1),l(null)),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(2),r||(l(e.t0.message),v(!1));case 26:case"end":return e.stop()}},e,null,[[2,23]])}));return function(t,r,n,a){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){return function(){return a(!0)}},[]),{signup:b,error:c,isPending:d}};function S(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),r=t[0],o=t[1],i=Object(n.useState)(""),c=Object(u.a)(i,2),l=c[0],s=c[1],f=Object(n.useState)(""),h=Object(u.a)(f,2),p=h[0],m=h[1],d=Object(n.useState)(null),v=Object(u.a)(d,2),g=v[0],y=v[1],b=Object(n.useState)(null),E=Object(u.a)(b,2),w=E[0],x=E[1],j=N(),L=j.signup,O=j.isPending,S=j.error;return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),L(r,l,p,g).then(function(){console.log("Signup successful")}).catch(function(e){console.error("Signup failed:",e)})},className:"p-4 bg-white border rounded shadow-sm",style:{maxWidth:"360px",margin:"60px auto"}},a.a.createElement("h2",{className:"text-center"},"Sign up"),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"email",className:"mt-3 w-100"},a.a.createElement("span",null,"Email:"),a.a.createElement("input",{required:!0,type:"email",className:"form-control",id:"email",onChange:function(e){return o(e.target.value)},value:r}))),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"password",className:"mt-3 w-100"},a.a.createElement("span",null,"Password:"),a.a.createElement("input",{required:!0,type:"password",className:"form-control",id:"password",onChange:function(e){return s(e.target.value)},value:l}))),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"name",className:"mt-3 w-100"},a.a.createElement("span",null,"Name:"),a.a.createElement("input",{required:!0,type:"text",className:"form-control",id:"name",onChange:function(e){return m(e.target.value)},value:p}))),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"avatar",className:"mt-3"},a.a.createElement("span",null,"Avatar:"),a.a.createElement("input",{required:!0,type:"file",className:"form-control mt-1",id:"avatar",onChange:function(e){y(null);var t=e.target.files[0];console.log(t),t?t.type.includes("image")?t.size>25e4?x("Keep an image smaller than 250kb"):(x(null),y(t),console.log("Avatar selected")):x("Select an image file"):x("Select a file")}}),w&&a.a.createElement("div",{className:"alert alert-danger mt-2"},w))),a.a.createElement("div",{className:"d-flex justify-content-center"},!O&&a.a.createElement("button",{className:"btn btn-primary mt-4 px-5 rounded-pill shadow-sm"},"Sign up"),O&&a.a.createElement("button",{className:"btn btn-primary mt-4 px-5 rounded-pill shadow-sm",disabled:!0},"Loading"),S&&a.a.createElement("div",{className:"alert alert-danger mt-2"},S)))}var k=function(){return a.a.createElement("div",null,"CreateProject")};var _=function(){return a.a.createElement("div",null,"Project")};function P(){P=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new O(a||[]);return n(i,"_invoke",{value:w(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var f={};function h(){}function p(){}function m(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(N([])));g&&g!==t&&r.call(g,o)&&(d=g);var y=m.prototype=h.prototype=Object.create(d);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=m,n(y,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var G=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),r=t[0],a=t[1],o=Object(n.useState)(null),i=Object(u.a)(o,2),c=i[0],l=i[1],s=Object(n.useState)(!1),f=Object(u.a)(s,2),m=f[0],d=f[1],v=y().dispatch,g=function(){var e=Object(w.a)(P().mark(function e(){var t;return P().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),d(!0),e.prev=2,t=p.currentUser.uid,e.next=6,h.collection("users").doc(t).update({online:!1});case 6:return e.next=8,p.signOut();case 8:v({type:"LOGOUT"}),r||(d(!1),l(null)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),r||(l(e.t0.message),d(!1));case 15:case"end":return e.stop()}},e,null,[[2,12]])}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){return function(){return a(!0)}},[]),{logout:g,error:c,isPending:m}},C=r(54),T=r.n(C),I=r(97),F=r(98);function A(){var e=G(),t=e.logout,r=e.isPending,n=y().user;return a.a.createElement(I.a,{expand:"lg",className:"shadow-sm",style:{backgroundColor:"#e1d0f8",height:"60px"}},a.a.createElement(b.a,null,a.a.createElement(I.a.Brand,null,a.a.createElement(c.b,{to:"/"},a.a.createElement("img",{src:T.a,height:"30",className:"d-inline-block align-top",alt:"ProjectTrek logo"}))," ProjectTrek"),a.a.createElement(I.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"ms-auto p-0"}),a.a.createElement(I.a.Collapse,{id:"basic-navbar-nav",className:"text-end  my-3"},a.a.createElement(F.a,{className:"ms-auto"},n?a.a.createElement("button",{className:"btn btn-transparent border-0 text-end p-0 mt-1 mr-0",onClick:t,disabled:r},r?"Logging out...":"Logout"):a.a.createElement(a.a.Fragment,null,a.a.createElement(c.b,{to:"/login",className:"nav-link"},"Login"),a.a.createElement(c.b,{to:"/signup",className:"nav-link"},"Signup"))))))}function R(){return a.a.createElement(I.a,{expand:"lg",className:"d-flex justify-content-center align-items-start shadow-sm",style:{backgroundColor:"#3e3c44",height:"100vh"}},a.a.createElement(b.a,null,a.a.createElement(I.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"p-0 mt-1"}),a.a.createElement(I.a.Collapse,{id:"basic-navbar-nav"},a.a.createElement(F.a,{className:"links mt-2 ml-3",style:{flexGrow:1}},a.a.createElement("div",{className:"text-center mb-3"},a.a.createElement("ul",{className:"nav flex-column"},a.a.createElement("li",{className:"nav-item"},a.a.createElement("img",{src:"https://via.placeholder.com/150",alt:"user avatar",className:"rounded-circle",style:{width:"150px",height:"150px",padding:"20px"}})," "),a.a.createElement("li",{className:"nav-item"},a.a.createElement("h5",{className:"text-white mt-2 mb-5"},"HEY USER")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(c.c,{to:"/",className:"nav-link d-flex align-items-center text-light",style:{padding:"10px"}},a.a.createElement("span",null,"Dashboard"))),a.a.createElement("li",{className:"nav-item"},a.a.createElement(c.c,{to:"/CreateProject",className:"nav-link d-flex align-items-center text-light",style:{padding:"10px"}},a.a.createElement("span",null,"Create Project")))))))))}var U=r(95),Y=r(96);var D=function(){var e=(new Date).getFullYear();return a.a.createElement("footer",{className:"py-1 fixed-bottom",style:{backgroundColor:"#ECECEC"}},a.a.createElement(b.a,null,a.a.createElement(U.a,{className:"d-flex"},a.a.createElement(Y.a,{lg:6,className:"text-center text-lg-start mt-2"},a.a.createElement("p",null,"Copyright \u24d2 ",e)),a.a.createElement(Y.a,{lg:6,className:"text-center text-lg-end mt-2"},a.a.createElement("p",null,a.a.createElement("a",{href:"#",className:"text-decoration-none me-4"},"Privacy Policy"),a.a.createElement("a",{href:"#",className:"text-decoration-none"},"Terms & Conditions"))))))};var q=function(){var e=y(),t=e.authIsReady,r=e.user;return a.a.createElement("div",{className:"d-flex"},t&&a.a.createElement(c.a,null,r&&a.a.createElement(R,null),a.a.createElement(b.a,{fluid:!0,className:"flex-grow-1 py-0 px-0"},a.a.createElement(A,null),a.a.createElement(l.d,null,a.a.createElement(l.b,{path:"/",element:r?a.a.createElement(l.a,{to:"/dashboard"}):a.a.createElement(l.a,{to:"/login"})}),a.a.createElement(l.b,{path:"/dashboard",element:r?a.a.createElement(E,null):a.a.createElement(l.a,{to:"/login"})}),a.a.createElement(l.b,{path:"/createProject",element:r?a.a.createElement(k,null):a.a.createElement(l.a,{to:"/login"})}),a.a.createElement(l.b,{path:"/projects/:id",element:r?a.a.createElement(_,null):a.a.createElement(l.a,{to:"/login"})}),a.a.createElement(l.b,{path:"/login",element:r?a.a.createElement(l.a,{to:"/"}):a.a.createElement(L,null)}),a.a.createElement(l.b,{path:"/signup",element:r?a.a.createElement(l.a,{to:"/"}):a.a.createElement(S,null)})),a.a.createElement(D,null))))};r(71),r(72);i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null,a.a.createElement(q,null))))}},[[56,1,2]]]);
//# sourceMappingURL=main.d0e3fdd2.chunk.js.map