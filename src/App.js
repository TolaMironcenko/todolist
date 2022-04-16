import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Note from './components/Note/Note'
import EditLayout from './layouts/EditLayout/EditLayout';
import NotesLayout from './layouts/NotesLayout/NotesLayout';
import TopLayout from './layouts/TopLayout/TopLayout';

function App() {

  const [notes, setNotes] = useState([
    // {
    //   title: 'lab1',
    //   text: 'lab1 rehguyshguhsyughuerhuisehuiheliuhluvihliusgriluhleuirhglshegi',
    //   id: 1
    // }
  ])
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
              : notes.map((note) => {
                  return <Note 
                            title={note.text} 
                            id={note.id} 
                            key={note.id}
                            settext={setText}
                            notes={notes}
                            setNotes={setNotes}
                            setActiveNote={setActiveNote}
                            activeNote={activeNote}
                          />
              })
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

export default App;
