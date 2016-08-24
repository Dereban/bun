System.register(['underscore', '../../util', '../../state', '../../options', '../../lang'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var underscore_1, util_1, state_1, options_1, lang_1;
    function renderHeader(data) {
        const { id, op, subject } = data, postURL = renderPostURL(id);
        return util_1.parseHTML `<header>
			<input type="checkbox" class="postCheckbox">
			${subject ? `<h3>「${underscore_1.escape(data.subject)}」</h3>` : ''}
			${renderName(data)}
			${renderTime(data.time)}
			<nav>
				<a href="${postURL}" class="history">
					No.
				</a>
				<a href="${postURL}" class="quote">
					${id.toString()}
				</a>
			</nav>
		</header>
		<span class="oi control" data-glyph="chevron-bottom"></span>`;
    }
    exports_1("renderHeader", renderHeader);
    function renderName(data) {
        let html = '<b class="name';
        const { auth, email } = data;
        if (auth) {
            html += ` ${auth === 'admin' ? 'admin' : 'moderator'}`;
        }
        html += '">';
        if (email) {
            const attrs = {
                class: 'email',
                href: 'mailto:' + encodeURI(email),
                target: 'blank'
            };
            html += `<a ${util_1.parseAttributes(attrs)}>`;
        }
        html += resolveName(data);
        if (email) {
            html += '</a>';
        }
        html += '</b>';
        return html;
    }
    exports_1("renderName", renderName);
    function resolveName(data) {
        let html = '';
        const { trip, name, auth } = data;
        if (name || !trip) {
            if (name) {
                html += underscore_1.escape(name);
            }
            else {
                html += lang_1.posts.anon;
            }
            if (trip) {
                html += ' ';
            }
        }
        if (trip) {
            html += `<code>${underscore_1.escape(trip)}</code>`;
        }
        if (auth) {
            let alias;
            if (auth in state_1.config.staff.classes) {
                alias = state_1.config.staff.classes[auth].alias;
            }
            else {
                alias = auth;
            }
            html += ` ## ${alias}`;
        }
        return html;
    }
    function renderTime(time) {
        let title, text;
        const readable = readableTime(time);
        if (options_1.default.get('relativeTime')) {
            title = readable;
            text = relativeTime(time, Date.now());
        }
        return util_1.parseHTML `<time title="${title}">
			${text || readable}
		</time>`;
    }
    exports_1("renderTime", renderTime);
    function readableTime(time) {
        let d = new Date(time);
        return util_1.pad(d.getDate()) + ' '
            + lang_1.time.year[d.getMonth()] + ' '
            + d.getFullYear()
            + `(${lang_1.time.week[d.getDay()]})`
            + `${util_1.pad(d.getHours())}:${util_1.pad(d.getMinutes())}`;
    }
    function relativeTime(then, now) {
        let time = Math.floor((now - then) / 60000), isFuture = false;
        if (time < 1) {
            if (time > -5) {
                return lang_1.time.justNow;
            }
            else {
                isFuture = true;
                time = -time;
            }
        }
        const divide = [60, 24, 30, 12], unit = ['minute', 'hour', 'day', 'month'];
        for (let i = 0; i < divide.length; i++) {
            if (time < divide[i]) {
                return ago(time, lang_1.time[unit[i]], isFuture);
            }
            time = Math.floor(time / divide[i]);
        }
        return ago(time, lang_1.time.year, isFuture);
    }
    function ago(time, units, isFuture) {
        let text = units[time > 1 ? 1 : 0];
        if (isFuture) {
            text += `${lang_1.time.in} ${text}`;
        }
        else {
            text += ` ${lang_1.time.ago}`;
        }
        return text;
    }
    function renderPostURL(id) {
        return `#p${id}`;
    }
    exports_1("renderPostURL", renderPostURL);
    return {
        setters:[
            function (underscore_1_1) {
                underscore_1 = underscore_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (state_1_1) {
                state_1 = state_1_1;
            },
            function (options_1_1) {
                options_1 = options_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=../../maps/posts/render/header.js.map
