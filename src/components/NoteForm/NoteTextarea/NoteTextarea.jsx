import style from './NoteTextarea.module.css'
const NoteTextarea = ({ ...props}) => {
    return (
        <textarea className={style.text} {...props}></textarea>
    );
};

export default NoteTextarea;