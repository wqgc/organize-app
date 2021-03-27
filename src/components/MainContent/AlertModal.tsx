import React, { Dispatch } from 'react'
import Modal from 'react-modal'
import { useCustomSelector } from '../../store'

interface Props {
    type: string | 'MIN_CONTEXT_NAME_LENGTH' | 'MAX_CONTEXT_NAME_LENGTH'
    modalIsOpen: boolean
    setModalIsOpen: Dispatch<boolean>
}

const AlertModal = ({type, modalIsOpen, setModalIsOpen}: Props) => {
    const mode = useCustomSelector(state => state.mode)
    const darkMode = mode.currentTheme === 1

    let message = ''

    switch (type) {
        case 'MIN_CONTEXT_NAME_LENGTH':
            message = 'Context names must contain at least 1 character.'
            break
        case 'MAX_CONTEXT_NAME_LENGTH':
            message = 'Context names must be no longer than 28 characters.'
            break
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            className={`modal ${darkMode && 'modal-dark'} modal-smaller`}
            overlayClassName={darkMode ? 'modal-overlay-dark' : ''}
            ariaHideApp={false} >
            <div>
                {message}
            </div>
            <div className='modal-buttons modal-buttons-center'>
                <button 
                    name='ok'
                    title='Ok'
                    className={`choice-button button-neutral bolder ${darkMode && 'button-neutral-dark bolder-dark'}`} 
                    onClick={() => setModalIsOpen(false)}>
                    Okay
                </button>
            </div>
        </Modal>
    )
}

export default AlertModal
