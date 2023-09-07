import styles from './Slider.module.css';
import Carousel from 'nuka-carousel';
import { Title } from '../../common/Title/Title';
import { Button } from '../../common/Button/Button';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Item } from '../../common/Item/Item';

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
          containerClassName: styles.sliderContainer,
          nextButtonText: ' ',
          prevButtonText: ' ',
          nextButtonClassName: [styles.button, styles.nextButton].join(' '),
          prevButtonClassName: [styles.button, styles.prevButton].join(' '),
          pagingDotsContainerClassName: styles.dotsContainer,
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
          <Item
            id={product.id}
            src={product.image.src}
            alt={product.image.alt}
            title={product.title}
            cart={product.cart}
            cartCount={product.cartCount}
            price={product.price}
            weight={product.weight}
            link={product.productLink}
            addStyles={styles.containerItem}
          />
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
