import React, { useState } from 'react'
import style from './TopBar.module.css'
import { useCustomSelector } from '../../store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import iconColors from '../../iconColors'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'

const TopBar = ({usingDropdown}: { usingDropdown: boolean }) => {
    const [showMenu, setShowMenu] = useState(false)
    const mode = useCustomSelector(state => state.mode)

    const toggleMenu = () => {
        setShowMenu(prevState => !prevState)
    }

    const darkMode = mode.currentTheme === 1

    return (
        <>
            <header id={style.container} className={`${darkMode ? style['bg-dark'] : style['bg-light']}`}>
                <h1 id={style.title}>
                    <Link className={darkMode ? style['title-dark'] : style.title} to=''>Organize</Link>
                </h1>
                <div id={style.bars}>
                    <button name='menu' title='Menu' onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} color={darkMode ? iconColors.blue['200'] : iconColors.blue['100']} />
                    </button>
                </div>
            </header>
            <div id={style.test}>
                <Menu 
                    showMenu={showMenu} 
                    setShowMenu={setShowMenu} 
                    isDropdown={true} 
                    usingDropdown={usingDropdown} />
            </div>
        </>
    )
}

export default TopBar
