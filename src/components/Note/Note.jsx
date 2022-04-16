import React from 'react';
import styles from './Note.module.css'
import classnames from classnames

const Note = ({activeNote, setNotes, id, notes, settext, setActiveNote, title, ...props}) => {
    return (
        <div 
            id={id}
            className={activeNote === id?styles.note:classnames(styles.note, styles.active)} 
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
                    for (var i = 0; i < notes.length; i++) {
                        if (notes[i].id == e.target.id) {
                            let copy = notes
                            copy.splice(i, 1)
                            setNotes(copy)
                        }
                    }
                    if (notes.length != 0) {
                        setActiveNote(notes[notes.length-1].id)
                        console.log(notes[notes.length-1].id)
                        settext(notes[notes.length-1].text)
                        console.log(notes[notes.length-1].text)
                    }
                    else{
                        setActiveNote()
                        settext('')
                    }
                    console.log(notes)
                }}
            >
                delete
            </button>
        </div>
    );
};

export default Note;