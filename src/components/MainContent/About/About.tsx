import React, { useEffect } from 'react'
import { useCustomSelector } from '../../../store'

const About = () => {
    const mode = useCustomSelector(state => state.mode)
    const darkMode = mode.currentTheme === 1

    useEffect(() => {
        document.title = 'Organize - About Page'
    }, [])

    return (
        <section>
            <h1>About</h1>
            <p>
                This web application can be used to organize just about anything. <br />
                You can keep notes, to-do items, goals, grocery lists, links, and any other musings
                you might have.
            </p>
            <p>
                You can also create contexts (separate pages which are listed in the menu for easy access).
                Within those, you can create new sections and add items containing further writing
                and/or links. What you do with this space is up to you. Enjoy!
            </p>
            <p>
                Find the app on {' '}
                <a 
                    href='https://github.com/wqgc/organize-app' 
                    target='_blank' 
                    rel='noreferrer noopener'
                    className={darkMode ? 'a-dark' : ''}>
                    GitHub.
                </a>
            </p>
        </section>
    )
}

export default About
