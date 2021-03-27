import React, { useRef, useEffect, Dispatch, useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './Menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCircle, faMoon, faSun, faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { updateMode } from '../../reducers/modeReducer'
import { useCustomSelector } from '../../store'
import iconColors from '../../iconColors'
import { Link, useLocation } from 'react-router-dom'

interface Props {
    showMenu?: boolean
    setShowMenu?: Dispatch<boolean>
    isDropdown: boolean
    usingDropdown: boolean
}

const Menu = ({showMenu, setShowMenu, isDropdown, usingDropdown}: Props) => {
    const [timeOutId, setTimeOutId] = useState<number | null>(null)
    const { contexts, mode } = useCustomSelector(state => state)
    const menu = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        // Changing location closes the dropdown menu
        if (isDropdown && setShowMenu) {
            setShowMenu(false)
        }
    }, [location, setShowMenu, isDropdown])
    
    useEffect(() => {
        // If the dropdown menu is open, close it when we click outside of it
        const closeMenu = (event: any) => {
            if (menu.current !== null
                && !menu.current.contains(event.target)
                && setShowMenu) {
                setShowMenu(false)
            }
        }
        if (showMenu && isDropdown) {
            document.addEventListener('click', closeMenu)
        }
        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu, setShowMenu, isDropdown])
    
    // If this is the dropdown version of the component and we aren't using dropdown, 
    // or if the menu is meant to be hidden, don't render the component
    if ((isDropdown && !usingDropdown) || (usingDropdown && !showMenu)) return null

    const toggleTheme = (): void => {
        dispatch(updateMode({...mode, currentTheme: Number(!mode.currentTheme)}))
    }

    const toggleEditIcons = (): void => {
        dispatch(updateMode({...mode, showEditIcons: !mode.showEditIcons}))
    }

    const handleContextChange = (event: any): void => {
        if (mode.currentContext !== event.target.id) {
            dispatch(updateMode({ ...mode, currentContext: event.target.id }))
        }
    }

    // Deal with closing the dropdown menu if we tab out to content beneath it
    const handleOnBlur = (): void => {
        if (isDropdown && setShowMenu) {
            setTimeOutId(setTimeout(() => {
                setShowMenu(false)
            }))
        }
    }

    const handleOnFocus = (): void => {
        if (timeOutId !== null && isDropdown) {
            clearTimeout(timeOutId)
        }
    }

    const darkMode = mode.currentTheme === 1
    const containerThemeColor = darkMode ? style['container-dark'] : style['container']
    const iconThemeColor = darkMode ? iconColors.blue['200'] : iconColors.blue['100']

    const mainMenuItems = [
        { name: 'Manage Contexts', path: `/managecontexts` },
        { name: 'Import / Export Data', path: `/importexport` },
        { name: 'About', path: `/about` },
    ]
    const menuIcon = <FontAwesomeIcon icon={faCaretRight} color={iconThemeColor} />
    const currentContextIcon = <span 
        className={style['current-context-icon']}>
            <FontAwesomeIcon icon={faCircle} color={iconThemeColor} size='xs' />
        </span>

    return (
        <>
            <div id={style['behind-menu']}></div>
            <div 
                id={style.container} 
                className={`${style['slide-out']} ${containerThemeColor}`} 
                ref={menu}
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}>
                <nav id={style.inner}>
                    <ul>
                        <li>
                            { !darkMode ?
                                <button name='dark mode' title='Dark mode' onClick={toggleTheme}>
                                    <FontAwesomeIcon icon={faMoon} color={iconThemeColor} />{' '}Dark Mode
                                </button> :
                                <button name='light mode' title='Light mode' onClick={toggleTheme}>
                                    <FontAwesomeIcon icon={faSun} color={iconThemeColor} />{' '}Light Mode
                                </button> }
                        </li>
                        <li>
                            { mode.showEditIcons ?
                                <button name='hide edit icons' title='Hide edit icons' onClick={toggleEditIcons}>
                                    <FontAwesomeIcon icon={faCheckSquare} color={iconThemeColor} />{' '}Show Edit Icons
                                </button> :
                                <button name='show edit icons' title='Show edit icons' onClick={toggleEditIcons}>
                                    <FontAwesomeIcon icon={faSquare} color={iconThemeColor} />{' '}Show Edit Icons
                                </button> }
                        </li>
                        <hr className={darkMode ? 'hr-dark' : ''} />
                        { contexts
                            .map((c, i) => <li key={i}>
                                    {c.id === mode.currentContext ? currentContextIcon : menuIcon}{' '}
                                    <span className={mode.currentContext === c.id && location.pathname === '' ? 'underline' : ''}>
                                        <Link
                                            id={c.id || undefined} 
                                            onClick={handleContextChange}
                                            className={`${style['menu-link']} ${darkMode && style['menu-link-dark']}`}
                                            to=''>
                                                {c.name}
                                        </Link>
                                    </span>
                                </li>) }
                        <hr className={darkMode ? 'hr-dark' : ''} />
                        { mainMenuItems
                            .map((item, i) => 
                                <li key={i}>
                                    {menuIcon}{' '}
                                    <span className={location.pathname === item.path ? 'underline' : ''}>
                                        <Link 
                                            className={`${style['menu-link']} ${darkMode && style['menu-link-dark']}`} 
                                            to={item.path}>
                                                {item.name}
                                        </Link>
                                    </span>
                                </li>) }
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Menu
