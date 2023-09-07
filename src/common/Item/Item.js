import styles from './Item.module.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export const Item = ({
  id,
  src,
  alt,
  title,
  cart,
  cartCount,
  price,
  weight,
  onClick,
  link,
  addStyles,
}) => {
  return (
    <div className={addStyles}>
      <div className={styles.productContainer} key={id}>
        <div className={styles.hoverContainer}>
          <Link to={`/catalog/${link}/${id}`}>
            <Button addStyles={styles.buttonHover}>Подробней</Button>
          </Link>
          <img
            className={styles.imageHover}
            width={'393px'}
            height={'393px'}
            src={src}
            alt={alt}
          />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.titleContainer}>
            <span className={styles.productTitle}>{title}</span>
            <div className={styles.toCartContainer}>
              <img
                className={styles.cartImg}
                id={id}
                onClick={onClick}
                style={{ cursor: 'pointer' }}
                src={cart}
                alt="cart"
              />
              {cartCount > 0 ? (
                <div className={styles.cartCount}>{cartCount}</div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className={styles.price}>
            {price} руб/ {weight}
          </div>
        </div>
      </div>
    </div>
  );
};
