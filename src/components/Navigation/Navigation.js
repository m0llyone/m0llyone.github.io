import styles from './Navigation.module.css';
import pizza from '../../assets/images/pizza.png';
import shu from '../../assets/images/shu.png';
import brownie from '../../assets/images/brownie.png';
import cake from '../../assets/images/cake.png';
import { Button } from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.linkContainer}>
          <img src={cake} alt="cake" />
          <Button
            onClick={() => navigate('catalog/cakes')}
            addStyles={styles.button}
          >
            Торты
          </Button>
        </div>
        <div className={styles.linkContainer}>
          <img src={shu} alt="shu" />
          <Button
            onClick={() => navigate('catalog/shu')}
            addStyles={styles.button}
          >
            Шу
          </Button>
        </div>
        <div className={styles.linkContainer}>
          <img src={brownie} alt="brownie" />
          <Button
            onClick={() => navigate('catalog/brownie')}
            addStyles={[styles.button, styles.buttonMargin].join(' ')}
          >
            Пирожное
          </Button>
        </div>
        <div className={styles.linkContainer}>
          <img src={pizza} alt="pizza" />
          <Button
            onClick={() => navigate('catalog/pizza')}
            addStyles={[styles.button, styles.buttonMargin].join(' ')}
          >
            Пицца
          </Button>
        </div>
      </div>
    </div>
  );
};
