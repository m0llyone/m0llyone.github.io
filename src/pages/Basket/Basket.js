import { useDispatch, useSelector } from 'react-redux';
import styles from './Basket.module.css';
import { useContext, useEffect } from 'react';
import { Button } from '../../common/Button/Button';
import { ReactComponent as Cross } from '../../assets/images/crossIcon.svg';
import { useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../../App';
import cart from '../../assets/images/emptyCart.svg';
import {
  remove_all_products,
  remove_product,
} from '../../reducers/productSlice';

const Basket = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { basket, setBasket, basketPrice, props, setProps } =
    useContext(AppContext);

  const removeItem = ({ currentTarget }) => {
    const { id } = currentTarget;
    const clearBasket = basket.filter((el) => el.id !== +id);
    dispatch(remove_product({ id: id }));
    setBasket(clearBasket);
  };

  const clearBasket = () => {
    dispatch(remove_all_products());
    setBasket([]);
  };

  useEffect(() => {
    let basketState = [];
    products.forEach((elem) => {
      const { link } = elem;
      elem.products.forEach((el) => {
        if (el.cartCount > 0) {
          el = { ...el, link: link };
          basketState.push(el);
        }
      });
      console.log(link);
    });
    setBasket(basketState);
  }, []);

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('basket')) || [];
    if (!storage.length || storage === null) {
      setBasket([]);
    } else {
      setBasket([...storage].filter((item) => item.cartCount > 0));
    }
  }, [setBasket]);
  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('props')) || [];
    if (!storage.length || storage === null) {
      setProps([]);
    } else {
      setProps([...storage].filter((item) => item.cartCount > 0));
    }
  }, [setProps]);

  return (
    <div className={styles.container}>
      {basket.length >= 1 ? (
        <div className={styles.removeContainer}>
          <span className={styles.title}>Ваш заказ:</span>
          <div onClick={clearBasket}>
            <Cross className={styles.cross} />
          </div>
        </div>
      ) : (
        <div className={styles.emptyBasket}>
          <img src={cart} alt="cart" />
          <div className={styles.emptyBasketText}>Корзина пустая</div>
        </div>
      )}
      <div className={styles.productsContainer}>
        {basket.map((el) => (
          <div key={el.id}>
            <div
              id={el.id}
              onClick={(e) => removeItem(e, el.cartCount)}
              className={[styles.removeContainer, styles.crossContainer].join(
                ' '
              )}
            >
              <Cross className={styles.cross} />
            </div>
            <div className={styles.productContainer}>
              <div className={styles.aboutContainer}>
                <Link to={`/catalog/${el.link}/${el.id}`}>
                  <img
                    className={styles.productImage}
                    width={'286px'}
                    src={el.image.src}
                    alt="img"
                  />
                </Link>
                <div>
                  <span className={styles.title}>{el.title}</span>
                  <div className={styles.propsContainer}>
                    <div className={styles.props}>
                      <span>Вид:</span>
                      <span>Декор:</span>
                      <span>Вес:</span>
                    </div>
                    <div className={styles.props}>
                      <div key={el.id}>
                        <span>{el.kind}</span>
                        <span>{el.decor}</span>
                        <span>{el.helf}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.priceContainer}>
                <span style={{ fontSize: '18px' }}>Ваш заказ:</span>
                <div>
                  <div className={styles.price}>
                    <span> Сумма заказа: </span>
                    <span>
                      {el.price}(x{el.cartCount})
                    </span>
                  </div>
                  <div className={styles.finalPrice}>
                    <span>Общая сумма: </span>
                    <span>{el.cartPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {basket.length >= 1 ? (
        <div className={styles.fullPriceContainer}>
          <div className={styles.fullPrice}>
            <div>
              <span>Итого: {basketPrice} руб</span>
            </div>
            <Button
              onClick={() => navigate('/form')}
              addStyles={styles.basketButton}
            >
              Оформить
            </Button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Basket;
