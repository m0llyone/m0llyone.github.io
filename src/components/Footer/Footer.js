import styles from './Footer.module.css';
import logo from '../../assets/images/logoGrann.svg';
import { ReactComponent as Viber } from '../../assets/images/viber.svg';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
import { ReactComponent as Telegram } from '../../assets/images/telegram.svg';
import { Link } from 'react-router-dom';
import { Weather } from '../../common/Weather/Weather';
import { memo, useMemo } from 'react';

let Footer = () => {
  console.log('Footer');
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.contacts}>
          <span>г. Минск, ул.Партизанская 1А</span>
          <span>Email: myitschool@gmail.com</span>
          <span>Тел: +375(29) 777 77 77</span>
        </div>
        <div>
          <img className={styles.logo} width={'255px'} src={logo} alt="logo" />
          <Weather />
        </div>

        <div className={styles.politic}>
          <div className={styles.iconsContainer}>
            <Link to="#">
              <Instagram
                className={styles.inst}
                fill="#F5F7F8"
                width="34px"
                height="34px"
              />
            </Link>
            <Link to="#">
              <Telegram
                className={styles.tg}
                fill="#F5F7F8"
                width="34px"
                height="34px"
              />
            </Link>
            <Link to="#">
              <Viber className={styles.viber} />
            </Link>
          </div>
          <div style={{ height: '64px' }} className={styles.contacts}>
            <Link className={styles.link} to="#">
              Политика конфиденциальности
            </Link>
            <Link className={styles.link} to="#">
              Договор оферты
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer = memo(Footer);
