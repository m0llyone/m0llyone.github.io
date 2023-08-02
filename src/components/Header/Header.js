import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logoGrann.svg';
import cart from '../../assets/images/cart.svg';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Modal } from '../../common/Modal/Modal';
import { useContext, useRef } from 'react';
import { AppContext } from '../../App';
export const Header = () => {
  const { products } = useSelector((state) => state.products);
  const { setModal, basket, ref } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { counter } = useContext(AppContext);
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    // const body = document.body;
    // const html = document.documentElement;
    // const height = Math.max(
    //   body.scrollHeight,
    //   body.offsetHeight,
    //   html.clientHeight,
    //   html.scrollHeight,
    //   html.offsetHeight
    // );
    // window.scroll({
    //   top: height,
    //   left: 0,
    //   behavior: 'smooth',
    // });
    // console.log(body);
    // console.log(height);
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.linkContainer}>
          <Link onClick={handleScroll} className={styles.link}>
            бестселлер
          </Link>
          <Link className={styles.link} to="/catalog/cakes">
            каталог
          </Link>
        </div>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img style={{ marginLeft: '-30px' }} src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link className={styles.link} to="/">
            доставка
          </Link>
          <Link className={styles.link} to="/">
            обо мне
          </Link>
        </div>
        <div className={styles.basket}>
          {/* <div className={styles.count}>{counter}</div> */}
          <div onClick={() => navigate('/basket')} className={styles.cart}>
            <img style={{ cursor: 'pointer' }} src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};
