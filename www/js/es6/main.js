System.register(['./options', './state', './defer', './connection', './db'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments)).next());
        });
    };
    var options, state_1, defer_1, connection_1, state_2, db_1;
    var o, cookieVersion;
    function start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.open();
            yield state_2.loadFromDB();
            connection_1.start();
            defer_1.exec();
            state_1.displayLoading(false);
        });
    }
    return {
        setters:[
            function (options_1) {
                options = options_1;
            },
            function (state_1_1) {
                state_1 = state_1_1;
                state_2 = state_1_1;
            },
            function (defer_1_1) {
                defer_1 = defer_1_1;
            },
            function (connection_1_1) {
                connection_1 = connection_1_1;
            },
            function (db_1_1) {
                db_1 = db_1_1;
            }],
        execute: function() {
            o = options;
            cookieVersion = 4;
            if (localStorage.getItem("cookieVersion") != cookieVersion) {
                for (let cookie of document.cookie.split(";")) {
                    const eqPos = cookie.indexOf("="), name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                }
                localStorage.setItem("cookieVersion", cookieVersion.toString());
            }
            start();
        }
    }
});

//# sourceMappingURL=maps/main.js.map
