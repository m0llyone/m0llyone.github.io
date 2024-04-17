import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { routes } from './data/routes';
import { useState, useEffect, createContext } from 'react';
import { useSelector } from 'react-redux';
import Preloader from './common/Preloader/Preloader';

import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
export const AppContext = createContext();

function App() {
  const [basket, setBasket] = useState([]);
  const [basketPrice, setBasketPrice] = useState();
  const [modal, setModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const [props, setProps] = useState([]);
  const { status } = useSelector((state) => state.weather);

  const getSelectValue = () => {
    const value = {};

    return value;
  };
  const [value, setValue] = useState(getSelectValue);

  const location = useLocation();
  const { pathname } = location;

  let basketfullprice = basket.reduce((prev, curr) => {
    return prev + curr.cartPrice;
  }, 0);

  useEffect(() => {
    setBasketPrice(basketfullprice);
  }, [basket]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('basket'));
    if (storage === null || !storage.length) {
      localStorage.setItem('basket', JSON.stringify(basket));
    } else {
      setBasket([...storage]);
    }
    // console.log(basket);
  }, []);

  // useEffect(() => {
  //   const storage = JSON.parse(localStorage.getItem('basket'));
  //   if (storage === null || !storage.length) {
  //     localStorage.setItem('basket', JSON.stringify(value));
  //   } else {
  //     setValue([...storage]);
  //   }
  // }, []);

  if (status === 'loading') {
    return <Preloader />;
  }

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          basketPrice,
          setBasketPrice,
          basket,
          setBasket,
          modal,
          setModal,
          counter,
          setCounter,
          value,
          setValue,
        }}
      >
        <Header />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {routes.map((link) => (
              <Route
                key={link.path}
                path={link.path}
                element={<link.element />}
                preve
                exact
              />
            ))}
          </Routes>
        </AnimatePresence>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
