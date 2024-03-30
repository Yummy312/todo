import styles from './NoteButton.module.css'
const NoteButton = ({children, ...props}) => {
    return (
        <button className={styles.myButton} {...props}>
            {children}
        </button>
    );
};

export default NoteButton;