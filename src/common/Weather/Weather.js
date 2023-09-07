import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../reducers/weatherSlice';
import styles from './Weather.module.css';

export const Weather = () => {
  const { status, error, weather } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  let time = weather.time;
  time = String(time).match(/\d{2}\:\d{2}/);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getWeather());
    }
  }, [status, dispatch]);

  return (
    <div className={styles.container}>
      {status === 'succeeded' ? (
        <div className={styles.time}> {time} </div>
      ) : (
        <div className={styles.error}>Error: {error}</div>
      )}
    </div>
  );
};
