System.register(['./util', './model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var util_1, model_1;
    var View;
    return {
        setters:[
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (model_1_1) {
                model_1 = model_1_1;
            }],
        execute: function() {
            class View {
                constructor({ el, model, tag, cls, id }) {
                    this.model = model || new model_1.default();
                    this.el = el || document.createElement(tag || 'div');
                    if (id) {
                        this.el.setAttribute('id', id);
                    }
                    if (cls) {
                        this.el.setAttribute('class', cls);
                    }
                    this.model.attach(this);
                }
                remove() {
                    this.el.remove();
                    this.model.detach(this);
                    delete this.model;
                }
                on(type, selector, fn) {
                    util_1.on(this.el, type, selector, fn);
                }
                onClick(events) {
                    for (let selector in events) {
                        this.on('click', selector, events[selector]);
                    }
                }
                onAll(type, fn) {
                    this.el.addEventListener(type, fn);
                }
                once(type, selector, fn) {
                    util_1.once(this.el, type, selector, fn);
                }
                onceAll(type, fn) {
                    util_1.onceAll(this.el, type, fn);
                }
            }
            exports_1("default", View);
        }
    }
});

//# sourceMappingURL=maps/view.js.map
