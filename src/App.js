import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { routes } from './data/routes';
import { useState, useEffect, createContext } from 'react';
import { useSelector } from 'react-redux';
import Preloader from './common/Preloader/Preloader';
export const AppContext = createContext();

function App() {
  const [basket, setBasket] = useState([]);
  const [basketPrice, setBasketPrice] = useState();
  const [modal, setModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const [props, setProps] = useState([]);
  const { status } = useSelector((state) => state.weather);
  let basketfullprice = basket.reduce((prev, curr) => {
    return prev + curr.cartPrice;
  }, 0);

  useEffect(() => {
    setBasketPrice(basketfullprice);
  }, [basket]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('props'));
    if (storage === null || !storage.length) {
      localStorage.setItem('props', JSON.stringify(props));
    } else {
      setProps([...storage]);
    }
  }, []);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('props'));
    if (storage === null || !storage.length) {
      localStorage.setItem('props', JSON.stringify(props));
    } else {
      setBasket([...storage]);
    }
  }, []);

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
          props,
          setProps,
        }}
      >
        <Header />
        <Routes>
          {routes.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.element />}
              exact
            />
          ))}
        </Routes>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
