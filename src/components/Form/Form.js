import { useState, useEffect } from 'react';
import { Button } from '../../common/Button/Button';
import styles from './Form.module.css';
import { useSelector } from 'react-redux';
import { Toaster, toast } from 'sonner';
import axios from 'axios';
import { SERVER_URL } from '../../data/constants';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { formValidate } from './formValidate.js';

const initialState = {
  name: '',
  phone: '',
  wishes: '',
};

export const Form = () => {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({});
  const isAuth = useSelector((state) => state.user.isAuth);
  const userId = useSelector((state) => state.user.user?.id);

  const isFormValid = !errors.name && !errors.phone && !errors.wishes;
  const errorMessages = Object.values(errors).join(', ');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    setErrors(formValidate(state));
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      try {
        await axios.post(`${SERVER_URL}/api/suggestions`, {
          ...state,
          userId,
        });
        toast.success('Предложение успешно отправлено!');
        setState(initialState);
      } catch (error) {
        toast.error('Не удалось отправить предложение. Попробуйте позже.');
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>Давай сделаем что-нибудь уникальное!</div>
          <div className={styles.text}>
            Вы можете заказать свой собственный рецепт десерта, который вам нравится. Заполните
            заявку и я свяжусь с вами, чтобы обсудить детали заказа.
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <input
            className={styles.input}
            placeholder="Имя"
            type="text"
            name="name"
            maxLength={35}
            value={state.name}
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Телефон"
            name="phone"
            maxLength={20}
            value={state.phone}
            onChange={handleChange}
          />
          <textarea
            className={styles.input}
            type="text"
            style={{ height: '180px', resize: 'none' }}
            placeholder="Опишите ваши пожелания: "
            maxLength={230}
            name="wishes"
            value={state.wishes}
            onChange={handleChange}
          />
          <div data-tooltip-id="validateTooltip" data-tooltip-content={errorMessages}>
            <Button
              disabled={!isAuth || !isFormValid}
              addStyles={
                !isAuth || !isFormValid
                  ? [styles.formButton, styles.disabled].join(' ')
                  : styles.formButton
              }
            >
              Отправить
            </Button>
            {isAuth && (
              <Tooltip
                className={styles.tooltipContainer}
                classNameArrow={styles.tooltipArrow}
                id="validateTooltip"
                place="bottom"
                effect="solid"
              />
            )}
          </div>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
};
