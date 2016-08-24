System.register(['../model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var model_1;
    var Post;
    return {
        setters:[
            function (model_1_1) {
                model_1 = model_1_1;
            }],
        execute: function() {
            class Post extends model_1.default {
                constructor(attrs = {}) {
                    super(attrs);
                }
            }
            exports_1("Post", Post);
        }
    }
});

//# sourceMappingURL=../maps/posts/models.js.map
