
import styles from './NoteModal.module.css'
const NoteModal = ({children, visible,setVisible}) => {
    const rootClasses = [styles.NoteModal]

    if (visible){
        rootClasses.push(styles.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            <div className={styles.NoteModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>

        </div>
    );
};

export default NoteModal;