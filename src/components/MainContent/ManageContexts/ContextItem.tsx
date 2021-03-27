import React, { useState, useRef, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import style from './ManageContexts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faCheck, faTimes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Context, updateContext, setContexts } from '../../../reducers/contextsReducer'
import { useCustomSelector } from '../../../store'
import AlertModal from '../AlertModal'
import { swapContexts } from '../../../utils'

interface Props {
    context: Context
    index: number
    darkMode: boolean
    iconThemeColor: string
    handleOpenDeletionModal: (context: Context) => void
}

const ContextItem = ({ context, index, darkMode, iconThemeColor, handleOpenDeletionModal }: Props) => {
    const [isEditing, setIsEditing] = useState(false)
    const [contextErrorType, setContextErrorType] = useState('')
    const [contextNameValue, setContextNameValue] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const contextNameInput = useRef<HTMLInputElement>(null)

    const contexts = useCustomSelector(state => state.contexts)
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        if (contextNameInput.current !== null && isEditing) {
            contextNameInput.current.focus()
        }
    }, [isEditing])

    const handleEdit = (): void => {
        setIsEditing(true)
        setContextNameValue(context.name)
    }

    const handleSubmit = (): void => {
        let error = ''

        if (contextNameValue.length < 1) {
            error = 'MIN_CONTEXT_NAME_LENGTH'
        } else if (contextNameValue.length > 28) {
            error = 'MAX_CONTEXT_NAME_LENGTH'
        }

        if (error) {
            setContextErrorType(error)
            setModalIsOpen(true)
        } else {
            setIsEditing(false)
            dispatch(updateContext({ ...context, name: contextNameValue }))
        }
    }

    const handleReorder = (dir: 'UP' | 'DOWN'): void => {
        const newContexts = swapContexts(contexts, index, dir)
        dispatch(setContexts(newContexts))
    }

    return (
        <>
            <AlertModal
                type={contextErrorType}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen} />
            <div className={`${style.row} ${darkMode && style['row-dark']}`}>
                { isEditing ?
                    <input
                        className={`${style['edit-mode']} ${darkMode && style['edit-mode-dark']} ${darkMode ? 'input-dark' : ''}`}
                        name='context name'
                        title='Context Name'
                        ref={contextNameInput}
                        value={contextNameValue}
                        onChange={({target}) => setContextNameValue(target.value)}
                        placeholder='Context Name'
                        maxLength={28} />
                    : <span className={style['context-name']}>{context.name}</span> }
                <span className={style['button-group']}>
                    { isEditing ?
                        <>
                            <button name='save changes' title='Save changes' className={style['icon-item']} onClick={handleSubmit}>
                                <FontAwesomeIcon icon={faCheck} color={iconThemeColor} size='lg' />
                            </button>
                            <button name='cancel' title='Cancel' className={style['icon-item']} onClick={() => setIsEditing(false)}>
                                <FontAwesomeIcon icon={faTimes} color={iconThemeColor} size='lg' />
                            </button>
                        </>
                        :<>
                            { (index > 0 || index < contexts.length - 1) && 
                                <>
                                    { index > 0 ? 
                                        <button name='move context up' title='Context up' onClick={() => handleReorder('UP')}>
                                            <FontAwesomeIcon icon={faChevronUp} color={iconThemeColor} size='lg' />
                                        </button> : 
                                        <button name='move context up' className='disabled' disabled>
                                            <FontAwesomeIcon icon={faChevronUp} color={iconThemeColor} size='lg' />
                                        </button> }
                                    { index < contexts.length - 1 ?
                                        <button name='move context down' title='Context down' onClick={() => handleReorder('DOWN')}>
                                            <FontAwesomeIcon icon={faChevronDown} color={iconThemeColor} size='lg' />
                                        </button> : 
                                        <button name='move context down' className='disabled' disabled>
                                            <FontAwesomeIcon icon={faChevronDown} color={iconThemeColor} size='lg' />
                                        </button> }
                                </> }
                            <button name='edit context item' title='Edit context item' onClick={handleEdit}>
                                <FontAwesomeIcon icon={faEdit} color={iconThemeColor} size='lg' />
                            </button>
                            { contexts.length > 1 &&
                            <button name='delete context item' title='Delete context item' onClick={() => handleOpenDeletionModal(context)}>
                                <FontAwesomeIcon icon={faTrash} color={iconThemeColor} size='lg' />
                            </button> }
                        </> }
                </span>
            </div>
        </>
    )
}

export default ContextItem
