System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var hooks;
    function hook(name, func) {
        const hook = hooks[name];
        if (!hook) {
            hooks[name] = [func];
        }
        else {
            hook.push(func);
        }
    }
    exports_1("hook", hook);
    function trigger(name, param) {
        const hook = hooks[name];
        if (!hook) {
            return;
        }
        for (let func of hook) {
            func(param);
        }
    }
    exports_1("trigger", trigger);
    return {
        setters:[],
        execute: function() {
            exports_1("hooks", hooks = {});
        }
    }
});

//# sourceMappingURL=maps/hooks.js.map
