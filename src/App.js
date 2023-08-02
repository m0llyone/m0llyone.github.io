import { Route, Routes, useLocation, redirect } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { routes } from './data/routes';
import { createContext, useContext } from 'react';
import { useState, useRef } from 'react';
import { parametres } from './pages/Product/Product';
export const AppContext = createContext();
function App() {
  const [params, setParams] = useState(parametres);
  const [basket, setBasket] = useState([]);
  const [modal, setModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          params,
          setParams,
          basket,
          setBasket,
          modal,
          setModal,
          counter,
          setCounter,
          ref,
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
