System.register(['./fsm', './state', './lang'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var fsm_1, state_1, lang_1;
    var message, handlers, connSM, socket, attempts, attemptTimer, syncEl, path;
    function send(msg) {
        if (connSM.state !== 3
            && connSM.state !== 2) {
            return;
        }
        if (socket.readyState !== 1) {
            console.warn("Attempting to send while socket closed");
            return;
        }
        if (state_1.debug) {
            console.log('<', msg);
        }
        socket.send(msg);
    }
    exports_1("send", send);
    function onMessage({ data }) {
        if (state_1.debug) {
            console.log('>', data);
        }
        const handler = handlers[data[0]];
        if (handler) {
            handler(data.slice(1));
        }
    }
    function renderStatus(status) {
        syncEl.textContent = lang_1.sync[status];
    }
    function connect() {
        nullSocket();
        if (window.location.protocol == 'file:') {
            console.error("Page downloaded locally. Refusing to sync.");
            return;
        }
        socket = new WebSocket(path);
        socket.binaryType = "arraybuffer";
        socket.onopen = connSM.feeder(1);
        socket.onclose = connSM.feeder(2);
        socket.onmessage = onMessage;
        socket.onerror = onError;
        if (state_1.debug) {
            window.socket = socket;
        }
    }
    function onError(err) {
        console.error(err);
    }
    function nullSocket() {
        if (socket) {
            socket.onclose
                = socket.onmessage
                    = socket.onopen
                        = socket.onclose
                            = socket.onerror
                                = null;
        }
    }
    function resetAttempts() {
        if (attemptTimer) {
            clearTimeout(attemptTimer);
            attemptTimer = 0;
        }
        attempts = 0;
    }
    function start() {
        connSM.feed(0);
    }
    exports_1("start", start);
    function onWindowFocus() {
        if (connSM.state !== 6 && navigator.onLine) {
            connSM.feed(3);
        }
    }
    return {
        setters:[
            function (fsm_1_1) {
                fsm_1 = fsm_1_1;
            },
            function (state_1_1) {
                state_1 = state_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            exports_1("message", message = {});
            exports_1("handlers", handlers = {});
            exports_1("connSM", connSM = new fsm_1.default(0));
            syncEl = document.getElementById('sync');
            connSM.act([0], 0, 1, () => {
                renderStatus(1);
                attempts = 0;
                connect();
            });
            path = (location.protocol === 'https' ? 'wss' : 'ws')
                + `://${location.host}/socket`;
            connSM.act([1, 4], 1, 2, () => {
                renderStatus(1);
                attemptTimer = setTimeout(() => resetAttempts(), 10000);
            });
            connSM.wildAct(2, 5, err => {
                nullSocket();
                if (state_1.debug) {
                    console.error(err);
                }
                if (attemptTimer) {
                    clearTimeout(attemptTimer);
                    attemptTimer = 0;
                }
                renderStatus(0);
                const wait = 500 * Math.pow(1.5, Math.min(Math.floor(++attempts / 2), 12));
                setTimeout(connSM.feeder(3), wait);
            });
            connSM.act([5], 3, 4, () => {
                connect();
                setTimeout(() => {
                    if (connSM.state === 4) {
                        renderStatus(1);
                    }
                }, 100);
            });
            document.addEventListener('visibilitychange', event => {
                if (!event.target.hidden) {
                    onWindowFocus();
                }
            });
            window.addEventListener('online', () => {
                resetAttempts();
                connSM.feed(3);
            });
            window.addEventListener('offline', connSM.feeder(2));
        }
    }
});

//# sourceMappingURL=maps/connection.js.map
