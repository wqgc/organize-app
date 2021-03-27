import React from 'react'
import { useCustomSelector } from '../../store'
import style from './MainContent.module.css'
import Blocks from './Blocks/Blocks'
import About from './About/About'
import ManageContexts from './ManageContexts/ManageContexts'
import ImportExport from './ImportExport/ImportExport'
import { Switch, Route } from 'react-router-dom'

const MainContent = () => {
    const { mode } = useCustomSelector(state => state)
    const darkMode = mode.currentTheme === 1

    return (
        <>
            <div className={`${style.separator} ${ darkMode && style['bg-dark']}`} /> <br />
            <main id={style.container} className={darkMode ? 'container-dark' : ''}>
                <Switch>
                    <Route exact path='/'>
                        <Blocks />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/importexport'>
                        <ImportExport />
                    </Route>
                    <Route path='/managecontexts'>
                        <ManageContexts />
                    </Route>
                </Switch>
            </main>
        </>
    )
}

export default MainContent
