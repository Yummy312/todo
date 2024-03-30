import './App.css'
import Header from "./components/Header/Header.jsx";
import { useState} from "react";
import NoteList from "./components/NoteForm/NoteList/NoteList.jsx";
import NoteForm from "./components/NoteForm/NoteForm.jsx";
import NoteSelect from "./components/NoteSelect/NoteSelect.jsx";
import NoteInput from "./components/NoteForm/NoteInput/NoteInput.jsx";
import NoteModal from "./components/NoteModal/NoteModal.jsx";
import NoteButton from "./components/NoteForm/NoteButton/NoteButton.jsx";
import {useSearchNote} from "./components/hooks/useNotes.js";

function App() {
    const [notes, setNote] = useState([])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [modal, setModal] = useState(false)
    const searchNote = useSearchNote(searchQuery, notes)
    const addNote = (newNote)=>{
        setNote([...notes, newNote])
        setModal(false)
    }
    const removeNote = (currentNote) =>{
        setNote(notes.filter(n => n.id!==currentNote.id))
    }
    const sortNotes = (sort)=>{
        console.log('sss')
        setNote([...notes].sort((a, b) => a[sort].localeCompare(b[sort])))
    }


    return (
      <div className="wrapper">
          <Header/>
          <div className="wrapperInner container">
              <div className="container-content">
                  <NoteInput
                      placeholder="Поиск..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                  />
                  <NoteButton onClick={()=> setModal(true)}>
                      Создать заметку
                  </NoteButton>

                  <NoteModal visible={modal} setVisible={setModal}>
                      <NoteForm addNote={addNote}/>
                  </NoteModal>

                  <NoteList notes={searchNote} removeNote={removeNote}/>

              </div>
                  <NoteSelect
                      defaultValue="Сортировка"
                      value={selectedSort}
                      onChange={sortNotes}
                      options={[
                          {name: "По названию", value: "title"},
                          {name: "По описанию", value: "description"}
                      ]}
                  />
          </div>
      </div>
  )
}
export default App
