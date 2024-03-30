import NoteItem from "../NoteItem/NoteItem.jsx";

const NoteList = ({notes, removeNote}) => {
    if(!notes.length) {
        return <h1 style={{textAlign: 'center', color: 'white'}}>Заметки не найдены</h1>
    }
    return (
        <div>
            {notes.map(note =>
                <NoteItem note={note} key={note.id} removeNote={removeNote}/>)}
        </div>
    );
};

export default NoteList;