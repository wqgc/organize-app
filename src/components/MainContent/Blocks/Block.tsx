import React, { useState, useRef, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useCustomSelector } from '../../../store'
import { Block as BlockData, updateBlock, addBlock, setBlocks } from '../../../reducers/blocksReducer'
import { addSubBlock } from '../../../reducers/subBlocksReducer'
import { updateContext } from '../../../reducers/contextsReducer'
import SubBlock from './SubBlock'
import style from '../MainContent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faCheck, faTimes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import iconColors from '../../../iconColors'
import { v4 as uuidv4 } from 'uuid'
import { swapItems } from '../../../utils'

const Block = ({ block, isLast }: { block: BlockData, isLast: boolean }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [nameValue, setNameValue] = useState('')
    const nameInput = useRef<HTMLInputElement>(null)
    const { blocks, subBlocks, contexts, mode } = useCustomSelector(state => state)
    const currentContextBlocks = blocks.filter(b => b.context === mode.currentContext)
    const index = currentContextBlocks.findIndex(b => b.id === block.id)
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        if (nameInput.current !== null && isEditing) {
            nameInput.current.focus()
        }
    }, [isEditing])

    const handleEdit = (): void => {
        setIsEditing(true)
        setNameValue(block.name)
    }

    const handleSubmit = (): void => {
        setIsEditing(false)
        dispatch(updateBlock({ ...block, name: nameValue }))
    }

    const handleAddBlock = (): void => {
        const newBlockId = uuidv4()
        const context = contexts.find(c => c.id === block.context)
        if (context) {
            context.blockCount++
            context.subBlockCount++
            dispatch(updateContext(context))
            dispatch(addBlock({
                id: newBlockId,
                name: 'New Section',
                context: block.context,
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
    }

    const handleReorder = (dir: 'UP' | 'DOWN'): void => {
        const newBlocks = swapItems(currentContextBlocks, blocks, index, dir)
        dispatch(setBlocks(newBlocks))
    }

    const darkMode = mode.currentTheme === 1
    const iconThemeColor = darkMode ? iconColors.blue['300'] : iconColors.gray['100']

    return (
        <section>
            { isEditing ?
                <h1 className='fullwidth'>
                    <input 
                        className={`${style['edit-mode']} ${darkMode && style['edit-mode-dark']} h1-input ${darkMode ? 'input-dark' : ''}`}
                        name='section name'
                        title='Section name'
                        ref={nameInput}
                        value={nameValue} 
                        onChange={({target}) => setNameValue(target.value)}  
                        placeholder='Title' />
                </h1>
                : <h1>{block.name}</h1> }
            { mode.showEditIcons &&
                <span className={style['icon-group']}>
                    { isEditing ?
                        <>
                            <button name='save changes' title='Save changes' className={style['icon-item']} 
                                onClick={handleSubmit}>
                                <FontAwesomeIcon icon={faCheck} color={iconThemeColor} size='lg' />
                            </button>
                            <button name='cancel' title='Cancel' className={style['icon-item']} 
                                onClick={() => setIsEditing(false)}>
                                <FontAwesomeIcon icon={faTimes} color={iconThemeColor} size='lg' />
                            </button>
                        </>
                        :<>
                            { (index > 0 || index < currentContextBlocks.length - 1) && 
                                <>
                                    { index > 0 ? 
                                    <button name='move section up' title='Section up' className={`${style['icon-item']} ${style['icon-chevron']}`} 
                                        onClick={() => handleReorder('UP')}>
                                        <FontAwesomeIcon icon={faChevronUp} color={iconThemeColor} size='lg' />
                                    </button> :
                                    <button name='move section up' className={`${style['icon-item']} ${style['icon-chevron']} disabled`} disabled>
                                        <FontAwesomeIcon icon={faChevronUp} color={iconThemeColor} size='lg' />
                                    </button> }
                                { index < currentContextBlocks.length - 1 ?
                                    <button name='move section down' title='Section down' className={`${style['icon-item']} ${style['icon-chevron']}`} 
                                        onClick={() => handleReorder('DOWN')}>
                                        <FontAwesomeIcon icon={faChevronDown} color={iconThemeColor} size='lg' />
                                    </button> :
                                    <button name='move section down' className={`${style['icon-item']} ${style['icon-chevron']} disabled`} disabled>
                                        <FontAwesomeIcon icon={faChevronDown} color={iconThemeColor} size='lg' />
                                    </button> }
                                </> }
                            <button name='edit section name' title='Edit section name' className={style['icon-item']} 
                                onClick={handleEdit}>
                                <FontAwesomeIcon icon={faEdit} color={iconThemeColor} size='lg' />
                            </button>
                            { isLast &&
                                <button name='new section' title='New section' className={style['icon-item']} 
                                    onClick={handleAddBlock}>
                                    <FontAwesomeIcon icon={faPlus} color={iconThemeColor} size='lg' />
                                </button> }
                        </> }
                </span> }
            { subBlocks
                .filter(sub => sub.block === block.id)
                .map((sub, i) => <SubBlock 
                    key={sub.id} 
                    subBlock={sub}
                    isLast={i === block.subBlockCount - 1} />) }
        </section>
    )
}

export default Block
