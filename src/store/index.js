
import { createStore, combineReducers } from 'redux'


const goalsReducer = function (state = {}, action) {
    let { type } = action;
    // INCREMENT , DECREMENT
    switch (type) {
        case 'INCREMENT': {
            let { value } = action
            return { count: state.count + (2*value) } // New State
        }
        case 'DECREMENT': {
            let { value } = action
            return { count: state.count + value } // New State
        }
        default:
            return state
    }
}

const goalsReducer2 = function (state = {}, action) {
    let { type } = action;
    // INCREMENT , DECREMENT
    switch (type) {
        case 'INCREMENT': {
            let { value } = action
            return { count: state.count + (3*value) } // New State
        }
        case 'DECREMENT': {
            let { value } = action
            return { count: state.count + value } // New State
        }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    goals: goalsReducer,
    kicks: goalsReducer2
})//I think this brings about a new state

const initialState = {
    goals: {
        count: 10
    },
    kicks: {
        count:15
    }
}

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;