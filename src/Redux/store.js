import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'



export const store = createStore(
    () => 'sample root reducer',
    composeWithDevTools(applyMiddleware())
)