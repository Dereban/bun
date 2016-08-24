System.register(['../state', '../lang', '../util'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var state_1, lang_1, util_1;
    var thumbStyles, thumbExpansions, themes, specs, shorts;
    function toggleHeadStyle(id, css) {
        return toggle => {
            if (!document.getElementById(id)) {
                document.head.append(util_1.parseEl(`<style id="${id}">${css}</style>`));
            }
            document.getElementById(id).disabled = !toggle;
        };
    }
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
            exports_1("thumbStyles", thumbStyles = ['small', 'sharp', 'hide']);
            exports_1("thumbExpansions", thumbExpansions = ['none', 'full', 'height', 'width', 'both']);
            exports_1("themes", themes = [
                'moe', 'gar', 'mawaru', 'moon', 'ashita', 'console', 'tea', 'higan',
                'ocean', 'rave', 'tavern', 'glass'
            ]);
            exports_1("specs", specs = [
                {
                    id: 'lang',
                    type: 4,
                    list: state_1.config.lang.enabled,
                    tab: 0,
                    default: state_1.config.lang.default,
                    noExecOnStart: true,
                    exec() {
                        alert(lang_1.opts.langApplied);
                        location.reload();
                    }
                },
                {
                    id: 'inlineFit',
                    type: 4,
                    list: thumbExpansions,
                    tab: 1,
                    default: 'width'
                },
                {
                    id: 'thumbs',
                    type: 4,
                    list: thumbStyles,
                    tab: 1,
                    default: 'small'
                },
                {
                    id: 'imageHover',
                    default: true,
                    noLoad: state_1.isMobile,
                    tab: 0
                },
                {
                    id: 'webmHover',
                    noLoad: state_1.isMobile,
                    tab: 0
                },
                {
                    id: 'autogif',
                    noLoad: state_1.isMobile,
                    tab: 1
                },
                {
                    id: 'spoilers',
                    tab: 1,
                    default: true
                },
                {
                    id: 'notification',
                    tab: 0,
                    exec(toggle) {
                        if (toggle && Notification.permission !== "granted") {
                            Notification.requestPermission();
                        }
                    }
                },
                {
                    id: 'anonymise',
                    tab: 0
                },
                {
                    id: 'relativeTime',
                    tab: 0,
                    default: false
                },
                {
                    id: 'nowPlaying',
                    noLoad: state_1.isMobile || !state_1.config.radio,
                    tab: 3,
                    default: true,
                    exec(toggle) {
                        if (toggle) {
                        }
                        else {
                        }
                    }
                },
                {
                    id: 'illyaDance',
                    noLoad: state_1.isMobile || !state_1.config.illyaDance,
                    tab: 3
                },
                {
                    id: 'illyaDanceMute',
                    noLoad: state_1.isMobile || !state_1.config.illyaDance,
                    tab: 3
                },
                {
                    id: 'horizontalPosting',
                    tab: 3,
                    exec: toggleHeadStyle('horizontal', 'article,aside{display:inline-block;}')
                },
                {
                    id: 'replyRight',
                    tab: 1,
                    exec: toggleHeadStyle('reply-at-right', 'section>aside{margin: -26px 0 2px auto;}')
                },
                {
                    id: 'theme',
                    type: 4,
                    list: themes,
                    tab: 1,
                    default: state_1.config.defaultCSS,
                    noExecOnStart: true,
                    exec(theme) {
                        if (!theme) {
                            return;
                        }
                        document.getElementById('theme').setAttribute('href', `/ass/css/${theme}.css`);
                    }
                },
                {
                    id: 'userBG',
                    noLoad: state_1.isMobile,
                    tab: 1
                },
                {
                    id: 'userBGImage',
                    noLoad: state_1.isMobile,
                    type: 2,
                    tab: 1,
                    noExecOnStart: true,
                    exec(upload) {
                    }
                },
                {
                    id: 'lastN',
                    type: 1,
                    tab: 0,
                    validation(n) {
                        return Number.isInteger(n) && n <= 500;
                    },
                    default: 100
                },
                {
                    id: 'alwaysLock',
                    tab: 0
                }
            ]);
            shorts = [
                { id: 'newPost', default: 78 },
                { id: 'toggleSpoiler', default: 73 },
                { id: 'textSpoiler', default: 68 },
                { id: 'done', default: 83 },
                { id: 'expandAll', default: 69 },
                { id: 'workMode', default: 66 }
            ];
            for (let short of shorts) {
                short.type = 3;
                short.tab = 4;
                short.noLoad = state_1.isMobile;
                specs.push(short);
            }
        }
    }
});

//# sourceMappingURL=../maps/options/specs.js.map
