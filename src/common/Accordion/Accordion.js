import styles from './Accordion.module.css';
import { useState, useEffect, useRef } from 'react';
import { Title } from '../Title/Title';
import { accordion } from '../../data/accordion';
import chevron from '../../assets/images/chevron.svg';

export const Accordion = () => {
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeight(`${refHeight.current.scrollHeight}px`);
  });

  const toggleState = (index) => {
    if (toggle === index) {
      return setToggle(null);
    }
    setToggle(index);
  };

  return (
    <div className={styles.container}>
      <Title title="Популярные вопросы" addStyles={styles.title} />
      {accordion.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.question} onClick={() => toggleState(index)}>
            <span
              className={
                toggle === index
                  ? [styles.itemTitle, styles.titleActive].join(' ')
                  : styles.itemTitle
              }
            >
              {item.question}
            </span>
            <img
              className={toggle === index ? styles.img : ''}
              src={chevron}
              alt="chevron"
            />
          </div>
          <div
            className={
              toggle === index
                ? [styles.active, styles.answer].join(' ')
                : styles.answer
            }
            style={{ height: toggle === index ? `${height}` : '0px' }}
            ref={refHeight}
          >
            {toggle === index ? `${item.answer}` : null}
          </div>
        </div>
      ))}
    </div>
  );
};
