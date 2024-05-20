import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../data/initialState';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: initialState,
  },

  reducers: {
    remove_product: (state, action) => {
      const { id } = action.payload;
      state.products.forEach((item) => {
        item.products.forEach((elem) => {
          if (elem.id === +id) {
            elem.cartCount = 0;
            elem.cartPrice = 0;

            let storage = JSON.parse(localStorage.getItem('basket'));
            storage.forEach((item) => {
              if (item.id === +id) {
                item.cartCount = 0;
                item.cartPrice = 0;
              }
            });
            localStorage.setItem(
              'basket',
              JSON.stringify([...storage].filter((item) => item.cartCount > 0)),
            );
          }
        });
      });
    },
    increase_product: (state, action) => {
      const { id, link } = action.payload;
      state.products.forEach((item) => {
        if (item.link === link) {
          item.products.forEach((elem) => {
            if (elem.id === +id) {
              elem.cartCount += 1;
              elem.cartPrice += elem.price;

              let storage = JSON.parse(localStorage.getItem('basket')) || [];
              if (storage.length) {
                let flag = false;
                storage.forEach((product) => {
                  if (+product.id === +id) {
                    product.cartCount += 1;
                    product.cartPrice += product.price;
                    flag = true;
                  }
                });

                if (flag) {
                  localStorage.setItem('basket', JSON.stringify([...storage]));
                } else {
                  localStorage.setItem('basket', JSON.stringify([...storage, elem]));
                }
              } else {
                localStorage.setItem('basket', JSON.stringify([elem]));
              }
            }
          });
        }
      });
    },
    decrease_price: (state, action) => {
      const { id, link } = action.payload;
      state.products.forEach((item) => {
        if (item.link === link) {
          item.products.forEach((elem) => {
            if (elem.id === +id) {
              elem.cartCount -= 1;
              elem.cartPrice -= elem.price;
            }
          });
        }
      });

      let storage = JSON.parse(localStorage.getItem('basket'));
      state.products.forEach((product) => {
        if (product.link === link) {
          storage.forEach((item) => {
            if (item.id === +id) {
              item.cartCount -= 1;
              item.cartPrice -= item.price;
            }
          });
        }
      });
      localStorage.setItem('basket', JSON.stringify(storage));
    },

    remove_all_products: (state, action) => {
      state.products.forEach((item) => {
        item.products.forEach((elem) => {
          if (elem.cartCount > 0) {
            elem.cartCount = 0;
            elem.cartPrice = 0;
          }
        });
      });
      let storage = JSON.parse(localStorage.getItem('basket'));
      storage.forEach((item) => {
        if (item.cartCount > 0) {
          item.cartCount = 0;
          item.cartPrice = 0;
        }
      });
      localStorage.clear();
    },
    add_props_product: (state, action) => {
      const { id, name, value, link } = action.payload;
      const { kind, decor, heft } = value;
      console.log(kind, heft, decor);
      state.products.forEach((item) => {
        if (item.link === link) {
          item.products.forEach((elem) => {
            if (elem.id === +id) {
              elem = { ...elem, kind: kind, decor: decor, heft: heft };
              console.log(elem);
            }
          });
        }
      });
      let storage = JSON.parse(localStorage.getItem('basket'));
      state.products.forEach((product) => {
        if (product.link === link) {
          storage.forEach((elem) => {
            if (+elem.id === +id && elem.cartCount > 0) {
              elem = { ...elem, kind: kind, decor: decor, heft: heft };
            }
          });
        }
      });
      localStorage.setItem('basket', JSON.stringify(storage));
    },
  },
});

export const {
  remove_product,
  increase_product,
  decrease_price,
  remove_all_products,
  add_props_product,
} = productSlice.actions;
export default productSlice.reducer;
