System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SetMap;
    function fetchJSON(url) {
        return fetch("api/" + url).then(res => res.json());
    }
    exports_1("fetchJSON", fetchJSON);
    function randomID(len) {
        let id = '';
        for (let i = 0; i < len; i++) {
            let char = (Math.random() * 36).toString(36)[0];
            if (Math.random() < 0.5) {
                char = char.toUpperCase();
            }
            id += char;
        }
        return id;
    }
    exports_1("randomID", randomID);
    function getNum(el) {
        if (!el) {
            return 0;
        }
        return parseInt(el.getAttribute('id').slice(1), 10);
    }
    exports_1("getNum", getNum);
    function getID(el) {
        if (!el) {
            return 0;
        }
        return getNum(el.closest('article, section'));
    }
    exports_1("getID", getID);
    function parseEls(DOMString) {
        const el = document.createElement('div');
        el.innerHTML = DOMString;
        return Array.from(el.childNodes);
    }
    exports_1("parseEls", parseEls);
    function parseEl(DOMString) {
        const el = document.createElement('div');
        el.innerHTML = DOMString;
        return el.firstChild;
    }
    exports_1("parseEl", parseEl);
    function on(el, type, selector, fn) {
        el.addEventListener(type, event => {
            if (event.target.matches(selector)) {
                fn(event);
            }
        });
    }
    exports_1("on", on);
    function once(el, type, selector, fn) {
        el.addEventListener(type, event => {
            if (event.target.matches(selector)) {
                fn(event);
                el.removeEventListener(type, fn);
            }
        });
    }
    exports_1("once", once);
    function onceAll(el, type, fn) {
        el.addEventListener(type, event => {
            fn(event);
            el.removeEventListener(type, fn);
        });
    }
    exports_1("onceAll", onceAll);
    function outerWidth(el) {
        const style = getComputedStyle(el);
        const widths = [
            style.marginLeft, style.marginRight, style.paddingLeft,
            style.paddingRight
        ];
        let total = 0;
        for (let width of widths) {
            total += parseInt(width);
        }
        return total;
    }
    exports_1("outerWidth", outerWidth);
    function isSage(email) {
        if (email) {
            return email.trim() === 'sage';
        }
        return false;
    }
    exports_1("isSage", isSage);
    function pad(n) {
        return (n < 10 ? '0' : '') + n;
    }
    exports_1("pad", pad);
    function parseHTML(callSite, ...args) {
        let output = callSite[0];
        for (let i = 1; i <= args.length; i++) {
            output += args[i - 1] + callSite[i];
        }
        return output.replace(/\s*\n\s*/g, '');
    }
    exports_1("parseHTML", parseHTML);
    function parseAttributes(attrs) {
        let html = '';
        for (let key in attrs) {
            html += ' ';
            const val = attrs[key];
            if (val) {
                html += `${key}="${val}"`;
            }
            else {
                html += key;
            }
        }
        return html;
    }
    exports_1("parseAttributes", parseAttributes);
    function commaList(items) {
        let html = '';
        for (let item of items) {
            if (html) {
                html += ', ';
            }
            html += item;
        }
        return html;
    }
    exports_1("commaList", commaList);
    return {
        setters:[],
        execute: function() {
            class SetMap {
                constructor() {
                    this.map = {};
                }
                add(key, item) {
                    if (!(key in this.map)) {
                        this.map[key] = new Set();
                    }
                    this.map[key].add(item);
                }
                remove(key, item) {
                    const set = this.map[key];
                    if (!set) {
                        return;
                    }
                    set.delete(item);
                    if (set.size === 0) {
                        delete this.map[key];
                    }
                }
                forEach(key, fn) {
                    const set = this.map[key];
                    if (!set) {
                        return;
                    }
                    set.forEach(fn);
                }
            }
            exports_1("SetMap", SetMap);
        }
    }
});

//# sourceMappingURL=maps/util.js.map
