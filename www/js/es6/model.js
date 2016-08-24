System.register(['underscore'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var underscore_1;
    var Model;
    return {
        setters:[
            function (underscore_1_1) {
                underscore_1 = underscore_1_1;
            }],
        execute: function() {
            class Model {
                constructor(attrs = {}) {
                    this.views = new Set();
                    this.changeHooks = {};
                    this.attrs = attrs;
                }
                get(key) {
                    return this.attrs[key];
                }
                set(key, val) {
                    this.attrs[key] = val;
                    this.execChangeHooks(key, val);
                }
                setAttrs(attrs) {
                    underscore_1.extend(this.attrs, attrs);
                    for (let key in attrs) {
                        this.execChangeHooks(key, attrs[key]);
                    }
                }
                append(key, val) {
                    if (this.attrs[key]) {
                        this.attrs[key].push(val);
                    }
                    else {
                        this.attrs[key] = [val];
                    }
                    this.execChangeHooks(key, this.get(key));
                }
                extend(key, object) {
                    if (this.attrs[key]) {
                        underscore_1.extend(this.attrs[key], object);
                    }
                    else {
                        this.attrs[key] = object;
                    }
                    this.execChangeHooks(key, this.get(key));
                }
                onChange(key, func) {
                    if (this.changeHooks[key]) {
                        this.changeHooks[key].push(func);
                    }
                    else {
                        this.changeHooks[key] = [func];
                    }
                }
                execChangeHooks(key, val) {
                    const hooks = this.changeHooks[key];
                    if (!hooks) {
                        return;
                    }
                    for (let func of hooks) {
                        func(val);
                    }
                }
                remove() {
                    if (this.collection) {
                        this.collection.remove(this);
                    }
                    delete this.changeHooks;
                    delete this.attrs;
                    for (let view of this.views) {
                        view.remove();
                    }
                }
                attach(view) {
                    this.views.add(view);
                }
                detach(view) {
                    this.views.delete(view);
                }
            }
            exports_1("default", Model);
        }
    }
});

//# sourceMappingURL=maps/model.js.map
