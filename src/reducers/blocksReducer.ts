export interface Block {
    id: string | null
    name: string
    context: string // reference to id
    subBlockCount: number
}

type BlockIDOnly = Omit<Block, 'name' | 'context' | 'subBlockCount'>

type Action = {
    type: 'SET_BLOCKS'
    data: Block[]
} | {
    type: 'ADD_BLOCK'
    data: Block
} | {
    type: 'UPDATE_BLOCK'
    data: Block
} | {
    type: 'DELETE_BLOCK'
    data: BlockIDOnly
}

const setBlocks = (blocks: Block[]): Action => {
    return {
        type: 'SET_BLOCKS',
        data: blocks
    }
}

const addBlock = (block: Block): Action => {
    return {
        type: 'ADD_BLOCK',
        data: block
    }
}

const updateBlock = (block: Block): Action => {
    return {
        type: 'UPDATE_BLOCK',
        data: block
    }
}

const deleteBlock = (block: BlockIDOnly): Action => {
    return {
        type: 'DELETE_BLOCK',
        data: block
    }
}

const initialState: Block[] = [
    {
        id: '0',
        name: 'Example Section',
        context: '0',
        subBlockCount: 1
    }
]

const reducer = (state: Block[] = initialState, action: Action): Block[] => {
    switch(action.type) {
        case 'SET_BLOCKS':
            return action.data
        case 'ADD_BLOCK':
            return [
                ...state,
                action.data
            ]
        case 'UPDATE_BLOCK':
            return state.map(block => {
                if (block.id === action.data.id) {
                    return {
                        ...block,
                        name: action.data.name
                    }
                }
                return block
            })
        case 'DELETE_BLOCK':
            return state.filter(block => block.id !== action.data.id)
        default:
            return state
    }
}

export { setBlocks, addBlock, updateBlock, deleteBlock }
export default reducer
