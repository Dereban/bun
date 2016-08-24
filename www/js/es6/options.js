System.register(['./model', './options/specs', './options/view', './defer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var model_1, specs_1, view_1, defer_1;
    var options, models, OptionModel;
    return {
        setters:[
            function (model_1_1) {
                model_1 = model_1_1;
            },
            function (specs_1_1) {
                specs_1 = specs_1_1;
            },
            function (view_1_1) {
                view_1 = view_1_1;
            },
            function (defer_1_1) {
                defer_1 = defer_1_1;
            }],
        execute: function() {
            localStorage.removeItem("options");
            options = new model_1.default();
            exports_1("default",options);
            exports_1("models", models = {});
            class OptionModel {
                constructor(spec) {
                    if (spec.noLoad) {
                        return;
                    }
                    this.spec = spec;
                    this.id = this.spec.id;
                    if (!spec.type) {
                        spec.type = 0;
                    }
                    const val = options.attrs[this.id] = this.get();
                    options.onChange(this.id, val => this.onChange(val));
                    if (!spec.noExecOnStart) {
                        this.execute(val);
                    }
                    models[this.id] = this;
                }
                read() {
                    return localStorage.getItem(this.id) || "";
                }
                get() {
                    const stored = this.read();
                    if (!stored) {
                        return this.spec.default;
                    }
                    else {
                        if (stored === 'false') {
                            return false;
                        }
                        if (stored === "true") {
                            return true;
                        }
                        const num = parseInt(stored, 10);
                        if (num || num === 0) {
                            return num;
                        }
                        return this.spec.default;
                    }
                }
                onChange(val) {
                    this.execute(val);
                    this.set(val);
                }
                execute(val) {
                    if (this.spec.exec) {
                        this.spec.exec(val);
                    }
                }
                set(val) {
                    if (val !== this.spec.default || this.read()) {
                        localStorage.setItem(this.id, val.toString());
                    }
                }
                validate(val) {
                    if (this.spec.validation) {
                        return this.spec.validation(val);
                    }
                    return true;
                }
            }
            for (let spec of specs_1.specs) {
                new OptionModel(spec);
            }
            defer_1.defer(() => new view_1.default());
        }
    }
});

//# sourceMappingURL=maps/options.js.map
