"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}();System.register(["./util"],function(t,n){var e;n&&n.id;return{setters:[function(t){e=t}],execute:function(){var n=function(){function t(n){_classCallCheck(this,t),this.stateHandlers=new e.SetMap,this.transitions={},this.transitionHandlers=new e.SetMap,this.wilds={},this.state=n}return _createClass(t,[{key:"on",value:function(t,n){this.stateHandlers.add(t,n)}},{key:"act",value:function(t,n,e,i){var r=!0,a=!1,s=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var l=o.value,c=this.transitionString(l,n);this.transitions[c]=e,i&&this.transitionHandlers.add(c,i)}}catch(f){a=!0,s=f}finally{try{!r&&u["return"]&&u["return"]()}finally{if(a)throw s}}}},{key:"wildAct",value:function(t,n,e){this.wilds[t]=n,e&&this.on(n,e)}},{key:"transitionString",value:function(t,n){return t+"+"+n}},{key:"feed",value:function(t,n){var e=void 0;if(t in this.wilds)e=this.wilds[t];else{var i=this.transitionString(this.state,t);this.transitionHandlers.forEach(i,function(t){return t(n)}),e=this.transitions[i]}this.stateHandlers.forEach(e,function(t){return t(n)}),this.state=e}},{key:"feeder",value:function(t){var n=this;return function(e){return n.feed(t,e)}}}]),t}();t("default",n)}}});
//# sourceMappingURL=maps/fsm.js.map
