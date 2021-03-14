import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'


const user = {
    name: 'fred',
    email: 'fred@gmail.com',
    phone: '0782547859'
}
// returns state and modifies state
function userReducer(state = user, action) {
    switch (action.type) {
        case 'GET_NAME':
            return state.name
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    user: userReducer
})


export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware())
)