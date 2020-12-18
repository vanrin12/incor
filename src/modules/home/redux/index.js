import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isProcessing: false,
  type: '',
  dataListAreas: [],
  dataListSpaceType: [],
  dataListSpaceDivision: [],
};

const homeSlice = createSlice({
  name: 'homes',
  initialState,
  reducers: {
    getListAreas: (state, action) => {
      state.type = action.type;
    },
    getListAreasSuccess: (state, action) => {
      const { areas } = action?.data;
      state.type = action.type;
      state.dataListAreas =
        areas?.map((item) => {
          return {
            id: item.id,
            value: item.id,
            label: item.name,
          };
        }) || [];
    },
    getListAreasFailed: (state, action) => {
      state.type = action.type;
    },
    getListSpaceType: (state, action) => {
      state.type = action.type;
    },
    getListSpaceTypeSuccess: (state, action) => {
      const { type } = action?.data;
      state.type = action.type;
      state.dataListSpaceType = type?.map((item) => {
        return {
          id: item.id,
          value: item.id,
          label: item.name,
          division: item?.division?.map((subItem) => {
            return {
              id: subItem.id,
              value: subItem.id,
              label: subItem.name,
            };
          }),
        };
      });
    },
    getListSpaceTypeFailed: (state, action) => {
      state.type = action.type;
    },
    getSpaceDivisionSelecting: (state, action) => {
      const { payload } = action;
      const dataSelecting =
        state.dataListSpaceType &&
        state.dataListSpaceType.find((item) => item.id === payload);
      state.dataListSpaceDivision = dataSelecting?.division || [];
    },
    formRequest: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    formRequestSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
    formRequestFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
  },
});

const { actions, reducer } = homeSlice;

export const {
  getListAreas,
  getListAreasSuccess,
  getListAreasFailed,
  getListSpaceType,
  getListSpaceTypeSuccess,
  getListSpaceTypeFailed,
  getSpaceDivisionSelecting,
  formRequest,
  formRequestSuccess,
  formRequestFailed,
} = actions;

export default reducer;
