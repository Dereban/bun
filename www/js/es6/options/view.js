System.register(['../modal', './render', '../options', 'underscore', '../util', '../lang'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var modal_1, render_1, options_1, underscore_1, util_1, lang_1;
    var OptionsPanel;
    return {
        setters:[
            function (modal_1_1) {
                modal_1 = modal_1_1;
            },
            function (render_1_1) {
                render_1 = render_1_1;
            },
            function (options_1_1) {
                options_1 = options_1_1;
            },
            function (underscore_1_1) {
                underscore_1 = underscore_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            class OptionsPanel extends modal_1.BannerModal {
                constructor() {
                    super({ id: 'options-panel' });
                    this.onClick({
                        '.tab_link': e => this.switchTab(e),
                        '#export': () => this.exportConfigs(),
                        '#import': e => this.importConfigs(e),
                        '#hidden': () => this.clearHidden()
                    });
                    this.onAll('change', e => this.applyChange(e));
                }
                render() {
                    this.el.innerHTML = render_1.default();
                    this.assignValues();
                    this.$hidden = this.el.query('#hidden');
                }
                assignValues() {
                    for (let id in options_1.models) {
                        const model = options_1.models[id], el = this.el.query('#' + id), val = model.get();
                        switch (model.spec.type) {
                            case 0:
                                el.checked = val;
                                break;
                            case 1:
                            case 4:
                                el.value = val;
                                break;
                            case 3:
                                el.value = String.fromCharCode(val).toUpperCase();
                                break;
                        }
                    }
                }
                applyChange(event) {
                    const el = event.target, id = el.getAttribute('id'), model = options_1.models[id];
                    let val;
                    switch (model.spec.type) {
                        case 0:
                            val = el.checked;
                            break;
                        case 1:
                            val = parseInt(el.value);
                            break;
                        case 4:
                            val = el.value;
                            break;
                        case 3:
                            val = el.value.toUpperCase().charCodeAt(0);
                            break;
                    }
                    if (!model.validate(val)) {
                        el.value = '';
                    }
                    else {
                        options_1.default.set(id, val);
                    }
                }
                switchTab(event) {
                    event.preventDefault();
                    const el = event.target;
                    underscore_1.each(this.el.children, el => el.query('.tab_sel').classList.remove('tab_sel'));
                    el.classList.add('tab_sel');
                    underscore_1.find(this.el.lastChild.children, li => li.classList.contains(el.getAttribute('data-content')))
                        .classList.add('tab_sel');
                }
                exportConfigs() {
                    const a = document.getElementById('export');
                    const blob = new Blob([JSON.stringify(localStorage)], {
                        type: 'octet/stream'
                    });
                    a.setAttribute('href', window.URL.createObjectURL(blob));
                    a.setAttribute('download', 'meguca-config.json');
                }
                importConfigs(event) {
                    event.preventDefault();
                    const el = document.query('#importSettings');
                    el.click();
                    util_1.onceAll(el, 'change', () => {
                        const reader = new FileReader();
                        reader.readAsText(el.files[0]);
                        reader.onload = event => {
                            event;
                            let json;
                            try {
                                json = JSON.parse(event.target.result);
                            }
                            catch (err) {
                                alert(lang_1.opts.importConfig.corrupt);
                                return;
                            }
                            localStorage.clear();
                            for (let key in json) {
                                localStorage.setItem(key, json[key]);
                            }
                            alert(lang_1.opts.importConfig.done);
                            location.reload();
                        };
                    });
                }
                renderHidden(count) {
                    const el = this.$hidden;
                    el.textContent = el.textContent.replace(/\d+$/, count.toString());
                }
                clearHidden() {
                    this.renderHidden(0);
                }
            }
            exports_1("default", OptionsPanel);
            (function () {
                if (localStorage.getItem('optionsSeen')) {
                    return;
                }
                const el = document.query('#options');
                el.style.opacity = '1';
                let out = true, clicked;
                el.addEventListener("click", () => {
                    clicked = true;
                    localStorage.setItem('optionsSeen', '1');
                });
                tick();
                function tick() {
                    if (clicked) {
                        el.style.opacity = '1';
                        return;
                    }
                    el.style.opacity = (+el.style.opacity + (out ? -0.02 : 0.02)).toString();
                    const now = +el.style.opacity;
                    if ((out && now <= 0) || (!out && now >= 1)) {
                        out = !out;
                    }
                    requestAnimationFrame(tick);
                }
            })();
        }
    }
});

//# sourceMappingURL=../maps/options/view.js.map
