// import { createSlice } from '@reduxjs/toolkit';
// import { persistStore, persistReducer, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const propsSlice = createSlice({
//   name: 'props',
//   initialState: {},
//   reducers: {
//     add_props_product: (state, action) => {
//       const { id, name, value, link } = action.payload;
//       state.products.forEach((item) => {
//         if (item.link === link) {
//           item.products.forEach((elem) => {
//             if (elem.id === +id && elem.cartCount > 0) {
//               elem = { ...elem, [name]: value };
//             }
//           });
//         }
//       });
//       let storage = JSON.parse(localStorage.getItem('props'));
//       state.products.forEach((product) => {
//         if (product.link === link) {
//           storage.forEach((elem) => {
//             if (+elem.id === +id && elem.cartCount > 0) {
//               elem = { ...elem, [name]: value };
//             }
//           });
//         }
//       });
//       localStorage.setItem('props', JSON.stringify(storage));
//     },
//   },
// });

// const persistReducer = persistReducer(persistConfig);

// export const { add_props_product } = propsSlice.actions;
// export default propsSlice.reducer;
