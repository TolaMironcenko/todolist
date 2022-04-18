import { useState } from 'react';
import React from 'react'
import styles from './NoteList.Module.css'
import Button from '../Button/Button';
import Input from '../Input/Input';
import Note from '../Note/Note'
import EditLayout from '../../layouts/EditLayout/EditLayout';
import NotesLayout from '../../layouts/NotesLayout/NotesLayout';
import TopLayout from '../../layouts/TopLayout/TopLayout';

const NoteList = () => {
  
  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState()
  const [text, setText] = useState('')

  const newNote = () => {
    const nn = {
      title: 'new note',
      text: 'new note',
      id: Date.now()
    }
    setNotes([nn, ...notes])
    setActiveNote(nn.id)
    setText('')
  }

  const removeTask = (id) => {
    setNotes([...notes.filter((note) => note.id != id)])
    if (notes.length == 0) {
      setActiveNote()
      setText('')
    }
    else{
      setActiveNote(notes[notes.length-1].id)
      console.log(notes[notes.length-1].id)
      setText(notes[notes.length-1].text)
      console.log(notes[notes.length-1].text)
    }
    console.log(notes)
  }

  return (
    <>
      <TopLayout>
        <Button onClick={()=>newNote()}>New Note</Button>
      </TopLayout>
      <div className='notes-and-edit'>
        <NotesLayout>
          {
            notes.length === 0
              ? <Button 
                  style={{width: '100%'}}
                  onClick={()=>newNote()}
                >
                  Write new note
                </Button>
              : notes.map((note) => (
                  <Note 
                    title={note.text} 
                    id={note.id} 
                    key={note.id}
                    settext={setText}
                    notes={notes}
                    setNotes={setNotes}
                    setActiveNote={setActiveNote}
                    activeNote={activeNote}
                    removeTask={removeTask}
                  />
              ))
          }
        </NotesLayout>
        <EditLayout>
          <Input 
            notes={notes}
            setNotes={setNotes}
            id={activeNote}
            text={text}
            setText={setText}
          />
        </EditLayout>
      </div>
    </>
  );
}

export default NoteList;
