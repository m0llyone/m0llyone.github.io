import { useDispatch, useSelector } from 'react-redux';
import styles from './Basket.module.css';
import { useContext, useEffect, useState } from 'react';
import { Button } from '../../common/Button/Button';
import { ReactComponent as Cross } from '../../assets/images/crossIcon.svg';
import { useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../../App';
import cart from '../../assets/images/emptyCart.svg';
import {
  full_price,
  remove_all_products,
  remove_product,
} from '../../reducers/productSlice';
const Basket = () => {
  const { products } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const { basket, setBasket } = useContext(AppContext);
  const [basketPrice, setBasketPrice] = useState();

  let basketfullprice = products.forEach((item) => {
    item.products.reduce((prev, curr) => {
      return prev + curr.cartPrice;
    }, 0);
  });
  // setBasketPrice(basketfullprice);
  console.log(basketPrice);
  useEffect(() => {
    setBasketPrice(basketfullprice);
  }, [basket]);
  const dispatch = useDispatch();
  const { params } = useContext(AppContext);
  const { Вид, Декор, Вес } = params;
  // console.log(params);

  const removeItem = ({ currentTarget }, cartCount) => {
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
    const basketState = [];
    products.forEach((elem) => {
      elem.products.forEach((el) => {
        if (el.cartCount > 0) {
          el = { ...el, link: elem.link };
          basketState.push(el);
        }
      });
    });
    setBasket(basketState);
  }, []);
  console.log(basket);

  const reduce = ({ currentTarget }) => {
    // const {id} = currentTarget
    dispatch(full_price());
  };
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
                  <img width={'286px'} src={el.image.src} alt="img" />
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
                      <span>{Вид}</span>
                      <span>{Декор}</span>
                      <span>{Вес}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.priceContainer}>
                <span style={{ fontSize: '18px' }}>Ваш заказ:</span>
                <div style={{ paddingRight: '30px' }}>
                  <div className={styles.price}>
                    <span> Сумма заказа:</span>
                    <span>
                      {el.price}(x{el.cartCount})
                    </span>
                  </div>
                  <div className={styles.finalPrice}>
                    <span>Общая сумма:</span>
                    <span>{el.cartPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.fullPriceContainer}>
        <div className={styles.fullPrice}>
          <div>
            <span>Итого:</span>
            <span>{basketPrice}</span>
          </div>
          <Button
            onClick={() => navigate('/form')}
            addStyles={styles.basketButton}
          >
            Оформить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
