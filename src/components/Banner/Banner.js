import styles from './Banner.module.css';
import bisquit from '../../assets/images/bisquitHeader.png';
import { ReactComponent as Telegram } from '../../assets/images/telegram.svg';
import { Button } from '../../common/Button/Button';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/images/facebook.svg';
import { Link, useParams } from 'react-router-dom';
import { initialState } from '../../data/initialState';
export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.mainPicture}>
        <img width={'831px'} src={bisquit} alt="bisquit" />
      </div>
      <div className={styles.bannerContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>GRANN</div>
          <span className={styles.underTitle}>Авторский десерт</span>
        </div>

        <Button addStyles={styles.button}>
          <Link to="/catalog/cakes">К каталогу</Link>
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
