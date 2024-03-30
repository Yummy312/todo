import NoteInput from "./NoteInput/NoteInput.jsx";
import NoteTextarea from "./NoteTextarea/NoteTextarea.jsx";
import NoteButton from "./NoteButton/NoteButton.jsx";
import {useState} from "react";
import style from './NoteForm.module.css'
const NoteForm = (props) => {
    const [note, setNote] = useState({title:'sss', description:''})

    const createNote = (event) =>{
        event.preventDefault()
        let newNote = {
            ...note,
            id: Date.now()
        }
        props.addNote(newNote)
        setNote({title: '', description: ''})
    }
    return (
        <div className={`${style.formWrapper} container-content`}>
            <form className={style.form}>
                <NoteInput value={note.title}
                           placeholder="Добавить название"
                           onChange={e => setNote({...note, title: e.target.value})}/>
                <NoteTextarea value={note.description}
                             placeholder="Добавить описание"
                             onChange={e => setNote({...note, description: e.target.value})}/>
                <NoteButton onClick={createNote}>Подтвердить</NoteButton>
            </form>
        </div>

    );
};

export default NoteForm;