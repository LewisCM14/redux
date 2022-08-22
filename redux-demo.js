const redux = require('redux');  // import redux with node.js

/**
 * initialize the reducer function
 * receives the current state and desired action as arguments.
 * returns the counter variable as the previous stored state plus one
 * counter state defaults to 0
 */

const counterReducer = (state = { counter: 0 }, action) => {
    return {
        counter: state.counter + 1
    };
};

// call the createStore method in redux package
// points at the counterReducer function
const store = redux.createStore(counterReducer);

// console.log(store.getState());  // logs initial state of store object

// the subscriber function to 'store'
const counterSubscriber = () => {
    const latestState = store.getState(); // getState method provided by redux.createStore
    console.log(latestState);  // logs the latest state snapshot
};

store.subscribe(counterSubscriber);  // whenever store state changes call the counterSubscriber function

store.dispatch({ type: 'increment' });  // dispatch an action on the store object