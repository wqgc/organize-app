import React, { useLayoutEffect, useEffect, useState, useCallback } from 'react'
import './App.css'
import { useCustomSelector } from './store'
import TopBar from './components/TopBar/TopBar'
import Menu from './components/Menu/Menu'
import MainContent from './components/MainContent/MainContent'
import { BrowserRouter as Router } from 'react-router-dom'
import { validateAndSetState } from './utils'

const App = () => {
    const [usingDropdown, setUsingDropdown] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const { mode, contexts, blocks, subBlocks } = useCustomSelector(state => state)

    // Modify body colors according to our theme
    // Other theme changes are done through the addition of classes within components
    useLayoutEffect(() => {
        switch(mode.currentTheme) {
            case 1: // Dark
                document.body.style.color = 'white'
                document.body.style.backgroundColor = '#2d3341'
                break
            default: // Light
                document.body.style.color = '#0E0E2C'
                document.body.style.backgroundColor = 'white'
        }
    }, [mode])

    // Set initial redux state from local storage if it exists
    useEffect(() => {
        const modeData = window.localStorage.getItem('mode')
        const contextsData = window.localStorage.getItem('contexts')
        const blocksData = window.localStorage.getItem('blocks')
        const subBlocksData = window.localStorage.getItem('subBlocks')

        if (modeData && contextsData && blocksData && subBlocksData) {
            const newState = {
                mode: JSON.parse(modeData),
                contexts: JSON.parse(contextsData),
                blocks: JSON.parse(blocksData),
                subBlocks: JSON.parse(subBlocksData)
            }

            try {
                validateAndSetState(newState, false)
            } catch (error) {
                console.log(error.message)
            }
        }
    }, [])

    // When redux state updates, update the relevant local storage variable
    useEffect(() => { window.localStorage.setItem('mode', JSON.stringify(mode)) }, [mode])
    useEffect(() => { window.localStorage.setItem('contexts', JSON.stringify(contexts)) }, [contexts])
    useEffect(() => { window.localStorage.setItem('blocks', JSON.stringify(blocks)) }, [blocks])
    useEffect(() => { window.localStorage.setItem('subBlocks', JSON.stringify(subBlocks)) }, [subBlocks])

    // Deal with window resizing to change layout
    const handleResize = useCallback((): void => {
        setWindowWidth(window.innerWidth)
    }, [])

    useLayoutEffect(() => {
        if (windowWidth >= 900) {
            setUsingDropdown(false)
        } else {
            setUsingDropdown(true)
        }
    }, [windowWidth])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])

    return (
        <Router>
            <div>
                <TopBar usingDropdown={usingDropdown} />
                <div className={`nav-curv ${mode.currentTheme === 1 && 'nav-curv-dark'}`} />
                <div id={usingDropdown ? '' : 'no-dropdown_container'}>
                    <Menu isDropdown={false} usingDropdown={usingDropdown} />
                    <MainContent />
                </div>
            </div>
        </Router>
    )
}

export default App
