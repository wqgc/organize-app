export interface Context {
    id: string | null
    name: string
    blockCount: number
    subBlockCount: number
}

type ContextIDOnly = Omit<Context, 'name' | 'blockCount' | 'subBlockCount'>

type Action = {
    type: 'SET_CONTEXTS'
    data: Context[] 
} | {
    type: 'ADD_CONTEXT'
    data: Context
} | {
    type: 'UPDATE_CONTEXT'
    data: Context
} | {
    type: 'DELETE_CONTEXT'
    data: ContextIDOnly
}

const setContexts = (contexts: Context[]): Action => {
    return {
        type: 'SET_CONTEXTS',
        data: contexts
    }
}

const addContext = (context: Context): Action => {
    return {
        type: 'ADD_CONTEXT',
        data: context
    }
}

const updateContext = (context: Context): Action => {
    return {
        type: 'UPDATE_CONTEXT',
        data: context
    }
}

const deleteContext = (context: ContextIDOnly): Action => {
    return {
        type: 'DELETE_CONTEXT',
        data: context
    }
}

const initialState: Context[] = [
    {
        id: '0',
        name: 'Default Context',
        blockCount: 1,
        subBlockCount: 1
    }
]

const reducer = (state: Context[] = initialState, action: Action): Context[] => {
    switch(action.type) {
        case 'SET_CONTEXTS':
            return action.data
        case 'ADD_CONTEXT':
            return [
                ...state,
                action.data
            ]
        case 'UPDATE_CONTEXT':
            return state.map(context => {
                if (context.id === action.data.id) {
                    return {
                        ...context,
                        name: action.data.name
                    }
                }
                return context
            })
        case 'DELETE_CONTEXT':
            return state.filter(context => context.id !== action.data.id)
        default:
            return state
    }
}

export { setContexts, addContext, updateContext, deleteContext }
export default reducer
