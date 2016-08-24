System.register(['./view'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var view_1;
    var Modal, BannerModal;
    return {
        setters:[
            function (view_1_1) {
                view_1 = view_1_1;
            }],
        execute: function() {
            class Modal extends view_1.default {
                constructor(args) {
                    const addClass = 'modal glass';
                    if (args.cls) {
                        args.cls += ' ' + addClass;
                    }
                    else {
                        args.cls = addClass;
                    }
                    super(args);
                    document.body.append(this.el);
                    this.render();
                }
                render() { }
            }
            exports_1("Modal", Modal);
            class BannerModal extends Modal {
                constructor(args) {
                    args.cls = 'bmodal';
                    super(args);
                }
            }
            exports_1("BannerModal", BannerModal);
        }
    }
});

//# sourceMappingURL=maps/modal.js.map
