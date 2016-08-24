System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var deferred;
    function defer(func) {
        deferred.push(func);
    }
    exports_1("defer", defer);
    function exec() {
        while (deferred.length > 0) {
            deferred.shift()();
        }
    }
    exports_1("exec", exec);
    return {
        setters:[],
        execute: function() {
            deferred = [];
        }
    }
});

//# sourceMappingURL=maps/defer.js.map
