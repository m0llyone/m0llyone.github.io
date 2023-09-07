import { Route, Routes, useParams } from 'react-router-dom';
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
  const { status } = useSelector((state) => state.weather);
  let basketfullprice = basket.reduce((prev, curr) => {
    return prev + curr.cartPrice;
  }, 0);

  useEffect(() => {
    setBasketPrice(basketfullprice);
  }, [basket]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('basket'));
    if (storage === null || !storage.length) {
      localStorage.setItem('basket', JSON.stringify(basket));
    } else {
      setBasket([...storage]);
    }
  }, []);

  if (status === 'loading') {
    return <Preloader />;
  }

  return (
    <div className="App">
      {/* <Preloader /> */}
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
