import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isProcessing: false,
  type: '',
};

const projectScales = createSlice({
  name: 'project',
  initialState,
  reducers: {
    ratingProject: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },

    ratingProjectSuccess: (state, action) => {
      console.log(action, 'sssssssssssss');
      state.type = action.type;
      state.isProcessing = false;
    },
    ratingProjectFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
    resetTypeRatingProject: (state) => {
      state.type = '';
    },
  },
});

const { actions, reducer } = projectScales;

export const {
  ratingProject,
  ratingProjectSuccess,
  ratingProjectFailed,
  resetTypeRatingProject,
} = actions;

export default reducer;
