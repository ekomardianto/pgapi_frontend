import React from 'react'
import styles from './Input.module.scss';
type Propstype = {
    label?: string;
    name: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    readonly?: boolean;
    hidden?: boolean;
    disabled?: boolean;
    defaultValue?: string;
    maxLength?: number
    value?: any
    onChange?: (e: any) => void;
}
const Input = (props: Propstype) => {
    const { label, name, type, placeholder, required, readonly, hidden, disabled, defaultValue, onChange, maxLength, value } = props;
    return (
        <div className={styles.container}>
            {label && <label htmlFor={name} className={styles.container__label}>{label}</label>}
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={styles.container__input}
                required={required}
                readOnly={readonly}
                hidden={hidden}
                defaultValue={defaultValue}
                value={value}
                disabled={disabled}
                onChange={onChange}
                maxLength={maxLength}
            />

        </div>
    )
}
export default Input