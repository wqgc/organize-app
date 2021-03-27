import React, { Dispatch } from 'react'
import Modal from 'react-modal'
import { useCustomSelector } from '../../store'

interface Props {
    type: 'CONTEXT' | 'SUBBLOCK'
    modalIsOpen: boolean
    setModalIsOpen: Dispatch<boolean>
    handleDelete: () => void
    name?: string
}

const DeletionModal = ({type, modalIsOpen, setModalIsOpen, handleDelete, name}: Props) => {
    const mode = useCustomSelector(state => state.mode)
    const darkMode = mode.currentTheme === 1

    let topMessage = '', mainMessage = ''

    switch (type) {
        case 'CONTEXT':
            topMessage = `Delete ${name}?`
            mainMessage = `ALL sections and items within ${name} will be deleted.`
            break
        case 'SUBBLOCK':
            topMessage = 'Delete this item?'
            mainMessage = 'If it\'s the only item left in a section, the section will be deleted.'
            break
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            className={`modal ${darkMode && 'modal-dark'}`}
            overlayClassName={darkMode ? 'modal-overlay-dark' : ''}
            ariaHideApp={false} >
            <div>
                <div className={`bolder ${darkMode && 'bolder-dark'}`} style={{ paddingBottom: 10 }}>
                    {topMessage}
                </div>
                {mainMessage}
            </div>
            <div className='modal-buttons'>
                <button 
                    name='confirm delete'
                    title='Confirm delete'
                    className={`choice-button button-delete bolder ${darkMode && 'button-delete-dark bolder-dark'}`} 
                    onClick={handleDelete}>
                    Delete
                </button>
                <button 
                    name='cancel'
                    title='Cancel'
                    className={`choice-button button-neutral bolder ${darkMode && 'button-neutral-dark bolder-dark'}`} 
                    onClick={() => setModalIsOpen(false)}>
                    Cancel
                </button>
            </div>
        </Modal>
    )
}

export default DeletionModal
