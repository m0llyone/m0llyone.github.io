import { initialState } from '../../data/initialState';
import styles from './Products.module.css';
import { Link, useParams, NavLink, useLocation } from 'react-router-dom';
import { Title } from '../../common/Title/Title';
import { Button } from '../../common/Button/Button';
import { increment } from '../../reducers/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { increase_product } from '../../reducers/productSlice';
import { useContext } from 'react';
import { AppContext } from '../../App';

const Products = () => {
  const { url } = useParams();
  const { pathname } = useLocation();
  const state = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const { setCounter, counter } = useContext(AppContext);
  const { products, link } = state.find((item) => {
    if (url === undefined) {
      return item.link === 'cakes';
    }
    return item.link === url;
  });

  const addToCart = ({ currentTarget }) => {
    const { id } = currentTarget;
    setCounter(counter + 1);
    dispatch(increase_product({ id: id, link: link }));
  };
  return (
    <div className={styles.container} key={link}>
      <Title addStyles={styles.titleCatalog} title="Каталог" />
      <nav className={styles.linkContainer}>
        {initialState.map((dish) => (
          <NavLink
            className={
              pathname.slice(1) !== `catalog/${dish.link}`
                ? styles.navLink
                : [styles.navLink_active, styles.navLink].join(' ')
            }
            to={`/catalog/${dish.link}`}
            key={dish.id}
          >
            {dish.title}
          </NavLink>
        ))}
      </nav>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div className={styles.productContainer} key={product.id}>
            <div className={styles.hoverContainer}>
              <Link to={`${product.id}`}>
                <Button addStyles={styles.buttonHover}>Подробней</Button>
              </Link>
              <img
                className={styles.imageHover}
                width={'393px'}
                src={product.image.src}
                alt={product.image.alt}
              />
            </div>
            <div className={styles.productInfo}>
              <div className={styles.titleContainer}>
                <span className={styles.productTitle}>{product.title}</span>
                <div className={styles.toCartContainer}>
                  <img
                    id={product.id}
                    onClick={addToCart}
                    style={{ cursor: 'pointer' }}
                    src={product.cart}
                    alt="cart"
                  />
                  {product.cartCount > 0 ? (
                    <div className={styles.cartCount}>{product.cartCount}</div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className={styles.price}>
                {product.price} руб/ {product.weight}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
