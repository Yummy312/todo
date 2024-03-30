import style from './NoteSelect.module.css'
const NoteSelect = ({options, value, defaultValue, onChange}) => {
    return (
        <select
            className={style.mySelect}
            value={value}
            onChange={event =>
                      onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>

            {options.map(option=>
             <option value={option.value} key={option.value}>
                 {option.name}
             </option>
                )}
        </select>
    );
};

export default NoteSelect;