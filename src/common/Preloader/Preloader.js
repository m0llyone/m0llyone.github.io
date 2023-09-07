import preloader from '../../assets/images/Preloader.svg';
import styles from './Preloader.module.css';
const Preloader = () => {
  return (
    <div className={styles.container}>
      {' '}
      <img src={preloader} alt="Loading..." />{' '}
    </div>
  );
};

export default Preloader;
