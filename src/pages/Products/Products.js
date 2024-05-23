import { initialState } from '../../data/initialState';
import styles from './Products.module.css';
import { useParams, NavLink, useLocation } from 'react-router-dom';
import { Title } from '../../common/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { increase_product } from '../../reducers/productSlice';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import { Item } from '../../common/Item/Item';
import { easeIn, easeInOut, easeOut, motion } from 'framer-motion';
import Pagination from '../../components/Pagination/Pagination';

const Products = () => {
  const { url } = useParams();
  const { pathname } = useLocation();

  const state = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [product, setProduct] = useState([]);

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get(
        //   `http://localhost:5000/api/products?page=${currentPage}&limit=10`,
        // );
        // setProducts(response.data.products);
        // setPageCount(response.data.page);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [products, pageCount]);

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  return (
    <>
      <Title addStyles={styles.titleCatalog} title="Каталог" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15, ease: easeOut }}
        className={styles.container}
        key={link}
      >
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
          {products.map((item) => (
            <div key={item.id}>
              <Item
                id={item.id}
                src={item.image.src}
                alt={item.image.alt}
                title={item.title}
                cart={item.cart}
                cartCount={item.cartCount}
                price={item.price}
                weight={item.weight}
                onClick={addToCart}
                link={link}
              />
            </div>
          ))}
        </div>
        <Pagination pageCount={pageCount} page={page} onChange={handlePageClick} />
      </motion.div>
    </>
  );
};

export default Products;
