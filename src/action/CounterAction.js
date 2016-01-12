'use strict';

import AppDispatcher from './../AppDispatcher';
import CounterStore from './../store/CounterStore';

export default class CounterAction {

    plusCounter() {
        AppDispatcher.dispatch({
            actionType: CounterStore.COUNTER_CONST.UPDATE_COUNTER,
            count: 1
        });
    }

    minusCounter() {
        AppDispatcher.dispatch({
            actionType: CounterStore.COUNTER_CONST.UPDATE_COUNTER,
            count: -1
        });
    }
}
