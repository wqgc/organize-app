export interface SubBlock {
    id: string | null
    name: string
    block: string // reference to id
    contents: string
    isStriked: boolean
}

type SubBlockIDOnly = Omit<SubBlock, 'name' | 'block' | 'contents' | 'isStriked'>

type Action = {
    type: 'SET_SUBBLOCKS'
    data: SubBlock[]
} | {
    type: 'ADD_SUBBLOCK'
    data: SubBlock
} | {
    type: 'UPDATE_SUBBLOCK'
    data: SubBlock
} | {
    type: 'DELETE_SUBBLOCK'
    data: SubBlockIDOnly
}

const setSubBlocks = (subBlocks: SubBlock[]): Action => {
    return {
        type: 'SET_SUBBLOCKS',
        data: subBlocks
    }
}

const addSubBlock = (subBlock: SubBlock): Action => {
    return {
        type: 'ADD_SUBBLOCK',
        data: subBlock
    }
}

const updateSubBlock = (subBlock: SubBlock): Action => {
    return {
        type: 'UPDATE_SUBBLOCK',
        data: subBlock
    }
}

const deleteSubBlock = (subBlock: SubBlockIDOnly): Action => {
    return {
        type: 'DELETE_SUBBLOCK',
        data: subBlock
    }
}

const initialState: SubBlock[] = [
    {
        id: '0',
        name: 'Example Item',
        block: '0',
        contents: `Here, you can write notes for an item.
            \n[You can also add links that open to a new page](https://example.com) 
            \nClick on an item title to strike it out, and click the edit or plus buttons to modify or add new content respectively.`,
        isStriked: false
    }
]

const reducer = (state: SubBlock[] = initialState, action: Action): SubBlock[] => {
    switch(action.type) {
        case 'SET_SUBBLOCKS':
            return action.data
        case 'ADD_SUBBLOCK':
            return [
                ...state,
                action.data
            ]
        case 'UPDATE_SUBBLOCK':
            return state.map(subBlock => {
                if (subBlock.id === action.data.id) {
                    return {
                        ...subBlock,
                        name: action.data.name,
                        contents: action.data.contents,
                        isStriked: action.data.isStriked
                    }
                }
                return subBlock
            })
        case 'DELETE_SUBBLOCK':
            return state.filter(subBlock => subBlock.id !== action.data.id)
        default:
            return state
    }
}

export { setSubBlocks, addSubBlock, updateSubBlock, deleteSubBlock }
export default reducer
