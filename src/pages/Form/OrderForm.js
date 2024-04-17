import styles from './OrderForm.module.css';
import { Title } from '../../common/Title/Title';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import cake from '../../assets/images/mainCake.png';
import { ReactComponent as Cross } from '../../assets/images/crossIcon.svg';
import { Button } from '../../common/Button/Button';
import { useValidate } from './useValidate/useValidate';
import { Modal } from '../../common/Modal/Modal';
import { AppContext } from '../../App';
import { useDispatch } from 'react-redux';
import { remove_product } from '../../reducers/productSlice';
import { easeOut, motion } from 'framer-motion';
const initialState = {
  name: '',
  phone: '',
  email: '',
  date: '',
  delivery: 'selfCall',
  address: {
    place: '',
    street: '',
    house: '',
    entrance: '',
    housing: '',
    flat: '',
    floor: '',
  },
  payment: 'cash',
  comment: '',
};
const OrderForm = () => {
  const [state, setState] = useState(initialState);
  const { error, validate } = useValidate();
  const [active, setActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { modal, setModal, basket, setBasket, basketPrice } =
    useContext(AppContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value, id, type, checked } = target;
    const stateValue = type === 'checkbox' ? checked : value;
    setState({ ...state, [name]: stateValue });
    validate(name === 'address' ? id : name, value);
    if (name === 'address') {
      setState({ ...state, [name]: { ...state[name], [id]: stateValue } });
    }
  };

  useEffect(() => {
    const disabled =
      Object.values(error).find((el) => el !== '') ||
      state.name === '' ||
      state.phone === '';

    setIsDisabled(disabled);
  }, [error, state.name]);

  const handleSubmit = () => {
    if (isDisabled == false) {
      setModal(true);
    }
  };

  const removeItem = ({ currentTarget }) => {
    const { id } = currentTarget;
    const clearBasket = basket.filter((el) => el.id !== +id);
    dispatch(remove_product({ id: id }));
    setBasket(clearBasket);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15, ease: easeOut }}
    >
      <Link className={styles.link} to="/catalog/cakes">
        Продолжить покупки
      </Link>
      <Title addStyles={styles.mainTitle} title="Оформление заказа" />
      <div className={styles.mainContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <span className={styles.formTitle}>Контакты:</span>
            <div>
              <div className={styles.inputGroup}>
                <input
                  id="name"
                  placeholder=" "
                  className={styles.formInput}
                  type="text"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                />
                <label className={styles.label} htmlFor="name">
                  Имя
                </label>
              </div>
              <span className={styles.error}>{error.name}</span>
            </div>
            <div>
              <div className={styles.inputGroup}>
                <input
                  placeholder=" "
                  className={styles.formInput}
                  type="tel"
                  name="phone"
                  value={state.phone}
                  onChange={handleChange}
                />
                <label className={styles.label} htmlFor="phone">
                  Номер телефона
                </label>
              </div>
              <span className={styles.error}>{error.phone}</span>
            </div>
            <div>
              <div className={styles.inputGroup}>
                <input
                  id="email"
                  className={styles.formInput}
                  type="email"
                  placeholder=" "
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                />
                <label className={styles.label} htmlFor="email">
                  E-mail
                </label>
              </div>
              <span className={styles.error}>{error.email}</span>
            </div>
            <div>
              <div className={styles.inputGroup}>
                <input
                  className={[styles.formInput, styles.formInputDate].join(' ')}
                  placeholder=" "
                  type="date"
                  name="date"
                  value={state.date}
                  onChange={handleChange}
                />
                <label className={styles.label} htmlFor="date">
                  Дата доставки
                </label>
              </div>
              <span></span>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.formTitle}>Способ доставки:</span>
            <div className={styles.radioContainer}>
              <div className={styles.radio}>
                <input
                  type="radio"
                  name="delivery"
                  value="selfCall"
                  id="selfCall"
                  checked={state.delivery === 'selfCall'}
                  onChange={handleChange}
                  onClick={() => {
                    setActive(false);
                    setState({
                      ...state,
                      address: { ...(state.address = {}) },
                    });
                    setState({
                      ...state,
                      address: {
                        ...(state.address = { streetPickUp: 'not selected' }),
                      },
                    });
                  }}
                />
                <span></span>
                <label className={styles.radioText} htmlFor="selfCall">
                  Самовывоз из Печерского р-на, г. Киев.
                </label>
              </div>
              <div className={styles.radio}>
                <input
                  id="taxi"
                  type="radio"
                  name="delivery"
                  value="taxi"
                  onChange={handleChange}
                  onClick={() => {
                    setActive(true);
                    setState({
                      ...state,
                      address: {
                        ...(state.address = {
                          place: '',
                          street: '',
                          house: '',
                          entrance: '',
                          housing: '',
                          flat: '',
                          floor: '',
                        }),
                      },
                    });
                  }}
                />
                <span></span>
                <label className={styles.radioText} htmlFor="taxi">
                  На такси (по тарифам службы такси)
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.inputGroup}>
              <select
                id="streetPickUp"
                name="address"
                value={state.address.streetPickUp}
                placeholder=" "
                className={[styles.formInput, styles.formSelect].join(' ')}
                onChange={handleChange}
                style={{ marginBottom: '20px' }}
              >
                {' '}
                <option className={styles.option} value="not indicated">
                  Выберите ресторан
                </option>
                <option className={styles.option} value="Бурдейного">
                  Бурдейного 23
                </option>
                <option className={styles.option} value="Харьковская">
                  Харьковская 7
                </option>
                <option className={styles.option} value="Ландера">
                  Ландера 19
                </option>
              </select>
            </div>
            <span></span>
          </div>
          <div>
            {active ? (
              <div className={styles.addressContainer}>
                <div>
                  <div className={styles.inputGroup}>
                    <input
                      style={{ maxWidth: '182px' }}
                      placeholder=" "
                      id="street"
                      className={[
                        styles.formInput,
                        styles.formInputAddress,
                      ].join(' ')}
                      name="address"
                      type="text"
                      value={state.address.street}
                      onChange={handleChange}
                    />
                    <label className={styles.label} htmlFor="street">
                      Улица
                    </label>
                  </div>
                  <span style={{ fontSize: '12px' }} className={styles.error}>
                    {error.street}
                  </span>
                </div>
                <div>
                  <div className={styles.inputGroup}>
                    <input
                      style={{ maxWidth: '182px' }}
                      placeholder=" "
                      id="house"
                      className={[
                        styles.formInput,
                        styles.formInputAddress,
                      ].join(' ')}
                      name="address"
                      type="text"
                      value={state.address.house}
                      onChange={handleChange}
                    />
                    <label className={styles.label} htmlFor="house">
                      Дом
                    </label>
                  </div>
                  <span style={{ fontSize: '12px' }} className={styles.error}>
                    {error.house}
                  </span>
                </div>
                <div className={styles.inputGroup}>
                  <input
                    style={{ maxWidth: '182px' }}
                    placeholder=" "
                    id="entrance"
                    className={[styles.formInput, styles.formInputAddress].join(
                      ' '
                    )}
                    name="address"
                    type="text"
                    value={state.address.entrance}
                    onChange={handleChange}
                  />
                  <label className={styles.label} htmlFor="entrance">
                    Подъезд
                  </label>
                </div>

                <div className={styles.inputGroup}>
                  <input
                    style={{ maxWidth: '182px' }}
                    placeholder=" "
                    id="housing"
                    className={[styles.formInput, styles.formInputAddress].join(
                      ' '
                    )}
                    name="address"
                    type="text"
                    value={state.address.housing}
                    onChange={handleChange}
                  />
                  <label className={styles.label} htmlFor="housing">
                    Корпус
                  </label>
                </div>
                <div>
                  <div className={styles.inputGroup}>
                    <input
                      style={{ maxWidth: '182px' }}
                      placeholder=" "
                      id="flat"
                      className={[
                        styles.formInput,
                        styles.formInputAddress,
                      ].join(' ')}
                      name="address"
                      type="text"
                      value={state.address.flat}
                      onChange={handleChange}
                    />
                    <label className={styles.label} htmlFor="flat">
                      Квартира
                    </label>
                  </div>
                  <span style={{ fontSize: '12px' }} className={styles.error}>
                    {error.flat}
                  </span>
                </div>
                <div className={styles.inputGroup}>
                  <input
                    style={{ maxWidth: '182px' }}
                    placeholder=" "
                    id="floor"
                    className={[styles.formInput, styles.formInputAddress].join(
                      ' '
                    )}
                    name="address"
                    type="text"
                    value={state.address.floor}
                    onChange={handleChange}
                  />
                  <label className={styles.label} htmlFor="floor">
                    Этаж
                  </label>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.formTitle}>Способ оплаты</span>
            <div
              style={{ marginBottom: '-10px' }}
              className={styles.radioContainer}
            >
              <div className={styles.radio}>
                <input
                  id="cash"
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={state.payment === 'cash'}
                  onChange={handleChange}
                />
                <span></span>
                <label className={styles.radioText} htmlFor="cash">
                  Наличные
                </label>
              </div>
              <div className={styles.radio}>
                <input
                  id="liqpay"
                  type="radio"
                  name="payment"
                  value="liqpay"
                  onChange={handleChange}
                />
                <span></span>
                <label className={styles.radioText} htmlFor="liqpay">
                  Liqpay
                </label>
              </div>
            </div>
          </div>
          <div>
            <textarea
              placeholder="Оставить комментарий"
              type="text"
              className={styles.formTextArea}
              name="comment"
              value={state.comment}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.formTitle}>Всего к оплате:</span>
            <div style={{ fontWeight: '700' }} className={styles.formTitle}>
              {basketPrice} руб
            </div>
          </div>
          <Button
            disabled={isDisabled}
            addStyles={
              isDisabled
                ? [styles.formButton, styles.disabled].join(' ')
                : styles.formButton
            }
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e);
              handleChange(e);
            }}
          >
            Оформить заказ
          </Button>
        </form>
        <Modal modal={modal} setModal={setModal}>
          <div className={styles.contentContainer}>
            <img height={'152px'} width={'182px'} src={cake} alt="cake" />
            <Title addStyles={styles.modalTitle} title="Спасибо за заказ!" />
            <div className={styles.modalText}>
              Ваш заказ принят в обработку и вскоре вам позвонит по телефону
              менеджер для уточнения деталей.
            </div>
            <div className={styles.buttonContainerModal}>
              <Link to="/">
                <Button addStyles={styles.buttonModal}>На главную</Button>
              </Link>

              <Button
                onClick={() => navigate('/catalog/cakes')}
                addStyles={[styles.buttonModal, styles.buttonColorModal].join(
                  ' '
                )}
              >
                Продолжить покупки
              </Button>
            </div>
          </div>
        </Modal>
        <div className={styles.orderContainer}>
          <span style={{ fontSize: '18px' }}>Ваш заказ:</span>
          <div className={styles.orderTitle}>
            {basket.map((el) => (
              <div key={el.id} className={styles.orderName}>
                <span>{el.title}</span>
                <div className={styles.price}>
                  <span>
                    {el.price} (x{el.cartCount})
                  </span>
                  <div id={el.id} onClick={removeItem}>
                    <Cross
                      style={{ cursor: 'pointer' }}
                      fill="#705A66"
                      width={'13px'}
                      height={'13px'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderForm;
