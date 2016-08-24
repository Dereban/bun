System.register(['../../util', './header', './image', './etc', './body'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var util_1, header_1, image_1, etc_1, body_1;
    function renderSection(data, cls = '') {
        if (data.locked) {
            cls += ' locked';
        }
        if (data.editing) {
            cls += ' editing';
        }
        data.largeThumb = true;
        return util_1.parseHTML `<section id="p${data.id.toString()}" class="${cls}">
			<div class="background glass">
				${renderPost(data)}
				<span class="omit"></span>
			</div>
		</section>`;
    }
    exports_1("renderSection", renderSection);
    function renderArticle(data) {
        let cls = 'glass';
        if (data.editing) {
            cls += ' editing';
        }
        return util_1.parseHTML `<article id="p${data.id.toString()}" class="${cls}">
			${renderPost(data)}
		</article>`;
    }
    exports_1("renderArticle", renderArticle);
    function renderPost(data) {
        const { body, backlinks } = data;
        return util_1.parseHTML `${header_1.renderHeader(data)}
		${data.image ? image_1.renderImage(data.image) : ''}
		<div class="container">
			<blockquote>
				${body_1.renderBody(data)}
			</blockquote>
			<small>
				${etc_1.renderBacklinks(backlinks)}
			</small>
		</div>`;
    }
    return {
        setters:[
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (image_1_1) {
                image_1 = image_1_1;
            },
            function (etc_1_1) {
                etc_1 = etc_1_1;
            },
            function (body_1_1) {
                body_1 = body_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=../../maps/posts/render/posts.js.map
