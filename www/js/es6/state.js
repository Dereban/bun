System.register(['./model', './collection', './util', './db'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments)).next());
        });
    };
    var model_1, collection_1, util_1, db_1;
    var config, isMobile, page, $thread, $name, $email, $banner, $loading, posts, mine, ownPosts, syncs, debug;
    function read(href) {
        const board = href.match(/\/([a-zA-Z0-9]+?)\//)[1], thread = href.match(/\/(\d+)(:?#\d+)?(?:[\?&]\w+=\w+)*$/), lastN = href.match(/[\?&]last=(\d+)/);
        return {
            board: board,
            thread: thread ? parseInt(thread[1]) : 0,
            lastN: lastN ? parseInt(lastN[1]) : 0,
        };
    }
    function loadFromDB() {
        return __awaiter(this, void 0, void 0, function* () {
            const resMine = yield db_1.db
                .transaction('posts', 'readonly')
                .objectStore('posts')
                .get('mine')
                .exec();
            delete resMine.id;
            exports_1("mine", mine = new Set([resMine]));
        });
    }
    exports_1("loadFromDB", loadFromDB);
    function getModel(el) {
        const id = util_1.getID(el);
        if (!id) {
            return null;
        }
        return posts.get(id);
    }
    exports_1("getModel", getModel);
    function displayLoading(loading) {
        $loading.style.display = loading ? 'block' : 'none';
    }
    exports_1("displayLoading", displayLoading);
    return {
        setters:[
            function (model_1_1) {
                model_1 = model_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (db_1_1) {
                db_1 = db_1_1;
            }],
        execute: function() {
            exports_1("config", config = window.config);
            exports_1("isMobile", isMobile = window.isMobile);
            exports_1("page", page = new model_1.default(read(location.href)));
            exports_1("$thread", $thread = document.query('threads'));
            exports_1("$name", $name = document.query('#name'));
            exports_1("$email", $email = document.query('#email'));
            exports_1("$banner", $banner = document.query('#banner'));
            exports_1("$loading", $loading = document.query('#loadingImage'));
            exports_1("posts", posts = new collection_1.default());
            exports_1("ownPosts", ownPosts = new Set());
            exports_1("syncs", syncs = {});
            exports_1("debug", debug = /[\?&]debug=true/.test(location.href));
        }
    }
});

//# sourceMappingURL=maps/state.js.map
