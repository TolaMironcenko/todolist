import { useEffect, useState } from 'react';
import React from 'react'
import Button from '../Button/Button';
import Input from '../Input/Input';
import Note from '../Note/Note'
import EditLayout from '../../layouts/EditLayout/EditLayout';
import NotesLayout from '../../layouts/NotesLayout/NotesLayout';
import TopLayout from '../../layouts/TopLayout/TopLayout';
import styles from './NoteList.module.css'
import { db } from '../../base';
import { set, ref, onValue, remove, update } from 'firebase/database'

const NoteList = () => {
  
  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState()
  const [text, setText] = useState('')

  useEffect(() => {
    onValue(ref(db), snapshot => {
      setNotes([])
      const data = snapshot.val()
      if (data !== null) {
        Object.values(data).map(note => {
          setNotes(notes => [note, ...notes])
        })
      }
    })
  }, [])

  const writeDatabase = (todo, title, text, id) => {
    set(ref(db, `/${todo.id}`), {
      title,
      text,
      id,
    })
  }

  const handleDeleteFromDatabase = (id) => {
    remove(ref(db, `${id}`))
  }

  const handleUpdateDatabase = (note) => {
    update(ref(db, `/${note.id}`), {
      title: note.title,
      text: note.text,
      id: note.id,
    })
  }

  const delteAllFromDatabase = () => {
    notes.map(note => {
      handleDeleteFromDatabase(note.id)
    })
  }

  const newNote = () => {
    const nn = {
      title: 'new note',
      text: 'new note',
      id: Date.now()
    }
    setNotes([nn, ...notes])
    setActiveNote(nn.id)
    setText('')
    writeDatabase(nn, nn.title, nn.text, nn.id)
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
    handleDeleteFromDatabase(id)
    // console.log(notes)
  }

  return (
    <div className={styles.noteList}>
      <TopLayout>
        <Button 
          onClick={() => setActiveNote()}
          style={{marginRight: '15px'}}
        >
          back
        </Button>
        <Button onClick={()=>newNote()}>New Note</Button>
        <Button 
          onClick={()=> {
            delteAllFromDatabase()
            setNotes([])
          }}
          style={{marginLeft: '15px'}}
        >
          Delete all
        </Button>
      </TopLayout>
      <div className={styles.notesandedit}>
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
                    key={note.id}
                    title={note.text} 
                    id={note.id} 
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
            handleUpdateDatabase={handleUpdateDatabase}
          />
        </EditLayout>
      </div>
    </div>
  );
}

export default NoteList;
