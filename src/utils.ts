import store, { RootState } from './store'
import { Mode, updateMode } from './reducers/modeReducer'
import { Context, setContexts } from './reducers/contextsReducer'
import { Block, setBlocks } from './reducers/blocksReducer'
import { SubBlock, setSubBlocks } from './reducers/subBlocksReducer'

// Swap contexts above or below the given index, then return the new array
const swapContexts = (contexts: any[], index: number, type: 'UP' | 'DOWN'): any[] => {
    const newArr = [...contexts]

    switch(type) {
        case 'UP':
            [
                newArr[index - 1], 
                newArr[index]
            ] = [
                newArr[index], 
                newArr[index - 1]
            ]
            break
        case 'DOWN':
            [
                newArr[index + 1], 
                newArr[index]
            ] = [
                newArr[index], 
                newArr[index + 1]
            ]
            break
    }

    return newArr
}

// The purpose is the same as above, but this is for swapping items with a scoped relationship,
// such as blocks and subblocks
const swapItems = (scopedItems: any[], allItems: any[], index: number, type: 'UP' | 'DOWN'): any[] => {
    const newScopedArr = [...scopedItems]
    const newAllArr = [...allItems]
    const updatedItem = { ...scopedItems[index], newPlaceId: null }
    let oldItem: any = null

    switch(type) {
        case 'UP':
            oldItem = { ...newScopedArr[index - 1], newPlaceId: newScopedArr[index].id }
            updatedItem.newPlaceId = newScopedArr[index - 1].id
            break
        case 'DOWN':
            oldItem = { ...newScopedArr[index + 1], newPlaceId: newScopedArr[index].id }
            updatedItem.newPlaceId = newScopedArr[index + 1].id
            break
    }

    return newAllArr.map(item => {
        if (item.id === updatedItem.newPlaceId) {
            delete updatedItem.newPlaceId
            return updatedItem
        } else if (item.id === oldItem.newPlaceId) {
            delete oldItem.newPlaceId
            return oldItem
        }
        return item
    })
}

interface BlockCounter {
    [id: string]: {
        context?: string
        blockCount?: number
        subBlockCount: number
    }
}

// Set state from external sources such as local storage or imports
const validateAndSetState = ({ mode, contexts, blocks, subBlocks }: RootState, imported: boolean): void => {
    if (mode && contexts && blocks && subBlocks) {
        // Handle mode
        const { showEditIcons, currentContext, currentTheme } = mode
        const newMode: Mode = {
            showEditIcons: showEditIcons,
            currentContext: (currentContext || '0'),
            currentTheme: (Number(currentTheme) || 0)
        }

        const newContexts: Context[] = [...contexts]
        const newBlocks: Block[] = [...blocks]
        const newSubBlocks: SubBlock[] = [...subBlocks]

        // Extra validation when data is imported by the user
        if (imported) {
            // Validate properties, and correctly set block/subblock counts
            const newContextCounts: BlockCounter = {}
            const newBlockCounts: BlockCounter = {}

            newContexts.forEach(c => {
                // Validation
                const { id, name } = c
                let missingCProperty = null
                if (!id || typeof id !== 'string') missingCProperty = 'ID'
                if (!name || typeof name !== 'string') missingCProperty = 'name'

                if (missingCProperty !== null) {
                    throw new Error(`A context's ${missingCProperty} is missing or in the wrong format`)
                }

                // Counting
                newContextCounts[c.id as string] = { blockCount: 0, subBlockCount: 0 }
            })

            newBlocks.forEach(b => {
                // Validation
                const { id, name, context } = b
                let missingBProperty = null
                if (!id || typeof id !== 'string') missingBProperty = 'ID'
                if (!name || typeof name !== 'string') missingBProperty = 'name'
                if (!context || typeof context !== 'string') missingBProperty = 'context'

                if (missingBProperty !== null) {
                    throw new Error(`A block's ${missingBProperty} is missing or in the wrong format`)
                }

                // Counting
                if (newContextCounts[b.context]?.hasOwnProperty('blockCount')) {
                    const count = newContextCounts[b.context].blockCount as number
                    newContextCounts[b.context].blockCount = count + 1
                }

                newBlockCounts[b.id as string] = { context: b.context, subBlockCount: 0 }
            })

            newSubBlocks.forEach(sb => {
                // Validation
                const { id, name, block, contents, isStriked } = sb
                let missingSBProperty = null
                if (!id || typeof id !== 'string') missingSBProperty = 'ID'
                if (!name || typeof name !== 'string') missingSBProperty = 'name'
                if (!block || typeof block !== 'string') missingSBProperty = 'block'

                if (missingSBProperty !== null) {
                    throw new Error(`A subblock's ${missingSBProperty} is missing or in the wrong format`)
                }

                if (!contents || typeof contents !== 'string') sb.contents = ''
                if (!isStriked || typeof isStriked !== 'boolean') sb.isStriked = false

                // Counting
                if (newBlockCounts[sb.block]?.hasOwnProperty('subBlockCount')) {
                    const count = newBlockCounts[sb.block].subBlockCount as number
                    newBlockCounts[sb.block].subBlockCount = count + 1
                }
                if (newBlockCounts[sb.block]?.context) {
                    const contextId = newBlockCounts[sb.block].context as string
                    const count = newContextCounts[contextId].subBlockCount as number
                    newContextCounts[contextId].subBlockCount = count + 1
                }
            })

            // Set counts
            newContexts.forEach(c => {
                if (c.id) {
                    if (newContextCounts[c.id].blockCount === 0 || newContextCounts[c.id].subBlockCount === 0) {
                        throw new Error('Contexts must have at least one block and one subblock')
                    }

                    c.blockCount = newContextCounts[c.id].blockCount as number
                    c.subBlockCount = newContextCounts[c.id].subBlockCount as number
                }
            })
            newBlocks.forEach(b => {
                if (b.id) {
                    b.subBlockCount = newBlockCounts[b.id].subBlockCount as number
                }
            })
        }
        
        store.dispatch(updateMode(newMode))
        store.dispatch(setContexts(newContexts))
        store.dispatch(setBlocks(newBlocks))
        store.dispatch(setSubBlocks(newSubBlocks))
    } else {
        throw new Error('Unable to save, data is missing')
    }
}

export { swapContexts, swapItems, validateAndSetState }
