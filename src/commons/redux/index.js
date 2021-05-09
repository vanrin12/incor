import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isProcessing: false,
  layoutHeader: [],
  dataPartner: [],
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    getDetailLayout: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDetailLayoutSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.layoutHeader = data && data.map;
    },
    getDetailLayoutFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getListPartner: (state, action) => {
      state.isProcessing = true;
      state.type = action.type;
    },
    getListPartnerSuccess: (state, action) => {
      const dataPartner = action?.data?.partner?.data?.map((item) => ({
        id: item.id,
        value: item.full_name,
        label: item.full_name,
      }));

      state.type = action.type;
      state.isProcessing = false;
      state.dataPartner = dataPartner;
    },

    getListPartnerFailed: (state, action) => {
      state.isProcessing = false;
      state.type = action.type;
    },
  },
});

const { actions, reducer } = commonSlice;

export const {
  getDetailLayout,
  getDetailLayoutSuccess,
  getDetailLayoutFailed,
  getListPartner,
  getListPartnerSuccess,
  getListPartnerFailed,
} = actions;

export default reducer;
