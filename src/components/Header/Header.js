import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logoGrann.svg';
import cart from '../../assets/images/cart.svg';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { Burger } from '../../common/Burger/Burger';
import { ReactComponent as Cross } from '../../assets/images/crossIcon.svg';
import cake from '../../assets/images/burgerImage.svg';
export const Header = () => {
  const { products } = useSelector((state) => state.products);
  const { setModal, basket, ref } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const { counter } = useContext(AppContext);
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer_2}>
          <Link to="/">
            <img width={'99px'} height={'79px'} src={logo} alt="logo" />
          </Link>
        </div>
        <nav
          className={[styles.navContainer, isShow ? styles.active : ' '].join(
            ' '
          )}
        >
          <div className={styles.crossIconContainer}>
            <Cross
              onClick={() => setIsShow(!isShow)}
              className={styles.crossIcon}
            />
          </div>
          <div className={styles.linkContainer}>
            <Link
              onClick={() => {
                handleScroll();
                setIsShow(!isShow);
              }}
              className={styles.link}
            >
              бестселлер
            </Link>
            <Link
              onClick={() => setIsShow(!isShow)}
              className={styles.link}
              to="/catalog/cakes"
            >
              каталог
            </Link>
          </div>
          <div className={styles.logoContainer}>
            <Link to="/">
              <img className={styles.logo} src={logo} alt="logo" />
            </Link>
          </div>
          <div className={styles.linkContainer}>
            <Link
              onClick={() => setIsShow(!isShow)}
              className={styles.link}
              to="/"
            >
              доставка
            </Link>
            <Link
              onClick={() => setIsShow(!isShow)}
              className={styles.link}
              to="/"
            >
              обо мне
            </Link>
          </div>
          <div className={styles.burgerImageContainer}>
            <img className={styles.burgerImage} src={cake} alt="cake" />
          </div>
        </nav>
        <div className={styles.basket}>
          {/* <div className={styles.count}>{counter}</div> */}
          <Burger isShow={isShow} setIsShow={setIsShow} />
          <div onClick={() => navigate('/basket')} className={styles.cart}>
            <img style={{ cursor: 'pointer' }} src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};
