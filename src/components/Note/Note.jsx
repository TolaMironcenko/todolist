import React from 'react';
import styles from './Note.module.css'
import classNames from 'classnames';

const Note = ({removeTask, activeNote, setNotes, id, notes, settext, setActiveNote, title, ...props}) => {

    return (
        <div 
            id={id}
            className={activeNote != id?styles.note:classNames(styles.note, styles.active)} 
            {...props}
        >
            <h3 
                id={id}
                className={styles.title}
                onClick={(e) => {
                    setActiveNote(e.target.id)
                    settext(title)
                }}
            >
                {title}
            </h3>
            <button 
                type='button'
                id={id}
                className={styles.delete}
                onClick={(e) => {
                    removeTask(e.target.id)
                }}
            >
                delete
            </button>
        </div>
    );
};

export default Note;