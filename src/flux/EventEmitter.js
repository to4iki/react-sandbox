'use strict';

/**
 * Simple EventEmitter(Dispatcher)
 */
export default class EventEmitter {

    constructor() {
        this._handlers = {};
    }

    on(type, handler) {
        if (typeof this._handlers[type] === 'undefined') {
            this._handlers[type] = [];
        }

        this._handlers[type].push(handler);
    }

    emit(type, data) {
        let handlers = this._handlers[type] || [];
        handlers.forEach((h) => h.call(this, data));
    }

    off(type, handler) {
        let handlers = this._handlers[type] || [];
        for (var i = 0; i < handlers.length; i++) {
            let ownHandler = handlers[i];
            if (ownHandler === handler) {
                handlers.splice(i, 1);
            }
        }
    }
}
