import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isProcessing: false,
  isProcessingProject: false,
  type: '',
  dataProjectDetail: {},
  dataListConstruction: [],
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
    getProjectDetail: (state, action) => {
      state.type = action.type;
      state.isProcessingProject = true;
    },
    getProjectDetailSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessingProject = false;
      state.dataProjectDetail = {
        address: data.address || '',
        name: data.name || '',
        partnerName: data?.partner?.name || '',
      };
      state.dataListConstruction = data?.construction_items.map((item) => {
        return {
          id: item.id,
          category: item.name,
          subCategory: item?.user_name,
          technicalDesc: {
            name: item?.user_name,
            desc: item.description,
          },
          amount: item.amount,
          totalCost: (item.amount && item.amount.toLocaleString('en')) || 0,
          date: `${item.estimate} ${item.construction_time}`,
          progress:
            (item.progress_begin &&
              item.progress_end &&
              parseInt((item.progress_begin / item.progress_end) * 100, 10)) ||
            0,
          totalAmountPaid: (item.paid && item.paid.toLocaleString('en')) || 0,
          totalMoney: `${(item.amount - item.paid).toLocaleString('en')}`,
          remark: item.note,
          rating:
            item.progress_begin &&
            item.progress_end &&
            parseInt((item.progress_begin / item.progress_end) * 100, 10) >= 75
              ? item.avg
              : '',
        };
      });
      // state.listPartner = data?.partner.map((item) => {
      //   return {
      //     id: item.id,
      //     value: item.id,
      //     label: item.name,
      //   };
      // });
    },
    getProjectDetailFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingProject = false;
    },
  },
});

const { actions, reducer } = projectScales;

export const {
  ratingProject,
  ratingProjectSuccess,
  ratingProjectFailed,
  resetTypeRatingProject,
  getProjectDetail,
  getProjectDetailSuccess,
  getProjectDetailFailed,
} = actions;

export default reducer;
