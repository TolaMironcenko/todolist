import React, { useState } from 'react';
import styles from './Input.module.css'

const Input = ({handleUpdateDatabase, id, text, setText, notes, setNotes, ...props}) => {

    const [label, setlabel] = useState(0)

    return (
        <div 
            className={styles.in} 
            style={notes.length === 0
                ?{display: 'none'}
                :{display: 'block'}}
        >
            <textarea 
                id={id}
                className={styles.input} 
                disabled={notes.length == 0}
                value={text}
                placeholder={notes.length == 0?'':'Write text'}
                onChange={(e) => {
                    setText(e.target.value)
                    for (var i = 0; i < notes.length; i++) {
                        if (notes[i].id == e.target.id) {
                            let copy = notes
                            copy[i].text = e.target.value
                            setNotes(copy)
                            handleUpdateDatabase(notes[i])
                            break
                        }
                    }
                    setlabel(e.target.value.length)
                    console.log(e.target.value)
                }}
                {...props}
            />
            <label className={styles.label}>{label}</label>
        </div>
    );
};

export default Input;