import styles from './Product.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { initialState } from '../../data/initialState';
import { Button } from '../../common/Button/Button';
import stylesProduct from '../Products/Products.module.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Carousel from 'nuka-carousel';
import { AppContext } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { decrease_price, increase_product } from '../../reducers/productSlice';
import { Modal } from '../../common/Modal/Modal';

export const parametres = {
  Вид: '',
  Декор: '',
  Вес: '',
};
const Product = () => {
  const { url, id } = useParams();
  const state = useSelector((state) => state.products.products);

  const { products, link } = state.find((item) => item.link === url);
  const product = products.find((el) => el.id === +id);
  const { image, title, price, cartCount } = product;
  const [active, setActive] = useState(0);
  const { params, setParams, basket, setBasket, setModal } =
    useContext(AppContext);
  const navigate = useNavigate();
  let offer = [];
  initialState.forEach((item) => {
    const path = item.link;
    item.products.forEach((el) => {
      if (el.id % 8 === 0) {
        offer = [...offer, { link: path, ...el }];
      }
    });
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setParams({ ...params, [name]: value });
  };
  const dispatch = useDispatch();

  const handleAddCount = ({ currentTarget }) => {
    const { id } = currentTarget;
    dispatch(increase_product({ id: id, link: link }));
  };

  const handleSubCount = ({ currentTarget }) => {
    if (cartCount >= 1) {
      const { id } = currentTarget;
      dispatch(decrease_price({ id: id, link: link }));
    }
  };
  // console.log(params);
  return (
    <div className={styles.container}>
      <div>
        <Link className={styles.path} to={'/'}>
          Главная /{' '}
        </Link>
        <Link className={styles.path} to={`/catalog/${link}`}>
          Каталог /{' '}
        </Link>
        <span className={styles.path}>{title}</span>
      </div>
      <div className={styles.productContainer}>
        <div>
          <img
            width={'500 px'}
            height={'522px'}
            src={image.src}
            alt={image.alt}
          />
        </div>
        <div className={styles.productInfo}>
          <div>
            <div className={styles.title}>{title}</div>
          </div>
          <div>
            <div>
              <ul className={styles.list}>
                <li>нежный заварной крем</li>
                <li>ароматные лепешки</li>
                <li>ягоды</li>
              </ul>
            </div>
            <div className={styles.selectContainer}>
              <div className={styles.select}>
                <select onChange={handleChange} name="Вид" id="Вид">
                  <option value="">Вид</option>
                  <option value="Ванильный">Ванильный</option>
                  <option value="Карамельный">Карамельный</option>
                  <option value="Безлактозный">Безлактозный</option>
                  <option value="Без сахара">Без сахара</option>
                  <option
                    className={styles.option}
                    value="Без глютена и сахара"
                  >
                    Без глютена и сахара
                  </option>
                </select>
              </div>

              <div className={styles.select}>
                <select onChange={handleChange} name="Декор" id="decor">
                  <option value="">Декор</option>
                  <option value="Без декора">Без декора</option>
                  <option value="Ягоды">Ягоды</option>
                  <option value="Карамель">Карамель</option>
                  <option value="Без сахара">Без сахара</option>
                </select>
              </div>
              <div className={styles.select}>
                <select onChange={handleChange} name="Вес" id="weight">
                  <option value="">Вес готового изделия</option>
                  <option value="0.5">0,5 кг</option>
                  <option value="1">1 кг</option>
                  <option value="1.5">1,5 кг</option>
                  <option value="2">2 кг</option>
                  <option value="2.5">2,5 кг</option>
                  <option value="3">3 кг</option>
                </select>
              </div>
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.price}>{price} руб</div>
              <Modal addStyles={styles.modal}>
                <div className={styles.modalContainer}>
                  <div>Выберите количество:</div>
                  <div className={styles.counterContainer}>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubCount(e);
                      }}
                      id={id}
                      addStyles={styles.modalButton}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="5"
                        viewBox="0 0 12 4"
                        fill="none"
                      >
                        <path
                          d="M0 1.89993C0 1.07151 0.671573 0.399933 1.5 0.399933H10.5C11.3284 0.399933 12 1.07151 12 1.89993C12 2.72836 11.3284 3.39993 10.5 3.39993H1.5C0.671573 3.39993 0 2.72836 0 1.89993Z"
                          fill="#705A66"
                        />
                      </svg>
                    </Button>
                    <span>{cartCount}</span>
                    <Button
                      id={id}
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddCount(e);
                      }}
                      addStyles={styles.modalButton}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_69_487)">
                          <path
                            d="M10.2771 4.69675H7.34632V1.766C7.34632 1.04596 6.74157 0.456581 6.02127 0.456581C5.30097 0.456581 4.69622 1.04596 4.69622 1.766V4.69675H1.76547C1.04544 4.69675 0.456055 5.3015 0.456055 6.0218C0.456055 6.7421 1.04544 7.34685 1.76547 7.34685H4.69622V10.2776C4.69622 10.9976 5.30097 11.587 6.02127 11.587C6.74157 11.587 7.34632 10.9976 7.34632 10.2776V7.34685H10.2771C10.9971 7.34685 11.5865 6.7421 11.5865 6.0218C11.5865 5.3015 10.9971 4.69675 10.2771 4.69675Z"
                            fill="#705A66"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_69_487">
                            <rect
                              width="11.1304"
                              height="11.1304"
                              fill="white"
                              transform="translate(0.456055 0.456581)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Button>
                  </div>
                  <div>
                    <Button
                      onClick={() => setModal(false)}
                      addStyles={styles.buttonToCart}
                    >
                      Добавить
                    </Button>
                  </div>
                </div>
              </Modal>
              <Button
                id={id}
                onClick={() => setModal(true)}
                addStyles={styles.button}
              >
                Заказать
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselContainer}>
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
            nextButtonClassName: [
              styles.buttonCarousel,
              styles.nextButton,
            ].join(' '),
            prevButtonClassName: [
              styles.buttonCarousel,
              styles.prevButton,
            ].join(' '),
            pagingDotsClassName: styles.dots,
          }}
        >
          <img
            // onClick={() => console.log('1')}
            width={'75px'}
            style={{ cursor: 'pointer' }}
            src={image.src}
            alt="img"
          />
          <img
            // onClick={() => console.log('2')}
            style={{ cursor: 'pointer' }}
            width={'75px'}
            src={image.src}
            alt="img"
          />
          <img
            style={{ cursor: 'pointer' }}
            width={'75px'}
            src={image.src}
            alt="img"
          />
        </Carousel>
      </div>
      <div>
        <div className={styles.switchContainer}>
          <span
            className={
              active === 0
                ? [styles.switchActive, styles.switch].join(' ')
                : styles.switch
            }
            onClick={() => setActive(0)}
          >
            Описание
          </span>
          <span
            className={
              active === 1
                ? [styles.switchActive, styles.switch].join(' ')
                : styles.switch
            }
            onClick={() => setActive(1)}
          >
            Условия хранения
          </span>
          <span
            className={
              active === 2
                ? [styles.switchActive, styles.switch].join(' ')
                : styles.switch
            }
            onClick={() => setActive(2)}
          >
            Доставка
          </span>
        </div>
        <div className={styles.switchTextContainer}>
          <div
            style={{ height: '207px' }}
            className={active === 0 ? styles.switchText : styles.dots}
          >
            <span>Нежный десерт, знакомый всем нам с детства.</span>
            <span>
              Вы можете заказать классический торт без украшений, или украсить
              его сочными ягодами или карамелью.
            </span>
            <span>
              Не отказывайте себе в соблазне отведать "Наполеон"! Вы можете
              заказать торт без сахара, без глютена и без лактозы.
            </span>
          </div>
          <div
            style={{ height: '207px' }}
            className={active === 1 ? styles.switchText : styles.dots}
          >
            Хранить в холодильнике при температуре до +6°С в пределах 3-х суток.
          </div>
          <div
            className={active === 2 ? '' : styles.dots}
            style={{ height: '207px' }}
          >
            <div className={styles.switchText} style={{ height: '100px' }}>
              <span>Доставка осуществляется двумя способами:</span>
              <span>
                <p>1. Самовывоз из Печерского р-на г. Киева </p>
                <p>2. На такси (по тарифам службы такси)</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: '60px 0 40px' }} className={styles.title}>
        Также можете попробовать:
      </div>
      <div className={styles.offerContainer}>
        {offer.map((product) => (
          <div key={product.id} className={styles.offerContaine}>
            <div className={stylesProduct.hoverContainer}>
              <Link to={`/catalog/${product.link}/${product.id}`}>
                <Button params={params} addStyles={stylesProduct.buttonHover}>
                  Подробней
                </Button>
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
      </div>
    </div>
  );
};

export default Product;
