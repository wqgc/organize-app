import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import iconColors from '../../../iconColors'
import style from './ManageContexts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Context, addContext, deleteContext } from '../../../reducers/contextsReducer'
import { deleteBlock } from '../../../reducers/blocksReducer'
import { deleteSubBlock } from '../../../reducers/subBlocksReducer'
import { addBlock } from '../../../reducers/blocksReducer'
import { addSubBlock } from '../../../reducers/subBlocksReducer'
import { updateMode } from '../../../reducers/modeReducer'
import DeletionModal from '../DeletionModal'
import ContextItem from './ContextItem'
import { useCustomSelector } from '../../../store'
import { v4 as uuidv4 } from 'uuid'

const ManageContexts = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [focusedContext, setFocusedContext] = useState<Context | null>(null)
    const dispatch = useDispatch()
    const { mode, contexts, blocks, subBlocks } = useCustomSelector(state => state)

    useEffect(() => {
        document.title = 'Organize - Manage Contexts'
    }, [])

    const handleAddContext = (): void => {
        const newContextId = uuidv4()
        const newBlockId = uuidv4()

        dispatch(addContext({
            id: newContextId,
            name: 'New Context',
            blockCount: 1,
            subBlockCount: 1
        }))
        dispatch(addBlock({
            id: newBlockId,
            name: 'New Section',
            context: newContextId,
            subBlockCount: 1
        }))
        dispatch(addSubBlock({
            id: uuidv4(),
            name: 'New Item',
            block: newBlockId,
            contents: '',
            isStriked: false
        }))
    }

    const handleDeleteContext = (id: string | null): void => {
        // Clear blocks and sub blocks from state before deleting context
        if (id) {
            blocks.forEach(b => {
                if (b.context === id) {
                    subBlocks.forEach(sb => {
                        if (sb.block === b.id) {
                            dispatch(deleteSubBlock({ id: sb.id }))
                        }
                    })
                    dispatch(deleteBlock({ id: b.id}))
                }
            })
            // Check if we're deleting our current context, update context if so
            if (mode.currentContext === id) {
                const newCurrentContext = contexts.find(c => c.id !== id)
                if (newCurrentContext) {
                    dispatch(updateMode({ ...mode, currentContext: newCurrentContext.id as string }))
                }
            }
            dispatch(deleteContext({ id }))
        }
        setModalIsOpen(false)
    }

    const handleOpenDeletionModal = (context: Context): void => {
        // Set the focused context so the modal knows which to delete
        setFocusedContext(context)
        setModalIsOpen(true)
    }

    const darkMode = mode.currentTheme === 1
    const iconThemeColor = darkMode ? iconColors.blue['200'] : iconColors.blue['100']

    return (
        <section>
            { focusedContext && 
                <DeletionModal
                    type='CONTEXT'
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                    handleDelete={() => handleDeleteContext(focusedContext.id)}
                    name={focusedContext.name} /> }
            <h1>Manage Contexts</h1>
            <div id={style.container} className={ darkMode ?  style['container-dark'] : style.container }>
                { contexts.map((c, i) => (
                    <ContextItem 
                        key={i} 
                        context={c}
                        index={i}
                        darkMode={darkMode} 
                        iconThemeColor={iconThemeColor}
                        handleOpenDeletionModal={handleOpenDeletionModal} />)) }
            </div>
            <button onClick={handleAddContext} className={style['new-context']}>
                <FontAwesomeIcon icon={faPlus} color={iconThemeColor} />
                {' '} New Context
            </button>
        </section>
    )
}

export default ManageContexts
