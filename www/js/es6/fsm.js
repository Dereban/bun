System.register(['./util'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var util_1;
    var FSM;
    return {
        setters:[
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            class FSM {
                constructor(start) {
                    this.stateHandlers = new util_1.SetMap();
                    this.transitions = {};
                    this.transitionHandlers = new util_1.SetMap();
                    this.wilds = {};
                    this.state = start;
                }
                on(state, handler) {
                    this.stateHandlers.add(state, handler);
                }
                act(starts, event, result, handler) {
                    for (let start of starts) {
                        const trans = this.transitionString(start, event);
                        this.transitions[trans] = result;
                        if (handler) {
                            this.transitionHandlers.add(trans, handler);
                        }
                    }
                }
                wildAct(event, result, handler) {
                    this.wilds[event] = result;
                    if (handler) {
                        this.on(result, handler);
                    }
                }
                transitionString(start, event) {
                    return `${start}+${event}`;
                }
                feed(event, arg) {
                    let result;
                    if (event in this.wilds) {
                        result = this.wilds[event];
                    }
                    else {
                        const trans = this.transitionString(this.state, event);
                        this.transitionHandlers.forEach(trans, fn => fn(arg));
                        result = this.transitions[trans];
                    }
                    this.stateHandlers.forEach(result, fn => fn(arg));
                    this.state = result;
                }
                feeder(event) {
                    return arg => this.feed(event, arg);
                }
            }
            exports_1("default", FSM);
        }
    }
});

//# sourceMappingURL=maps/fsm.js.map
