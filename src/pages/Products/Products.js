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
import { Item } from '../../common/Item/Item';

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
          <div key={product.id}>
            <Item
              id={product.id}
              src={product.image.src}
              alt={product.image.alt}
              title={product.title}
              cart={product.cart}
              cartCount={product.cartCount}
              price={product.price}
              weight={product.weight}
              onClick={addToCart}
              link={link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
