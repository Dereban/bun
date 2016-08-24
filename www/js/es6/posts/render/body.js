System.register(['../../state', 'underscore', './etc'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var state_1, underscore_1, etc_1;
    var refTargets, boards;
    function renderBody(data) {
        if (!data.state) {
            data.state = [0, 0, 0];
        }
        let html = renderFragment(data.body, data);
        if (data.state[1]) {
            html += '</em>';
        }
        if (data.state[2]) {
            html += '</del>';
        }
        return html;
    }
    exports_1("renderBody", renderBody);
    function renderFragment(frag, data) {
        const lines = frag.split('\n'), { state } = data;
        let html = '';
        for (let i = 0; i < lines.length; i++) {
            if (state[0] && i % 2) {
                if (state[1] % 2) {
                    html += '</em>';
                    state[1]++;
                }
                html += '<br>';
                state[0] = 0;
            }
            const line = lines[i];
            if (!state[0] && line.startsWith('>')) {
                html += '<em>';
                state[1]++;
            }
            if (frag) {
                for (let word of line.split(' ')) {
                    html += parseWord(word, data);
                    state[0] = 1;
                }
            }
        }
        return html;
    }
    exports_1("renderFragment", renderFragment);
    function parseWord(word, data) {
        const split = word.split(/\[\/?spoiler]/i);
        let html = '';
        for (let i = 0; i < split.length; i++) {
            if (i % 2) {
                html += `<${data.state[2]++ % 2 ? '/' : ''}del>`;
            }
            const bit = split[i];
            if (/^>>\d+$/.test(bit)) {
                html += parsePostLink(bit, data.links);
            }
            else if (/^>>>\/\w+\//.test(bit)) {
                html += parseReference(bit);
            }
            else if (/^https?:\/\/[^-A-Za-z0-9+&@#/%?=~_]$/.test(bit)) {
                html += parseURL(bit);
            }
            else if (/<strong>.+<\/strong>/.test(bit)) {
                html += bit;
            }
            else {
                html += underscore_1.escape(bit);
            }
        }
        return html;
    }
    function parsePostLink(bit, links) {
        if (!links) {
            return bit;
        }
        const num = parseInt(bit.match(/^>>\/(\d+)$/)[1]), verified = links[num];
        if (!verified) {
            return bit;
        }
        return etc_1.renderPostLink(num, verified.board, verified.op);
    }
    function parseReference(bit) {
        const name = bit.match(/^>>>\/(\w+)\/$/)[1], href = refTargets[name];
        if (!href) {
            return bit;
        }
        return newTabLink(href, bit);
    }
    function newTabLink(href, text) {
        return `<a href="${href}" target="_blank">${text}</a>`;
    }
    function parseURL(bit) {
        return newTabLink(encodeURI(bit), bit);
    }
    return {
        setters:[
            function (state_1_1) {
                state_1 = state_1_1;
            },
            function (underscore_1_1) {
                underscore_1 = underscore_1_1;
            },
            function (etc_1_1) {
                etc_1 = etc_1_1;
            }],
        execute: function() {
            refTargets = {}, { boards } = state_1.config;
            for (let board of boards.enabled) {
                refTargets[board] = `../${board}/`;
            }
            for (let [name, link] of boards.psuedo.concat(boards.links)) {
                refTargets[name] = link;
            }
        }
    }
});

//# sourceMappingURL=../../maps/posts/render/body.js.map
