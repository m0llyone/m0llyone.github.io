import { useState } from 'react';
import { Button } from '../../common/Button/Button';
import styles from './Form.module.css';

const initialState = {
  name: '',
  phone: '',
  comment: '',
};

export const Form = () => {
  const [state, setState] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            Давай сделаем что-нибудь уникальное!
          </div>
          <div className={styles.text}>
            Вы можете заказать свой собственный рецепт десерта, который вам
            нравится. Заполните заявку и свяжусь с вами, чтобы обсудить детали
            заказа.
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <input
            className={styles.input}
            placeholder="Имя"
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Телефон"
            name="phone"
            value={state.phone}
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="text"
            style={{ height: '180px' }}
            placeholder="Опишите ваши пожелания: "
            name="comment"
            value={state.comment}
            onChange={handleChange}
          />
          <Button addStyles={styles.formButton}>Отправить</Button>
        </form>
      </div>
    </div>
  );
};
