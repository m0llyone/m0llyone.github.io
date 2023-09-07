import styles from './Modal.module.css';
import { ReactComponent as Cross } from '../../assets/images/crossIcon.svg';
import { AppContext } from '../../App';
import { useContext } from 'react';
export const Modal = ({ addStyles, children }) => {
  const { modal, setModal } = useContext(AppContext);
  return (
    <div
      className={
        modal ? [styles.active, styles.container].join(' ') : styles.container
      }
      onClick={() => setModal(false)}
    >
      <div
        className={[styles.content, addStyles].join(' ')}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setModal(false)}
          style={{ cursor: 'pointer' }}
          className={styles.crossContainer}
        >
          <Cross className={styles.cross} />
        </div>
        {children}
      </div>
    </div>
  );
};
