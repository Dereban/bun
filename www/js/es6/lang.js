System.register(['./util'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var util_1;
    var lang, posts, banner, images, navigation, reports, time, sync, syncwatch, opts;
    return {
        setters:[
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            lang = window.lang;
            exports_1("posts", posts = lang.posts);
            exports_1("banner", banner = lang.banner);
            exports_1("images", images = lang.images);
            exports_1("navigation", navigation = lang.navigation);
            exports_1("reports", reports = lang.reports);
            exports_1("time", time = lang.time);
            exports_1("sync", sync = lang.sync);
            exports_1("syncwatch", syncwatch = lang.syncwatch);
            exports_1("opts", opts = lang.opts);
            document.head.appendChild(util_1.parseEl(util_1.parseHTML `<style>
		.locked:after {
			content: "${posts.threadLocked}";
		}
		.locked > header nav:after {
			content: " (${posts.locked})";
		}
	</style>`));
        }
    }
});

//# sourceMappingURL=maps/lang.js.map
