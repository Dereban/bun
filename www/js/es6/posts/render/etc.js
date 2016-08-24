System.register(['../../state', '../../lang', '../../util'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var state_1, lang_1, util_1;
    function renderPostLink(num, board, op) {
        let text = '>>';
        if (board !== state_1.page.get('board')) {
            text += `>/${board}/`;
        }
        text += num;
        if (state_1.mine.has(num)) {
            text += ' ' + lang_1.posts.you;
        }
        const thread = state_1.page.get('thread');
        if (op !== thread) {
            text += ' \u27a1';
        }
        else if (num == thread) {
            text += ' ' + lang_1.posts.OP;
        }
        return postAnchor(`/${board}/${op}#${num}`, text);
    }
    exports_1("renderPostLink", renderPostLink);
    function postAnchor(href, text) {
        return util_1.parseHTML `<a class="history" href="${href}">
			${text}
		</a>`;
    }
    function renderBacklinks(links) {
        if (!links) {
            return '';
        }
        let html = '';
        for (let id in links) {
            const { board, op } = links[id];
            if (html) {
                html += ' ';
            }
            html += renderPostLink(parseInt(id), board, op);
        }
        return html;
    }
    exports_1("renderBacklinks", renderBacklinks);
    return {
        setters:[
            function (state_1_1) {
                state_1 = state_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=../../maps/posts/render/etc.js.map
