import NoteButton from "../NoteButton/NoteButton.jsx";
import styles from './NoteItem.module.css'
const NoteItem = (props) => {
    return (
        <div className={styles.Note}>
            <h3>{props.note.title}</h3>
            <div className={styles.NoteContent}>
                <p>{props.note.description}</p>
                <NoteButton onClick={() => props.removeNote(props.note)}>Удалить</NoteButton>
            </div>

        </div>
    );
};

export default NoteItem;