import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


const user = {
    name: 'fred',
    email: 'fred@gmail.com',
    phone: '0782547859'
}


export const store = createStore(
    () => user,
    composeWithDevTools(applyMiddleware())
)