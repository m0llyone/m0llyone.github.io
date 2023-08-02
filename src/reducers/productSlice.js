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
          }
        });
      });
    },
    full_price: (state, action) => {
      state.products.forEach((item) => {
        item.products.forEach((elem) => {
          if (elem.cartCount > 0) {
            elem.reduce((acc, initial) => {
              return acc + initial.cartPrice;
            }, 0);
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
    },
  },
});

export const {
  remove_product,
  increase_product,
  decrease_price,
  remove_all_products,
  full_price,
} = productSlice.actions;
export default productSlice.reducer;
