import React, { useLayoutEffect, useEffect, useState, useCallback, useRef } from 'react'
import { useCustomSelector } from '../../../store'
import TextareaAutosize from 'react-textarea-autosize'
import style from '../MainContent.module.css'
import { saveAs } from 'file-saver'
import { validateAndSetState } from '../../../utils'


const ImportExport = () => {
    const [textareaValue, setTextareaValue] = useState('')
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [updateMessage, setUpdateMessage] = useState('')
    const state = useCustomSelector(state => state)
    const saveButton = useRef<HTMLButtonElement>(null)

    const darkMode = state.mode.currentTheme === 1
    const importElement: any = document.getElementById('fileInput')

    useEffect(() => {
        document.title = 'Organize - Import / Export Data'
    }, [])

    // Enable save button only when changes from state have been made
    useEffect(() => {
        if (textareaValue !== JSON.stringify(state, null, 4)) {
            setSaveButtonDisabled(false)
            if (saveButton.current !== null) {
                saveButton.current.disabled = false
            }
        } else {
            setSaveButtonDisabled(true)
            if (saveButton.current !== null) {
                saveButton.current.disabled = true
            }
        }
    }, [textareaValue, state])

    // Give the text area our state
    useLayoutEffect(() => {
        setTextareaValue(JSON.stringify(state, null, 4))
    }, [state, setTextareaValue])

    const handleFiles = useCallback(() => {
        const reader = new FileReader()
        reader.readAsText(importElement.files[0])

        reader.onload = () => {
            if (typeof reader.result === 'string') {
                setTextareaValue(reader.result)
            }
        }
    }, [importElement])

    // Check to see if a file was imported
    useEffect(() => {
        if (importElement !== null) {
            importElement.addEventListener('change', handleFiles)

            return () => importElement.removeEventListener('change', handleFiles)
        }
    }, [importElement, handleFiles])

    const handleExport = (): void => {
        const currentDate = new Date()
        const day = currentDate.getDate()
        const month = currentDate.getMonth() + 1
        const year = currentDate.getFullYear()
        const dateString = `${month}-${day}-${year}`

        let blob = new Blob([textareaValue], {
            type: 'text/plain;charset=utf-8'
        })
        saveAs(blob, `organize_data_${dateString}.json`)
    }

    const handleImport = (): void => {
        if (importElement) {
            importElement.click()
        }
    }

    const handleTextareaChange = (event: any): void => {
        setTextareaValue(event.target.value)
        if (importElement) {
            importElement.value = ''
        }
        setUpdateMessage('')
    }

    const handleSaveChanges = (): void => {
        try {
            validateAndSetState(JSON.parse(textareaValue), true)
        } catch (error) {
            let errorMessage = 'Error: '
            const errorTail = ' If you aren\'t sure how to fix this, refresh the page to discard changes.'

            if (error instanceof SyntaxError) {
                errorMessage += 'The data you\'re trying to save isn\'t formatted correctly.'
            } else {
                errorMessage += `${error.message}.`
            }
            setErrorMessage(errorMessage + errorTail)
            return
        }
        setErrorMessage('')
        setUpdateMessage('Changes successfully saved!')
    }

    return (
        <section>
            <h1>Import / Export Data</h1>
            { (errorMessage && 
                <p className={`message error-message ${darkMode && 'error-message-dark'}`}>
                    {errorMessage}
                </p>) || (updateMessage &&
                <p className={`message update-message ${darkMode && 'update-message-dark'}`}>
                    {updateMessage}
                </p>) }
            <TextareaAutosize 
                        className={`${style['edit-mode']} ${darkMode ? `input-dark ${style['edit-mode-dark']}` : ''}`}
                        name='data'
                        title='Data'
                        value={textareaValue}
                        onChange={handleTextareaChange}
                        placeholder='Data' />
            <div id={style['importexport-container']} className={darkMode ? style['bg-dark'] : style['bg-light']}>
                <button
                    name='import'
                    title='Import'
                    className={`choice-button button-neutral bolder ${darkMode && 'button-neutral-dark bolder-dark'}`}
                    onClick={handleImport}>
                    Import
                </button>
                <button 
                    name='export'
                    title='Export'
                    className={`choice-button button-neutral bolder ${darkMode && 'button-neutral-dark bolder-dark'}`}
                    onClick={handleExport}>
                    Export
                </button>
                <button 
                    name='save changes'
                    title='Save Changes'
                    className={
                        `choice-button button-neutral bolder ${darkMode && 'button-neutral-dark bolder-dark'} ${saveButtonDisabled && 'disabled'}`
                    }
                    ref={saveButton}
                    onClick={handleSaveChanges}>
                    Save Changes
                </button>
            </div>
            <input 
                id='fileInput'
                type='file' 
                name='import' 
                accept='.json' 
                style={{ display: 'none' }}
                aria-hidden='true' />
        </section>
    )
}

export default ImportExport 
