import { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import styles from './TextArea.module.scss';

interface ITextAreaProps {
  label: string;
  placeholder?: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  touched?: string;
  errorTypes: { [x: string]: string };
  maxLenght;
  error?: FieldValues;
  required?: boolean;
}

export const TextArea: FC<ITextAreaProps> = ({
  label,
  placeholder,
  error,
  name,
  touched,
  register,
  required,
  errorTypes,
  maxLenght,
}) => {
  return (
    <div className={styles.root}>
      <label className={`${styles.label} ${touched && styles.touched}`}>
        {label}
        {required && <span>*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        {...register(name, {
          required: required,
          maxLength: maxLenght,
        })}
        className={`${styles.text} ${error && styles.error}`}
      />
      {error && <span className={styles.error}>{errorTypes[error.type]}</span>}
    </div>
  );
};
