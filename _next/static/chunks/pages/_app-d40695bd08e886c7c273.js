(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{178:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},6598:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{UF:function(){return ve},ZP:function(){return nt},ih:function(){return et}});var i=r(7294),s=r.t(i,2),l=r(178),c=r.n(l),u=r(3935);const d={prefix:Math.round(1e10*Math.random()),current:0},p=i.createContext(d);function f(e){let t=(0,i.useContext)(p),r=(0,i.useMemo)((()=>({prefix:t===d?0:++t.prefix,current:0})),[t]);return i.createElement(p.Provider,{value:r},e.children)}Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);"undefined"!==typeof window&&i.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let m=new Map,_=new Set;function y(){if("undefined"===typeof window)return;let e=t=>{let r=m.get(t.target);if(r&&(r.delete(t.propertyName),0===r.size&&(t.target.removeEventListener("transitioncancel",e),m.delete(t.target)),0===m.size)){for(let e of _)e();_.clear()}};document.body.addEventListener("transitionrun",(t=>{let r=m.get(t.target);r||(r=new Set,m.set(t.target,r),t.target.addEventListener("transitioncancel",e)),r.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?y():document.addEventListener("DOMContentLoaded",y));"undefined"!==typeof window&&window.visualViewport;new Map;function v(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function h(){return v(/^Mac/)}function g(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const b=i.createContext(null);b.displayName="PressResponderContext";let w=null,P=new Set,x=!1,O=!1,j=!1;function E(e,t){for(let r of P)r(e,t)}function N(e){O=!0,function(e){return!(e.metaKey||!h()&&e.altKey||e.ctrlKey||"keyup"===e.type&&("Control"===e.key||"Shift"===e.key))}(e)&&(w="keyboard",E("keyboard",e))}function S(e){w="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(O=!0,E("pointer",e))}function A(e){g(e)&&(O=!0,w="virtual")}function L(e){e.target!==window&&e.target!==document&&(O||j||(w="virtual",E("virtual",e)),O=!1,j=!1)}function M(){O=!1,j=!0}function k(){if("undefined"===typeof window||x)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){O=!0,e.apply(this,arguments)},document.addEventListener("keydown",N,!0),document.addEventListener("keyup",N,!0),document.addEventListener("click",A,!0),window.addEventListener("focus",L,!0),window.addEventListener("blur",M,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",S,!0),document.addEventListener("pointermove",S,!0),document.addEventListener("pointerup",S,!0)):(document.addEventListener("mousedown",S,!0),document.addEventListener("mousemove",S,!0),document.addEventListener("mouseup",S,!0)),x=!0}"undefined"!==typeof document&&("loading"!==document.readyState?k():document.addEventListener("DOMContentLoaded",k));new Set;const C=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];C.join(":not([hidden]),");C.push('[tabindex]:not([tabindex="-1"]):not([disabled])');C.join(':not([hidden]):not([tabindex="-1"]),');function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function V(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"===typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function D(e){return null!=e}function F(e){for(var t={},r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];for(var o=0,i=n;o<i.length;o++){var s=i[o];s in e&&(t[s]=e[s])}return t}function W(e){for(var t={},r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];for(var o=0,i=Object.keys(e);o<i.length;o++){var s=i[o];n.includes(s)||(t[s]=e[s])}return t}function H(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(0!==t.length)return function(e){for(var r,n=e,a=V(t);!(r=a()).done;){n=(0,r.value)(n)}return n}}var K="undefined"!==typeof window,R=Symbol("NONE"),X=K?i.useLayoutEffect:i.useEffect;function U(e,t,r){return Array.isArray(r)?i.createElement.apply(i,[e,t].concat(r)):r||"children"in t?i.createElement(e,t,r):i.createElement(e,t)}function q(e){for(var t=B({},e),r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];for(var o=0,i=n;o<i.length;o++)for(var s=i[o],l=0,c=Object.keys(s);l<c.length;l++){var u=c[l];t[u]=z(u,t[u],s[u])}return t}function G(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function Z(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r,n=V(t);!(r=n()).done;){G(r.value,e)}}}function z(e,t,r){return t===R||r===R?null:null==t?r:null==r?t:"className"===e?c()(t,r):"style"===e?B({},t,r):"ref"===e?Z(t,r):typeof t!==typeof r?r:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof r&&(e=r.apply(void 0,arguments)),e}:r}function Q(e,t,r,n){var a=t.children,o=I(t,["children"]),i=te(a,null!=r&&r);return U(e,B({ref:n},o),i)}function $(e,t){var r=e.as,n=e.hasGap;return Q(null!=r?r:"div",I(e,["as","hasGap"]),n,t)}var J=(0,i.forwardRef)($),Y=function(e){return(0,i.forwardRef)((function(t,r){var n=t.hasGap,a=I(t,["hasGap"]);return Q(e,a,n,r)}))},ee=Object.assign(J,{div:Y("div"),a:Y("a"),button:Y("button"),h1:Y("h1"),h2:Y("h2"),h3:Y("h3"),h4:Y("h4"),h5:Y("h5"),h6:Y("h6"),label:Y("label"),form:Y("form"),section:Y("section"),head:Y("head"),main:Y("main"),nav:Y("nav")});function te(e,t){var r=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?i.createElement.apply(s,["div",{className:r}].concat(e)):(0,i.createElement)("div",{className:r},e):null}function re(e,t,r,n){var a=le(e),o=se(r,a.props);if("render"===a.type)return a.render(o,t);var s=t;"as"===a.type&&a.as&&(t===ee?o.as=a.as:s=a.as);var l=o.children;a.wrapChildren&&(l=a.wrapChildren(function(e){return Array.isArray(e)?1===e.length?e[0]:i.createElement.apply(i,[i.Fragment,{}].concat(e)):e}(l))),n&&(l=te(l,!0));var c=U(s,o,l);return a.wrap&&(c=a.wrap(c)),c}var ne=new Map;function ae(e,t){null==t&&(t={});var r=t["data-plasmic-name"],n=t["data-plasmic-root"],a=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var o=arguments.length,i=new Array(o>2?o-2:0),s=2;s<o;s++)i[s-2]=arguments[s];var l=oe.apply(void 0,[e,t].concat(i));if(r&&ne.set(r,l),n){var c,u=a?null!=(c=ne.get(a))?c:null:l;return ne.clear(),u}return l}function oe(e,t){var r,n=t["data-plasmic-override"],a=t["data-plasmic-wrap-flex-child"],o=null!=(r=t["data-plasmic-trigger-props"])?r:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,s=new Array(i>2?i-2:0),l=2;l<i;l++)s[l-2]=arguments[l];return re(n,e,q.apply(void 0,[t,0===s.length?{}:{children:1===s.length?s[0]:s}].concat(o)),a)}var ie=Symbol("UNSET");function se(e,t){if(!t)return e;for(var r=B({},e),n=0,a=Object.keys(t);n<a.length;n++){var o=a[n],i=e[o],s=t[o];s===ie?delete r[o]:(null!=s||"className"===o||"style"===o||o.startsWith("on")&&"function"===typeof i||(s=R),r[o]=z(o,i,s))}return r}function le(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||i.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?B({},e,{props:e.props||{},type:"as"}):"render"in e?B({},e,{type:"render"}):"props"in e?B({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),r=["wrap","wrapChildren"],t.every((function(e){return r.includes(e)}))?B({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,r;throw new Error("Unexpected override: "+e)}function ce(e,t){for(var r={},n=0,a=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));n<a.length;n++){var o=a[n];r[o]=ue(e[o],t[o])}return r}function ue(e,t){var r,n;if(!e)return t;if(!t)return e;var a=le(e),o=le(t),i=H.apply(void 0,[a.wrap,o.wrap].filter(D)),s=H.apply(void 0,[a.wrapChildren,o.wrapChildren].filter(D)),l=se(null!=(r=a.props)?r:{},o.props);if("render"===o.type)return{render:o.render,props:l,wrap:i,wrapChildren:s};if("render"===a.type)return{render:a.render,props:l,wrap:i,wrapChildren:s};var c=null!=(n="as"===o.type?o.as:void 0)?n:"as"===a.type?a.as:void 0;return B({props:l,wrap:i,wrapChildren:s},c?{as:c}:{})}function de(e,t){var r,n,a,o,i,s,l,c,u=t.name,d=t.descendantNames,p=t.internalVariantPropNames,f=t.internalArgPropNames,m=["variants","args","overrides"],_=(o=W.apply(void 0,[F.apply(void 0,[e].concat(p))].concat(m)),i=null!=(r=e.variants)?r:{},B({},o,i)),y=(s=W.apply(void 0,[F.apply(void 0,[e].concat(f))].concat(m)),l=null!=(n=e.args)?n:{},B({},s,l)),v=ce(W.apply(void 0,[F.apply(void 0,[e].concat(d))].concat(f,p,m)),null!=(a=e.overrides)?a:{}),h=W.apply(void 0,[e,"variants","args","overrides"].concat(d,p,f));Object.keys(h).length>0&&(v=ce(v,((c={})[u]={props:h},c)));return{variants:_,args:y,overrides:v}}var pe=[],fe={};function me(){return K?Object.entries(fe).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var _e=void 0;K&&window.addEventListener("resize",(function(){var e=me();_e&&e.join("")===_e.join("")||(_e=e,u.unstable_batchedUpdates((function(){return pe.forEach((function(e){return e()}))})))}));var ye=(0,i.createContext)(void 0);function ve(e){var t=e.platform,r=e.children,n=(0,i.useMemo)((function(){return{platform:t}}),[t]);return(0,i.createElement)(ye.Provider,{value:n},(0,i.createElement)(f,null,r))}var he=c();function ge(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var be=r(9008),we=(r(3179),r(172)),Pe=r(9146),xe=r(819),Oe=new Array,je=new Array;var Ee={root:["root","bemVindo","logo","superBet"],bemVindo:["bemVindo"],logo:["logo"],superBet:["superBet"]};function Ne(e){var t=function(t){var r=de(t,{name:e,descendantNames:ge(Ee[e]),internalArgPropNames:je,internalVariantPropNames:Oe});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae(i.Fragment,null,ae(be.default,null,ae("title",{key:"title"},""),ae("meta",{key:"og:title",property:"og:title",content:""}),ae("meta",{key:"description",name:"description",property:"og:description",content:""})),ae("style",null,"\n        body {\n          margin: 0;\n        }\n      "),ae("div",{className:we.plasmic_page_wrapper},ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(we.all,Pe.root_reset,xe.root)},ae("div",{"data-plasmic-name":"bemVindo","data-plasmic-override":t.bemVindo,className:he(we.all,we.__wab_text,xe.bemVindo)},"Seja Bem Vindo"),ae("div",{className:he(we.all,xe.freeBox___4Lo5N)},ae("div",{className:he(we.all,xe.freeBox__cqiNn)},ae("img",{"data-plasmic-name":"logo","data-plasmic-override":t.logo,alt:"",className:he(we.img,xe.logo),role:"img",src:"/plasmic/super_bet_mobile_first/images/superbetspng.png"}))),ae("div",{"data-plasmic-name":"superBet","data-plasmic-override":t.superBet,className:he(we.all,we.__wab_text,xe.superBet)},"SUPER BET"))))}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicSplash":"PlasmicSplash.".concat(e),t}var Se=Object.assign(Ne("root"),{bemVindo:Ne("bemVindo"),logo:Ne("logo"),superBet:Ne("superBet"),internalVariantProps:Oe,internalArgProps:je}),Ae=r(6249),Le=new Array,Me=new Array;var ke={root:["root","freeBox","img"],freeBox:["freeBox","img"],img:["img"]};function Ce(e){var t=function(t){var r=de(t,{name:e,descendantNames:ge(ke[e]),internalArgPropNames:Me,internalVariantPropNames:Le});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae(i.Fragment,null,ae(be.default,null,ae("title",{key:"title"},"SUPER BET"),ae("meta",{key:"og:title",property:"og:title",content:"SUPER BET"}),ae("meta",{key:"description",name:"description",property:"og:description",content:""})),ae("style",null,"\n        body {\n          margin: 0;\n        }\n      "),ae("div",{className:we.plasmic_page_wrapper},ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(we.all,Pe.root_reset,Ae.root)},ae("div",{"data-plasmic-name":"freeBox","data-plasmic-override":t.freeBox,className:he(we.all,Ae.freeBox)},ae("img",{"data-plasmic-name":"img","data-plasmic-override":t.img,alt:"",className:he(we.img,Ae.img),role:"img",src:"/plasmic/super_bet_mobile_first/images/superbLogo310816Png.png"})))))}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicHome":"PlasmicHome.".concat(e),t}var Be=Object.assign(Ce("root"),{freeBox:Ce("freeBox"),img:Ce("img"),internalVariantProps:Le,internalArgProps:Me}),Ie=r(6320),Te=new Array,Ve=new Array;var De={root:["root","img","textbox","passwordInput","button"],img:["img"],textbox:["textbox"],passwordInput:["passwordInput"],button:["button"]};function Fe(e){var t=function(t){var r=de(t,{name:e,descendantNames:ge(De[e]),internalArgPropNames:Ve,internalVariantPropNames:Te});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae(i.Fragment,null,ae(be.default,null,ae("title",{key:"title"},"Fa\xe7a Login para usar o SUPER BET"),ae("meta",{key:"og:title",property:"og:title",content:"Fa\xe7a Login para usar o SUPER BET"}),ae("meta",{key:"description",name:"description",property:"og:description",content:""})),ae("style",null,"\n        body {\n          margin: 0;\n        }\n      "),ae("div",{className:we.plasmic_page_wrapper},ae(ee,{as:"div","data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,hasGap:!0,className:he(we.all,Pe.root_reset,Ie.root)},ae("img",{"data-plasmic-name":"img","data-plasmic-override":t.img,alt:"",className:he(we.img,Ie.img),role:"img",src:"/plasmic/super_bet_mobile_first/images/superbetspng.png"}),ae("input",{"data-plasmic-name":"textbox","data-plasmic-override":t.textbox,className:he(we.input,Ie.textbox),placeholder:"Login",size:1,type:"text",value:"Login"}),ae("input",{"data-plasmic-name":"passwordInput","data-plasmic-override":t.passwordInput,className:he(we.input,Ie.passwordInput),size:1,type:"password",value:"Some password"}),ae("button",{"data-plasmic-name":"button","data-plasmic-override":t.button,className:he(we.button,we.__wab_text,Ie.button)},"ENTRAR"))))}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicLogin":"PlasmicLogin.".concat(e),t}var We=Object.assign(Fe("root"),{img:Fe("img"),textbox:Fe("textbox"),passwordInput:Fe("passwordInput"),button:Fe("button"),internalVariantProps:Te,internalArgProps:Ve}),He=r(2369),Ke=new Array,Re=new Array;var Xe={root:["root"]};var Ue=Object.assign(function(e){var t=function(t){var r=de(t,{name:e,descendantNames:ge(Xe[e]),internalArgPropNames:Re,internalVariantPropNames:Ke});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(we.all,Pe.root_reset,He.root)})}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicMenu":"PlasmicMenu.".concat(e),t}("root"),{internalVariantProps:Ke,internalArgProps:Re});function qe(e){return console.warn("DEPRECATED: Plasmic now uses a custom hook for Screen variants, which is automatically included in your components. Please remove this provider from your code."),e.children}Ge=!0,Ze={desktopOnly:"(min-width:768px)"},Object.assign(fe,Ze),_e=void 0;var Ge,Ze,ze={Splash:Se,Home:Be,Login:We,Menu:Ue},Qe={Screen:{component:qe,isContext:!Boolean("ScreenVariantProvider")}},$e={Splash:{nysyKGsi1K45a1qLZPNoXW:Se},Home:{nysyKGsi1K45a1qLZPNoXW:Be},Login:{nysyKGsi1K45a1qLZPNoXW:We},Menu:{nysyKGsi1K45a1qLZPNoXW:Ue}},Je={Screen:{nysyKGsi1K45a1qLZPNoXW:{component:qe,isContext:!Boolean(void 0)}}},Ye={"/":{name:"Splash",projectId:"nysyKGsi1K45a1qLZPNoXW"},"/home":{name:"Home",projectId:"nysyKGsi1K45a1qLZPNoXW"},"/login":{name:"Login",projectId:"nysyKGsi1K45a1qLZPNoXW"}};function et(e){return Array.isArray(e)&&(e=e.join("/")),e.startsWith("/")||(e="/"+e),Ye[e]}function tt(e,t){if(ze[t])return ze[t];if(!$e[t])throw new Error("The component ".concat(t," could not be found."));if(!$e[t][e])throw new Error("The component ".concat(t," requires a valid projectId. Passed: ").concat(e,". Options: ").concat(Object.keys($e[t])));return $e[t][e]}function rt(e,t,r){var n=Object.entries(r||{}).map((function(e){var r=o(e,2),n=r[0],a=r[1];if(Qe[n]){var i=Qe[n],s=i.component;return[i.isContext?s.Provider:s,a]}if(!Je[n])throw new Error("The provider ".concat(n," could not be found."));if(!Je[n][t])throw new Error("The provider ".concat(n," requires a valid projectId. Passed: ").concat(t,". Options: ").concat(Object.keys(Je[n])));var l=Je[n][t],c=l.component;return[l.isContext?c.Provider:c,a]}));return n.length?n.reduce((function(e,t){var r=o(t,2),n=r[0],a=r[1];return i.createElement(n,{value:a},e)}),e):e}function nt(e){var t=e.projectId,r=e.component,n=e.componentProps,a=void 0===n?{}:n,o=e.providerProps,s=void 0===o?{}:o,l=tt(t,r);return rt(i.createElement(l,a),t,s)}nt.getPlumeType=function(e){return tt(e.projectId,e.component).__plumeType}},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},2775:function(e,t,r){"use strict";var n=r(1682);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(o=r(3244))&&o.__esModule?o:{default:o},l=r(3398),c=r(1165),u=r(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function _(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var l=0,c=m.length;l<c;l++){var u=m[l];if(a.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?o=!1:r.add(u);else{var d=a.props[u],p=n[u]||new Set;"name"===u&&i||!p.has(d)?(p.add(d),n[u]=p):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}var y=function(e){var t=e.children,r=(0,i.useContext)(l.AmpStateContext),n=(0,i.useContext)(c.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:_,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)};t.default=y},3244:function(e,t,r){"use strict";var n=r(3115),a=r(2553),o=r(2012),i=(r(450),r(9807)),s=r(7690),l=r(9828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var a=l(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var u=r(7294),d=function(e){i(r,e);var t=c(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=d},9795:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return l}});var a=r(5893),o=(r(2702),r(6598));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){var t=e.Component,r=e.pageProps;return(0,a.jsx)(o.UF,{children:(0,a.jsx)(t,s({},r))})}},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9795)}])},172:function(e){e.exports={all:"plasmic__default_style_all__208hu",img:"plasmic__default_style_img__23ccE plasmic__default_style_all__208hu",input:"plasmic__default_style_input__25_Su plasmic__default_style_all__208hu",textarea:"plasmic__default_style_textarea__2c9Ua plasmic__default_style_all__208hu",button:"plasmic__default_style_button__3nItH plasmic__default_style_all__208hu",code:"plasmic__default_style_code__3DJfb plasmic__default_style_all__208hu",pre:"plasmic__default_style_pre__3MJN8 plasmic__default_style_all__208hu",h1:"plasmic__default_style_h1__eQpTj plasmic__default_style_all__208hu",h2:"plasmic__default_style_h2__2bvJx plasmic__default_style_all__208hu",h3:"plasmic__default_style_h3__3ZEPj plasmic__default_style_all__208hu",h4:"plasmic__default_style_h4__1M-X7 plasmic__default_style_all__208hu",h5:"plasmic__default_style_h5__22BiX plasmic__default_style_all__208hu",h6:"plasmic__default_style_h6__367TL plasmic__default_style_all__208hu",address:"plasmic__default_style_address__mWNXW plasmic__default_style_all__208hu",ol:"plasmic__default_style_ol__2pXAy plasmic__default_style_all__208hu",ul:"plasmic__default_style_ul__iAncp plasmic__default_style_all__208hu",select:"plasmic__default_style_select__3HQ-o plasmic__default_style_all__208hu",li:"plasmic__default_style_li__2xWy3 plasmic__default_style_all__208hu",plasmic_default__component_wrapper:"plasmic__default_style_plasmic_default__component_wrapper__39rWm",__wab_text:"plasmic__default_style___wab_text__1tCIX",plasmic_page_wrapper:"plasmic__default_style_plasmic_page_wrapper__rvRY-"}},6249:function(e){e.exports={root:"PlasmicHome_root__pVDba",freeBox:"PlasmicHome_freeBox__26T_Y",img:"PlasmicHome_img__3W03D"}},6320:function(e){e.exports={root:"PlasmicLogin_root__2Wh8X",img:"PlasmicLogin_img__2OAuy",textbox:"PlasmicLogin_textbox__3sday",passwordInput:"PlasmicLogin_passwordInput__2DvM3",button:"PlasmicLogin_button__tLfXl"}},2369:function(e){e.exports={root:"PlasmicMenu_root__43xsU"}},819:function(e){e.exports={root:"PlasmicSplash_root__3wjA-",bemVindo:"PlasmicSplash_bemVindo__2so2_",freeBox___4Lo5N:"PlasmicSplash_freeBox___4Lo5N__2wDQ4",freeBox__cqiNn:"PlasmicSplash_freeBox__cqiNn__oL-yO",logo:"PlasmicSplash_logo__3y8L9",superBet:"PlasmicSplash_superBet__3_fRa"}},9146:function(e){e.exports={root_reset:"plasmic_super_bet_mobile_first_root_reset__1kXGO"}},3179:function(){},2702:function(){},9008:function(e,t,r){e.exports=r(2775)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var n=r(8164),a=r(7381),o=r(3585),i=r(5725);e.exports=function(e){return n(e)||a(e)||o(e)||i()}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var r=e.O();_N_E=r}]);