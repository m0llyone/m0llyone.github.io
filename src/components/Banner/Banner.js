import styles from './Banner.module.css';
import bisquit from '../../assets/images/bisquitHeader.png';
import { ReactComponent as Telegram } from '../../assets/images/telegram.svg';
import { Button } from '../../common/Button/Button';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/images/facebook.svg';
import { Link, useNavigate } from 'react-router-dom';

export const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.banner}>
      <div className={styles.mainPicture}>
        <img
          style={{ maxWidth: '100%' }}
          width={'831px'}
          src={bisquit}
          alt="bisquit"
        />
      </div>
      <div className={styles.bannerContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>GRANN</div>
          <span className={styles.underTitle}>Авторский десерт</span>
        </div>

        <Button
          onClick={() => navigate('/catalog/cakes')}
          addStyles={styles.button}
        >
          К каталогу
        </Button>
        <div className={styles.socialMedia}>
          <Link to="#">
            <Telegram className={styles.tg} fill="#705A66" />
          </Link>
          <Link to="#">
            <Facebook className={styles.facebook} fill="#705A66" />
          </Link>
          <Link to="#">
            <Instagram className={styles.inst} fill="#705A66" />
          </Link>
        </div>
      </div>
    </div>
  );
};
