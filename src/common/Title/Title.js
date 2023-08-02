import styles from './Title.module.css';
export const Title = ({ addStyles, title }) => {
  return (
    <div
      className={
        addStyles
          ? [addStyles, styles.titleContainer].join(' ')
          : styles.titleContainer
      }
    >
      <span className={styles.title}>{title}</span>
    </div>
  );
};
