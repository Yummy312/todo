import styles from './NoteInput.module.css'
const NoteInput = ({ ...props}) => {
    return (
        <div>
            <input className={styles.input} {...props}/>

        </div>
    );
};

export default NoteInput;