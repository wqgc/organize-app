import React, { useState, Dispatch } from 'react'
import style from './EditingBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import iconColors from '../../../../iconColors'
import { useCustomSelector } from '../../../../store'
import DeletionModal from '../../DeletionModal'

interface Props {
    isEditing: boolean
    setIsEditing: Dispatch<boolean>
    handleEdit: () => void
    handleSubmit: () => void
    handleAddSubBlock: () => void
    handleDeleteSubBlock: () => void
    isLast: boolean
}

const EditingBar = ({ 
    isEditing, 
    setIsEditing, 
    handleEdit, 
    handleSubmit,
    handleAddSubBlock,
    handleDeleteSubBlock,
    isLast }: Props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const { mode, contexts } = useCustomSelector(state => state)

    const context = contexts.find(c => c.id === mode.currentContext)
    const darkMode = mode.currentTheme === 1
    const iconThemeColor = darkMode ? iconColors.blue['200'] : iconColors.blue['100']

    return (
        <>
            <DeletionModal
                type='SUBBLOCK'
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                handleDelete={handleDeleteSubBlock} />
            { mode.showEditIcons ?
                <div id={style.container} className={ darkMode ?  style['container-dark'] : style.container }>
                    { isEditing ?
                    <>
                        <button name='save changes' title='Save changes' id={style['inner-container']} onClick={handleSubmit}>
                            <FontAwesomeIcon 
                                className={style['icon-item']} icon={faCheck} color={iconThemeColor} size='lg' />
                            <span>Save Changes</span>
                        </button>
                        <button name='cancel' title='Cancel' onClick={() => setIsEditing(false)}>
                            <FontAwesomeIcon 
                                className={style['icon-item']} icon={faTimes} color={iconThemeColor} size='lg' />
                        </button>
                    </>
                    :<>
                        <button name='edit item' title='Edit item' onClick={handleEdit}>
                            <FontAwesomeIcon 
                                className={style['icon-item']} icon={faEdit} color={iconThemeColor} size='lg' />
                        </button>
                        { isLast &&
                            <button name='new item' title='New item' onClick={handleAddSubBlock}>
                                <FontAwesomeIcon 
                                    className={style['icon-item']} icon={faPlus} color={iconThemeColor} size='lg' />
                            </button> }
                        { (context && (context.blockCount > 1 || context.subBlockCount > 1)) &&
                            <button name='delete item' title='Delete item' onClick={() => setModalIsOpen(true)}>
                                <FontAwesomeIcon 
                                    className={style['icon-item']} icon={faTrash} color={iconThemeColor} size='lg' />
                            </button> }
                    </> }
                </div> : 
                <div id={style['container-small']} className={ darkMode ?  style['container-dark'] : style.container } /> }
        </>
    )
}

export default EditingBar

