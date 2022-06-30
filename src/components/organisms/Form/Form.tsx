import { FC, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendMail } from './email.handler';
import { Input, TextArea } from '@/components';

import { useTranslation } from 'react-i18next';
import {
  emailRegex,
  ENTER_CORRECT_EMAIL,
  NOT_ENOUGH_CHARACTERS,
  REQUIRED,
  TOO_MANY_CHARACTERS,
} from '@/const';

import styles from './Form.module.scss';

const errorTypes = {
  required: REQUIRED,
  minLength: NOT_ENOUGH_CHARACTERS,
  maxLength: TOO_MANY_CHARACTERS,
  pattern: ENTER_CORRECT_EMAIL,
};

interface IForm {
  onSuccess: () => void;
}

const Form: FC<IForm> = ({ onSuccess }) => {
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);

  console.log(t(`form.name`));

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({ reValidateMode: `onChange` });

  const formRef = useRef(null);

  const onSubmit = async () => {
    if (formRef.current) {
      setLoading(true);

      sendMail(formRef.current).then(
        (result) => {
          if (result?.status === 200) {
            setLoading(false);
            onSuccess();
          }
        },
        (error) => {
          setLoading(false);
        },
      );
    }
  };

  return (
    <div className={styles.root}>
      <form
        ref={formRef}
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className={styles.title}>Contact form</h3>
        <Input
          label={t(`form.name`)}
          placeholder={`Enter your name`}
          name={`name`}
          error={errors.name}
          touched={touchedFields.name}
          required
          errorTypes={errorTypes}
          register={register}
        />

        <Input
          label={`Email`}
          name={`email`}
          error={errors.email}
          touched={touchedFields.email}
          required
          pattern={emailRegex}
          errorTypes={errorTypes}
          register={register}
        />

        <Input
          label={t(`form.phone`)}
          name={`phone`}
          type="tel"
          touched={touchedFields.phone}
          register={register}
          error={errors.phone}
          errorTypes={errorTypes}
          maxLenght={12}
          minLenght={8}
        />
        <Input
          label={t(`form.subject`)}
          name={`subject`}
          error={errors.subject}
          touched={touchedFields.subject}
          required
          errorTypes={errorTypes}
          register={register}
        />
        <TextArea
          label={t(`form.message`)}
          name={`message`}
          error={errors.message}
          touched={touchedFields.message}
          required
          errorTypes={errorTypes}
          register={register}
          maxLenght={300}
        />
        {
          <button className={styles.button} type="submit">
            {isLoading ? `...loading` : `Send`}
          </button>
        }
      </form>
    </div>
  );
};

export default Form;
