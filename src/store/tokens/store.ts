import { createStore } from 'redux'
import { tokensReducer } from './tokenReducer'

const store = createStore(tokensReducer)

export default store