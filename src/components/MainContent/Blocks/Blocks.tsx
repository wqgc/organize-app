import React, { useEffect } from 'react'
import { useCustomSelector } from '../../../store'
import Block from './Block'

const Blocks = () => {
    const { mode, blocks, contexts } = useCustomSelector(state => state)
    const currentContext = contexts.find(c => c.id === mode.currentContext)

    useEffect(() => {
        if (currentContext) {
            document.title = `Organize - ${currentContext.name}`
        } else {
            document.title = 'Organize'
        }
    }, [currentContext])

    return (
        <>
            { blocks
                .filter(block => block.context === mode.currentContext)
                .map((block, i) => {
                    return <Block 
                        key={block.id} 
                        block={block}
                        isLast={currentContext === undefined || i === currentContext.blockCount - 1} />
                }) }
        </>
    )
}

export default Blocks
