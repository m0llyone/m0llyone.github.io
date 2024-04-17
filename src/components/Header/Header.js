import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logoGrann.svg';
import cart from '../../assets/images/cart.svg';
import { useNavigate } from 'react-router-dom';
import { useState, memo } from 'react';
import { Burger } from '../../common/Burger/Burger';
import { ReactComponent as Cross } from '../../assets/images/crossIcon.svg';
import cake from '../../assets/images/burgerImage.png';
const Header = memo(() => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  console.log('Header');
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
          <Burger isShow={isShow} setIsShow={setIsShow} />
          <div onClick={() => navigate('/basket')} className={styles.cart}>
            <img style={{ cursor: 'pointer' }} src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Header;
