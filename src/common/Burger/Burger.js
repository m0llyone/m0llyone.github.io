import styles from './Burger.module.css';

export const Burger = ({ isShow, setIsShow }) => {
  return (
    <div className={styles.container}>
      <div className={styles.burger} onClick={() => setIsShow(!isShow)}>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
      </div>
    </div>
  );
};
