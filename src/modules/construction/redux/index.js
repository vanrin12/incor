import { createSlice } from '@reduxjs/toolkit';
import { getTotalAmountPrice, getTotalAmountPaid } from 'helpers/validate';

const initialState = {
  isProcessing: false,
  isProcessingProject: false,
  type: '',
  dataProjectDetail: {},
  dataListConstruction: [],
  totalAmountPrice: '0',
  totalAmountPaid: '0',
  totalAmountMoney: '0',
  listPartner: [],
  listSubPartner: [],
  dataListConstructionTem: [],
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
      const { rating } = action;
      state.type = action.type;
      state.isProcessing = false;
      state.dataListConstruction = state?.dataListConstruction.map((item) => ({
        ...item,
        rating:
          item.id === rating.construction_item_id ? rating.rate : item.rating,
      }));

      state.dataListConstructionTem = state?.dataListConstructionTem.map(
        (item) => ({
          ...item,
          rating:
            item.id === rating.construction_item_id ? rating.rate : item.rating,
        })
      );
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
      state.dataListConstruction = data?.construction_items?.map((item) => {
        return {
          id: item.id,
          category: item.name,
          hashtag: item?.category,
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
          paid: item.paid || 0,
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
      state.dataListConstructionTem = data?.construction_items?.map((item) => {
        return {
          id: item.id,
          category: item.name,
          hashtag: item?.category,
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
          paid: item.paid || 0,
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
      state.totalAmountPrice =
        getTotalAmountPrice(data?.construction_items) || '0';
      state.totalAmountPaid =
        getTotalAmountPaid(data?.construction_items) || '0';
      state.totalAmountMoney =
        (
          parseInt(state.totalAmountPrice.replace(/,/g, ''), 10) -
          parseInt(state.totalAmountPaid.replace(/,/g, ''), 10)
        ).toLocaleString('en') || '0';

      const partner = [
        {
          id: 0,
          value: 0,
          label: 'Chọn',
        },
      ].concat(
        data?.construction_items?.map((item) => {
          return {
            id: item.id,
            value: item.id,
            label: item.name,
          };
        })
      );

      const subPartner = [
        {
          id: 0,
          value: 0,
          label: 'Chọn',
        },
      ].concat(
        data?.construction_items?.map((item) => {
          return {
            id: item.id,
            value: item.id,
            label: item.category,
          };
        })
      );

      const dataArrPartner = partner.map((item) => {
        return [item.label, item];
      });
      const maparrPartner = new Map(dataArrPartner); // create key value pair from array of array
      state.listPartner = [...maparrPartner.values()]; // converting back to array from mapobject

      const dataArr = subPartner.map((item) => {
        return [item.label, item];
      });
      const maparr = new Map(dataArr); // create key value pair from array of array
      state.listSubPartner = [...maparr.values()]; // converting back to array from mapobject
    },
    getProjectDetailFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingProject = false;
      state.totalAmountPrice = '0';
      state.totalAmountPaid = '0';
      state.dataListConstruction = [];
      state.totalAmountMoney = '0';
      state.listPartner = [];
      state.listSubPartner = [];
    },

    filterSearchDetail: (state, action) => {
      const { category, partner } = action.payload;

      const finItemListConstruction =
        category !== 0
          ? state?.dataListConstruction?.filter(
              (item) => item.id === partner || item.id === category
            )
          : state?.dataListConstructionTem;
      state.dataListConstruction = finItemListConstruction;
      state.totalAmountPrice =
        getTotalAmountPrice(finItemListConstruction) || '0';
      state.totalAmountPaid =
        getTotalAmountPaid(finItemListConstruction) || '0';
      state.totalAmountMoney =
        (
          parseInt(state.totalAmountPrice.replace(/,/g, ''), 10) -
          parseInt(state.totalAmountPaid.replace(/,/g, ''), 10)
        ).toLocaleString('en') || '0';
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
  filterSearchDetail,
} = actions;

export default reducer;
