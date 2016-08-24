System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var dbVersion, db;
    function open() {
        return new Promise((resolve, reject) => {
            const r = indexedDB.open('meguca', dbVersion);
            r.onerror = () => reject(r.error);
            r.onsuccess = () => {
                exports_1("db", db = r.result);
                db.onerror = err => {
                    throw err;
                };
                resolve();
            };
            r.onupgradeneeded = event => {
                const db = r.result;
                const posts = db.createObjectStore('posts', { keyPath: 'id' });
                posts.add({ id: 'mine' });
                posts.add({ id: 'hidden' });
                db.createObjectStore('threads', { keyPath: 'id' });
                db.createObjectStore('boards', { keyPath: 'id' });
            };
        });
    }
    exports_1("open", open);
    return {
        setters:[],
        execute: function() {
            dbVersion = 2;
            IDBRequest.prototype.exec = function () {
                return new Promise((resolve, reject) => {
                    this.onerror = () => reject(this.error);
                    this.onsuccess = () => resolve(this.result);
                });
            };
        }
    }
});

//# sourceMappingURL=maps/db.js.map
