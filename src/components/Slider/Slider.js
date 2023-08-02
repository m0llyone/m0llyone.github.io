import styles from './Slider.module.css';
import stylesProduct from '../../pages/Products/Products.module.css';
import Carousel from 'nuka-carousel';
import { Title } from '../../common/Title/Title';
import { Button } from '../../common/Button/Button';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const Slider = () => {
  const { products } = useSelector((state) => state.products);
  let array = [];
  products.forEach((elem) => {
    const url = elem.link;
    elem.products.forEach((item) => {
      if (item.id % 5 == 0) {
        array = [...array, { productLink: url, ...item }];
      }
    });
  });

  return (
    <div className={styles.container}>
      <Title title="Бестселлеры" addStyles={styles.title} />
      <Carousel
        className={styles.carousel}
        cellAlign="center"
        wrapAround={true}
        speed={2000}
        autoplay={true}
        slidesToShow={3}
        defaultControlsConfig={{
          nextButtonText: ' ',
          prevButtonText: ' ',
          nextButtonClassName: [styles.button, styles.nextButton].join(' '),
          prevButtonClassName: [styles.button, styles.prevButton].join(' '),
          nextButtonStyle: {
            backgroundPosition: 'center ',
          },
          prevButtonStyle: {
            backgroundPosition: 'center ',
          },
          pagingDotsClassName: styles.dots,
        }}
      >
        {array.map((product) => (
          <div key={product.id} className={styles.sliderContainer}>
            <div className={stylesProduct.hoverContainer}>
              <Link to={`catalog/${product.productLink}/${product.id}`}>
                <Button addStyles={stylesProduct.buttonHover}>Подробней</Button>
              </Link>
              <img
                className={stylesProduct.imageHover}
                style={{ cursor: 'pointer', width: '393px', height: '393px' }}
                src={product.image.src}
                alt={product.image.alt}
              />
            </div>
            <div className={stylesProduct.productInfo}>
              <div className={stylesProduct.titleContainer}>
                <span className={stylesProduct.productTitle}>
                  {product.title}
                </span>
                <img
                  style={{ cursor: 'pointer' }}
                  src={product.cart}
                  alt="cart"
                />
              </div>
              <span className={stylesProduct.price}>
                {product.price} руб/ {product.weight}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
      <Link to="catalog/cakes">
        <Button addStyles={styles.buttonView}>
          Посмотреть весь ассортимент
        </Button>
      </Link>
    </div>
  );
};
