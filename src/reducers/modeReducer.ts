export interface Mode {
    showEditIcons: boolean
    currentContext: string
    currentTheme: number
}

type Action = {
    type: 'UPDATE_MODE'
    data: Mode
}

const updateMode = (settings: Mode): Action => {
    return {
        type: 'UPDATE_MODE',
        data: settings
    }
}

const initialState: Mode = {
    showEditIcons: true,
    currentContext: '0',
    currentTheme: 0
}

const reducer = (state: Mode = initialState, action: Action): Mode => {
    switch(action.type) {
        case 'UPDATE_MODE':
            return action.data
        default:
            return state
    }
}

export { updateMode }
export default reducer
