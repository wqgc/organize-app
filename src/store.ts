import { createStore, combineReducers } from 'redux'
import { createSelectorHook } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import modeReducer, { Mode } from './reducers/modeReducer'
import contextsReducer, { Context } from './reducers/contextsReducer'
import blocksReducer, { Block } from './reducers/blocksReducer'
import subBlocksReducer, { SubBlock } from './reducers/subBlocksReducer'

export interface RootState {
    mode: Mode
    contexts: Context[]
    blocks: Block[]
    subBlocks: SubBlock[]
}

const reducer = combineReducers({
    mode: modeReducer,
    contexts: contextsReducer,
    blocks: blocksReducer,
    subBlocks: subBlocksReducer
})

const store = createStore(reducer, composeWithDevTools())

// A custom selector is used purely for the sake of typing with TypeScript
const useCustomSelector = createSelectorHook<RootState>()

export { useCustomSelector }
export default store
