import styles from './Navigation.module.css';
import pizza from '../../assets/images/pizza.png';
import shu from '../../assets/images/shu.png';
import brownie from '../../assets/images/brownie.png';
import cake from '../../assets/images/cake.png';
import { Button } from '../../common/Button/Button';
import { useLocation, NavLink, useParams } from 'react-router-dom';
import { initialState } from '../../data/initialState';
import { Link } from 'react-router-dom';
export const Navigation = () => {
  const { pathname } = useLocation();
  const { products } = initialState;
  const { url } = useParams();
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.linkContainer}>
          <img src={cake} alt="cake" />
          <Link to="catalog/cakes">
            <Button addStyles={styles.button}>Торты</Button>
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <img src={shu} alt="shu" />
          <Link to="catalog/shu">
            <Button addStyles={styles.button}>Шу</Button>
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <img src={brownie} alt="brownie" />
          <Link to="catalog/brownie">
            <Button addStyles={[styles.button, styles.buttonMargin].join(' ')}>
              Пирожное
            </Button>
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <img src={pizza} alt="pizza" />
          <Link to="catalog/pizza">
            <Button addStyles={[styles.button, styles.buttonMargin].join(' ')}>
              Пицца
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
