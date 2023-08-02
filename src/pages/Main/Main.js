import { Title } from '../../common/Title/Title';
import styles from './Main.module.css';
import cake from '../../assets/images/mainCake.png';
import box from '../../assets/images/box.svg';
import scooter from '../../assets/images/scooter.svg';
import cash from '../../assets/images/cash.svg';
import anna from '../../assets/images/anna.png';
import { Accordion } from '../../common/Accordion/Accordion';
import { Form } from '../../components/Form/Form';
import { Banner } from '../../components/Banner/Banner';
import { Navigation } from '../../components/Navigation/Navigation';
import { Slider } from '../../components/Slider/Slider';
import { Button } from '../../common/Button/Button';
import { instImages } from '../../data/instImages';
import { AppContext } from '../../App';
import { useContext } from 'react';

const Main = () => {
  const { ref } = useContext(AppContext);
  return (
    <>
      <Banner />
      <Navigation />
      <Slider />
      <div className={styles.background}>
        <div className={styles.container}>
          <Title title="Почему Grann?" addStyles={styles.title} />
          <div className={styles.mainContainer}>
            <div className={styles.pictureContainer}>
              <img src={cake} alt="cake" />
            </div>
            <div className={styles.textContainer}>
              <div>
                <div className={styles.subtitle}>
                  ВСЕ ИНГРЕДИЕНТЫ СВЕЖИЕ И КАЧЕСТВЕННЫЕ!
                </div>
                <span ref={ref} className={styles.text}>
                  Я заказываю продукты только у поставщиков, которые имеют
                  сертификаты качества.
                </span>
              </div>
              <div>
                <div className={styles.subtitle}>
                  ВОЗМОЖНОСТЬ ЗАКАЗАТЬ ДЕСЕРТ СОГЛАСНО ВАШИХ ПОЖАЛЕНИЙ
                </div>
                <span className={styles.text}>
                  Если по каким-либо причинам вы не употребляете отдельные
                  продукты десерта, есть возможность сделать заказ по вашим
                  пожеланиям.
                </span>
              </div>
              <div>
                <div className={styles.subtitle}>УДОБНЫЙ ВЕС ТОРТА</div>
                <div className={styles.subtitleFlex}>
                  <span className={styles.text}>
                    Не обязательно ждать праздника, чтобы заказать вкусненькое.
                    Наша кондитерская делает миниторты и десерты.
                  </span>

                  <span className={styles.text}>
                    Минимальный вес заказа: Наполеон и медовик – от 0,5 кг.
                    Муссовые торты – от 0,8 кг.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Title title="Доставка и оплата" addStyles={styles.deliveryTitle} />
          <div className={styles.deliveryContainer}>
            <div className={styles.delivery}>
              <img style={{ marginBottom: '35px' }} src={box} alt="delivery" />
              <span className={styles.subtitle}>САМОВЫЗОВ</span>
              <span className={styles.deliveryText}>
                Самовывоз из Печерского р-на, г. Киев
              </span>
            </div>
            <div className={[styles.delivery, styles.deliveryBorder].join(' ')}>
              <img
                style={{ marginBottom: '35px' }}
                src={scooter}
                alt="delivery"
              />
              <span className={styles.subtitle}>ДОСТАВКА</span>
              <span className={styles.deliveryText}>
                Доставка на такси (по тарифам службы такси)
              </span>
            </div>
            <div className={styles.delivery}>
              <img style={{ marginBottom: '35px' }} src={cash} alt="cash" />
              <span className={styles.subtitle}>ПРЕДОПЛАТА</span>
              <span className={styles.deliveryText}>
                Подписка на карту в размере 50% от суммы заказа
              </span>
            </div>
          </div>

          <div className={styles.aboutContainer}>
            <div>
              <img src={anna} alt="anna" />
            </div>
            <div>
              <Title title="Обо мне" addStyles={styles.aboutTitle} />
              <div className={styles.aboutContainerText}>
                <div className={styles.aboutName}>
                  <span>АННА КОСТРОМА</span>
                  <span style={{ fontSize: '16px' }}>
                    Основательница кондитерской Grann Pastry
                  </span>
                </div>
                <div className={styles.aboutText}>
                  <div>От хобби к собственному делу.</div>Я закончила DGF
                  International Culinary School в Киеве, а впоследствии училась
                  в одной из самых известных школ гостиничного сервиса и
                  кулинарии в мире Le Cordon Bleu (Франция). Свое дело начала
                  после того, как получила опыт и работала в одном из крупнейших
                  кондитерских цехов Грузии (1500 кв.м.).
                  <div>
                    Пока начала личный бренд и строю собственный кондитерский
                    цех. Моя работа меня вдохновляет. Благодаря моим сладостям,
                    я могу дарить счастливые моменты для вас!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form />
      <Accordion />
      <Title title="Instagram" addStyles={styles.titleInstagram} />
      <div className={styles.instContainer}>
        <div className={styles.imgContainer}>
          {instImages.map((img) => (
            <div key={img.id}>
              <img src={img.src} alt="img" />
            </div>
          ))}
        </div>
        <Button addStyles={styles.buttonToInst}>Перейти на страницу</Button>
      </div>
    </>
  );
};

export default Main;
