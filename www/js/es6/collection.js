System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Collection;
    return {
        setters:[],
        execute: function() {
            class Collection {
                constructor(models) {
                    this.models = {};
                    if (models) {
                        for (let model of models) {
                            this.add(model);
                        }
                    }
                }
                get(id) {
                    return this.models[id];
                }
                add(model) {
                    this.models[model.id] = model;
                    model.collection = this;
                }
                remove(model) {
                    delete this.models[model.id];
                    delete model.collection;
                }
                clear() {
                    for (let id in this.models) {
                        delete this.models[id].collection;
                    }
                    this.models = {};
                }
                forEach(fn) {
                    for (let id in this.models) {
                        fn(this.models[id]);
                    }
                }
            }
            exports_1("default", Collection);
        }
    }
});

//# sourceMappingURL=maps/collection.js.map
