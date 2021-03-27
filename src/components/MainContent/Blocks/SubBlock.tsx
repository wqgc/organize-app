import React, { useState, useRef, useLayoutEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useCustomSelector } from '../../../store'
import { updateContext } from '../../../reducers/contextsReducer'
import { SubBlock as SubBlockData,
    updateSubBlock, addSubBlock, deleteSubBlock, setSubBlocks } from '../../../reducers/subBlocksReducer'
import { updateBlock, deleteBlock } from '../../../reducers/blocksReducer'
import TextareaAutosize from 'react-textarea-autosize'
import EditingBar from './EditingBar/EditingBar'
import style from '../MainContent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import iconColors from '../../../iconColors'
import { v4 as uuidv4 } from 'uuid'
import { swapItems } from '../../../utils'


const SubBlock = ({subBlock, isLast}: { subBlock: SubBlockData, isLast: boolean }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [subNameValue, setSubNameValue] = useState('')
    const [contentsValue, setContentsValue] = useState(subBlock.contents)
    const [parsedContents, setParsedContents] = useState(subBlock.contents)
    const subNameInput = useRef<HTMLInputElement>(null)
    const { contexts, blocks, subBlocks, mode } = useCustomSelector(state => state)
    const currentBlockSubBlocks = subBlocks.filter(sb => sb.block === subBlock.block)
    const index = currentBlockSubBlocks.findIndex(sb => sb.id === subBlock.id)
    const dispatch = useDispatch()

    const darkMode = mode.currentTheme === 1
    const iconThemeColor = darkMode ? iconColors.blue['300'] : iconColors.gray['100']

    useLayoutEffect(() => {
        if (subNameInput.current !== null && isEditing) {
            subNameInput.current.focus()
        }
    }, [isEditing])

    const parseUrlFromContents = useCallback((contents: string) => {
        // Match the pattern: [title](https://example.com)
        const urlMarkdownRegex = /^\[([\w\s\d\W]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/
        // Split at spaces and new lines
        let content = contents.split(/[\s]+/)

        // Remerge elements between [] brackets
        const contentArr = []
        let titleArr = []
        let addingToTitle = false

        for (let i = 0; i < content.length; i++) {
            // Handle no spaces
            if (content[i].startsWith('[') && content[i].endsWith(')')) {
                contentArr.push(content[i])
                continue
            }

            // Handle spaces
            if (content[i].startsWith('[')) {
                addingToTitle = true
                titleArr.push(content[i])
                continue
            } else if (content[i].endsWith(')')) {
                addingToTitle = false
                titleArr.push(content[i])
                contentArr.push(titleArr.join(' '))
                titleArr = []
                continue
            }

            if (addingToTitle) {
                titleArr.push(content[i])
            } else {
                contentArr.push(content[i])
            }
        }

        // Format and replace links
        let toReplace: string[][] = []

        contentArr.forEach(c => {
            if (urlMarkdownRegex.test(c)) {
                const strArr = c.split('')
                let title = [], url = []
                let modifyingTitle = true

                for (let i = 1; i < strArr.length - 1; i++) {
                    if (strArr[i] === ']') {
                        modifyingTitle = false
                        i++
                        continue
                    }

                    if (modifyingTitle) {
                        title.push(strArr[i])
                    } else {
                        url.push(strArr[i])
                    }
                }
                toReplace.push([c, `<a href='${url.join('')}' target='_blank' ${darkMode && 'class="a-dark"'} rel='noreferrer noopener'>${title.join('')}</a>`])
            }
        })

        toReplace.forEach(el => {
            contents = contents.replace(el[0], el[1])
        })

        setParsedContents(contents)
    }, [darkMode])

    useLayoutEffect(() => {
        parseUrlFromContents(subBlock.contents)
    }, [subBlock.contents, mode, parseUrlFromContents])

    const handleEdit = (): void => {
        setIsEditing(true)
        setSubNameValue(subBlock.name)
        setContentsValue(subBlock.contents)
    }

    const handleSubmit = (): void => {
        setIsEditing(false)
        dispatch(updateSubBlock({
            ...subBlock,
            name: subNameValue,
            contents: contentsValue,
        }))
        parseUrlFromContents(contentsValue)
    }

    const handleAddSubBlock = (): void => {
        const block = blocks.find(b => b.id === subBlock.block)
        const context = contexts.find(c => c.id === block?.context)
        if (block && context) {
            context.subBlockCount++
            block.subBlockCount++
            dispatch(updateContext(context))
            dispatch(updateBlock(block))
            dispatch(addSubBlock({
                id: uuidv4(),
                name: 'New Item',
                block: subBlock.block,
                contents: '',
                isStriked: false
            }))
        }
    }

    const handleDeleteSubBlock = (): void => {
        const block = blocks.find(b => b.id === subBlock.block)
        const context = contexts.find(c => c.id === block?.context)

        if (block && context) {
            block.subBlockCount--
            dispatch(deleteSubBlock({ id: subBlock.id }))

            if (block.subBlockCount === 0) {
                context.blockCount--
                dispatch(deleteBlock({ id: block.id }))
            } else {
                dispatch(updateBlock(block))
            }

            context.subBlockCount--
            dispatch(updateContext(context))
        }
    }

    const handleToggleStriked = (): void => {
        dispatch(updateSubBlock({ ...subBlock, isStriked: !subBlock.isStriked }))
    }

    const handleReorder = (dir: 'UP' | 'DOWN'): void => {
        const newSubBlocks = swapItems(currentBlockSubBlocks, subBlocks, index, dir)
        dispatch(setSubBlocks(newSubBlocks))
    }

    return (
        <section>
            { isEditing ?
                <>
                    <h2 className='fullwidth'>
                        <input
                            className={`${style['edit-mode']} ${darkMode && style['edit-mode-dark']} h2-input ${darkMode ? 'input-dark' : ''}`}
                            name='item name'
                            title='Item name'
                            ref={subNameInput}
                            value={subNameValue}
                            onChange={({target}) => setSubNameValue(target.value)}
                            placeholder='Subtitle' />
                    </h2>
                    <TextareaAutosize 
                        className={`${style['edit-mode']} ${darkMode ? `input-dark ${style['edit-mode-dark']}` : ''}`}
                        name='notes'
                        title='Notes'
                        value={contentsValue}
                        onChange={({target}) => setContentsValue(target.value)}
                        placeholder='Notes' />
                    <p className={`info ${darkMode && 'info-dark'}`}>
                        Links can be added by using <code>[title](https://example.com)</code>
                    </p>
                </>
                : <>
                    <h2>
                        <button 
                            onClick={handleToggleStriked}
                            className={`strikable ${subBlock.isStriked && 'striked'}`}
                            name={subBlock.isStriked ? 'striked item' : 'unstriked item'}
                            title='Toggle striked'>
                            {subBlock.name}
                        </button>
                    </h2>
                    { mode.showEditIcons &&
                        <span className={style['icon-group']}>
                            { (index > 0 || index < currentBlockSubBlocks.length - 1) &&
                                <>
                                { index > 0 ?
                                    <button name='move item up' title='Item up' className={`${style['icon-item']} ${style['icon-chevron']}`} 
                                        onClick={() => handleReorder('UP')}>
                                        <FontAwesomeIcon icon={faChevronUp} color={iconThemeColor} size='lg' />
                                    </button> :
                                    <button name='move item up' className={`${style['icon-item']} ${style['icon-chevron']} disabled`} disabled>
                                        <FontAwesomeIcon icon={faChevronUp} color={iconThemeColor} size='lg' />
                                    </button> }
                                { index < currentBlockSubBlocks.length - 1 ?
                                    <button name='move item down' title='Item down' className={`${style['icon-item']} ${style['icon-chevron']}`} 
                                        onClick={() => handleReorder('DOWN')}>
                                        <FontAwesomeIcon icon={faChevronDown} color={iconThemeColor} size='lg' />
                                    </button> :
                                    <button name='move item down' className={`${style['icon-item']} ${style['icon-chevron']} disabled`} disabled>
                                        <FontAwesomeIcon icon={faChevronDown} color={iconThemeColor} size='lg' />
                                    </button> }
                                </> }
                        </span> }
                    {
                        // It's okay, users can only see their own input :)
                    }
                    { contentsValue &&
                        <p dangerouslySetInnerHTML={{ __html: parsedContents }} /> }
                </> }
            <EditingBar 
                isEditing={isEditing} 
                setIsEditing={setIsEditing} 
                handleEdit={handleEdit} 
                handleSubmit={handleSubmit}
                handleAddSubBlock={handleAddSubBlock}
                handleDeleteSubBlock={handleDeleteSubBlock}
                isLast={isLast} />
        </section>
    )
}

export default SubBlock
