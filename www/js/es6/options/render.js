System.register(['underscore', '../util', '../lang', './specs'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var underscore_1, util_1, lang_1, specs_1;
    function default_1() {
        let html = '<ul class="option_tab_sel">';
        const { tabs } = lang_1.opts, byTab = underscore_1.groupBy(specs_1.specs, 'tab'), opts = [];
        for (let i = 0; i < tabs.length; i++) {
            opts[i] = underscore_1.filter(byTab[i], spec => !spec.noLoad && !spec.hidden);
            if (!opts[i].length) {
                continue;
            }
            const attrs = {
                'data-content': `tab-${i}`,
                class: 'tab_link'
            };
            if (i === 0) {
                attrs['class'] += ' tab_sel';
            }
            html += util_1.parseHTML `<li>
				<a ${util_1.parseAttributes(attrs)}>
					${tabs[i]}
				</a>
			</li>`;
        }
        html += '</ul><ul class="option_tab_cont">';
        for (let i = 0; i < opts.length; i++) {
            html += renderTab(opts[i], i);
        }
        html += '</ul>';
        return html;
    }
    exports_1("default", default_1);
    function renderTab(opts, i) {
        if (!opts.length) {
            return '';
        }
        let html = '';
        html += `<li class="tab-${i}`;
        if (i === 0) {
            html += ' tab_sel';
        }
        html += '">';
        for (let opt of opts) {
            html += renderOption(opt);
        }
        if (i === 0) {
            html += renderExtras();
        }
        html += '</li>';
        return html;
    }
    function renderOption(spec) {
        switch (spec.type) {
            case 3:
                return 'Alt+' + renderInput(spec.id, { maxlength: '1' });
            case 0:
                return renderInput(spec.id, { type: 'checkbox' });
            case 1:
                return renderInput(spec.id, {
                    style: 'width: 4em;',
                    maxlength: '4'
                });
            case 2:
                return renderInput(spec.id, { type: 'file' });
            case 4:
                return renderMenu(spec);
        }
    }
    function renderInput(id, attrs) {
        const [label, title] = lang_1.opts.labels[id];
        underscore_1.extend(attrs, { id: id, title: title });
        return `<input ${util_1.parseAttributes(attrs)}>` + renderLabel(id, title, label);
    }
    function renderLabel(id, title, label) {
        return util_1.parseHTML `<label for="${id}" title="${title}">
			${label}
		</label>
		<br>`;
    }
    function renderMenu({ id, list }) {
        const [label, title] = lang_1.opts.labels[id];
        let html = `<select id="${id}" title="${title}">`;
        for (let item of list) {
            html += util_1.parseHTML `<option value="${item}">
				${lang_1.opts.modes[item] || item}
			</option>`;
        }
        html += '</select>' + renderLabel(id, title, label);
        return html;
    }
    function renderExtras() {
        let html = '<br>';
        const links = ['export', 'import', 'hidden'];
        for (let id of links) {
            const [label, title] = lang_1.opts.labels[id];
            html += util_1.parseHTML `<a id="${id}" title="${title}">
				${label}
			</a> `;
        }
        const attrs = {
            type: 'file',
            id: 'importSettings',
            name: "Import Settings"
        };
        html += `<input ${util_1.parseAttributes(attrs)}>`;
        return html;
    }
    return {
        setters:[
            function (underscore_1_1) {
                underscore_1 = underscore_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (specs_1_1) {
                specs_1 = specs_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=../maps/options/render.js.map
