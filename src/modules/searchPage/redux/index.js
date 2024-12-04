import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isProcessing: false,
  type: '',
  dataListScales: [],
  totalPage: 0,
};

const searchScales = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getListScales: (state, action) => {
      state.type = action.type;
    },
    getListScalesSuccess: (state, action) => {
      const { areas } = action?.data;
      state.type = action.type;
      state.dataListScales =
        areas?.map((item) => {
          return {
            id: item.id,
            value: item.id,
            label: `${item.name} Người`,
          };
        }) || [];
    },
    getListScalesFailed: (state, action) => {
      state.type = action.type;
    },
  },
});

const { actions, reducer } = searchScales;

export const {
  getListScales,
  getListScalesSuccess,
  getListScalesFailed,
} = actions;

export default reducer;
