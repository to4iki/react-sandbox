'use strict';

import * as Events from 'events';
import AppDispatcher from './../AppDispatcher';

// Store
// https://gist.github.com/SanderLi/e4a89de3ae347b1d4d76
let SINGLETON = Symbol();
let SINGLETON_ENFORCER = Symbol();

export default class CounterStore extends Events.EventEmitter {

    static get COUNTER_CONST() {
        return {
            UPDATE_COUNTER: 'UPDATE_COUNTER'
        };
    };

    constructor(enforcer) {
        super();

        if (enforcer !== SINGLETON_ENFORCER) {
            throw "Cannot construct singleton";
        }

        AppDispatcher.register(this._onAction.bind(this));

        this.counter = 0;

        this.CHANGE_EVENT = 'change';
    }

    /**
     * Singleton instance
     * @return CounterStore
     */
    static get instance() {
        if (!this[SINGLETON]) {
            this[SINGLETON] = new CounterStore(SINGLETON_ENFORCER);
        }
        return this[SINGLETON];
    }

    _onAction(action) {
        switch(action.actionType) {
            case CounterStore.COUNTER_CONST.UPDATE_COUNTER:
                this.onUpdateCounter(action.count);
                this.emitChange();
                break;
            default:
            // no op
        }
    }

    emitChange() {
        this.emit(this.CHANGE_EVENT);
    }

    updateChangeListener(callback) {
        this.on(this.CHANGE_EVENT, callback);
    }

    getCount() {
        return { count: this.counter };
    }

    onUpdateCounter(count) {
        this.counter += count;
    }
}
