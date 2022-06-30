import { FC } from 'react';
import { FieldValues, UseFormRegister, ValidationRule } from 'react-hook-form';

import styles from './Input.module.scss';

interface IInputProps {
  label: string;
  placeholder?: string;
  name: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  touched?: string;
  error?: FieldValues;
  errorTypes: { [s: string]: string };
  required?: boolean;
  minLenght?: number;
  maxLenght?: number;
  pattern?: ValidationRule<RegExp>;
}

export const Input: FC<IInputProps> = ({
  label,
  placeholder,
  error,
  name,
  type = `text`,
  touched,
  register,
  required,
  errorTypes,
  minLenght,
  maxLenght,
  pattern,
}) => {
  return (
    <div className={styles.root}>
      <label className={`${styles.label} ${touched && styles.touched}`}>
        {label}
        {required && <span>*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: required,
          minLength: minLenght && minLenght,
          maxLength: maxLenght && maxLenght,
          pattern: pattern,
        })}
        className={`${styles.input} ${error && styles.error}`}
      />
      {error && <span className={styles.error}>{errorTypes[error.type]}</span>}
    </div>
  );
};
