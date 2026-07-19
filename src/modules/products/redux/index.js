import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isProcessing: false,
  type: '',
  products: [],
  productDetail: {}
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getProductsSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.products = action?.data?.product?.data
      state.total = action?.data?.product?.total
    },
    getProductsFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
    getProductDetail: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getProductDetailSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.productDetail = action?.data?.product
    },
    getProductDetailFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
  },
});

const { actions, reducer } = productsSlice;

export const {
  getProducts,
  getProductsSuccess,
  getProductsFailed,
  getProductDetail,
  getProductDetailFailed,
  getProductDetailSuccess
} = actions;

export default reducer;
