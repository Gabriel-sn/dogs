import styles from './Input.module.css';

const Input = ({label, type, inputName, value, onChange, onBlur, error}) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={inputName} className={styles.label}>{label}</label>
            <input 
                id={inputName}
                name={inputName}
                className={styles.input}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />

            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default Input;