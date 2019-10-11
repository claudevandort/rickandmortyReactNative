import { createStore } from 'redux'
import reducer from './reducer'

const initialState = {
    characters: [],
    episodes: []
}

const store = createStore(reducer, initialState)

export default store