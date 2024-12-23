import { createSlice } from '@reduxjs/toolkit';
import IMAGES from 'themes/images';

const initialState = {
  isProcessing: false,
  type: '',
  dataListAreas: [],
  dataListSpaceType: [],
  dataListSpaceDivision: [],
  listDataProductCompany: [],
  listDataProductFormSearch: [],
  dataListHashTags: [],
  totalRows: 0,
  keywordHashTag: '',
  sliderMain: {},
  aboutUsMain: {},
  advisoryMain: {},
  customerExperience: [],
  promotionMain: {},
  dataConstant: {},
  customerExperienceName: '',
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
    getSearchProduct: (state, action) => {
      state.type = action.type;
      state.isProcessingSearch = true;
      state.totalRows = 0;
    },
    getSearchProductSuccess: (state, action) => {
      const { listProject, params } = action?.data;
      const { product } = listProject;
      const { type } = params;
      state.type = action.type;
      state.isProcessingSearch = false;
      state.listDataProductCompany = product?.data?.map((item) => {
        return {
          areaName: item.address,
          rating: item.avg,
          companyId: item.company_id,
          companyImage: item.company_image || IMAGES.imgNotFound,
          companyName: item.company_name,
          image: item.image,
          name: item.name,
          id: item.id,
          partnerId: item.partner_id,
          label: type === 'product' ? item.name : item.company_name,
        };
      });
      state.totalRows = product?.total || 0;
    },
    getSearchProductFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingSearch = false;
    },

    getSearchProductFormSearch: (state, action) => {
      state.type = action.type;
    },
    getSearchProductFormSearchSuccess: (state, action) => {
      const { listProject, params } = action?.data;
      const { product } = listProject;
      const { type } = params;
      state.type = action.type;
      state.listDataProductFormSearch = product?.data?.map((item) => {
        return {
          value: item.id,
          id: item.partner_id,
          label: type === 'product' ? item.name : item.company_name,
        };
      });
    },
    getSearchProductFormSearchFailed: (state, action) => {
      state.type = action.type;
    },
    resetGetSearchProduct: (state) => {
      state.type = '';
      state.listDataProductFormSearch = [];
      state.listDataProductCompany = [];
    },
    getListHashTag: (state, action) => {
      state.type = action.type;
      state.isProcessingSearch = true;
    },

    getListHashTagSuccess: (state, action) => {
      const { data } = action;
      state.type = action.type;
      state.isProcessingSearch = false;
      state.keywordHashTag = data?.constant?.hashtag || '';
      state.dataConstant = {
        address: data?.constant?.address,
        companyName: data?.constant?.companyName,
        copyRight: data?.constant?.copyRight,
        descCompany: data?.constant?.descCompany,
        email: data?.constant?.email,
        linkFacebook: data?.constant?.facebook,
        linkYoutube: data?.constant?.youTube,
        logo: data?.constant?.logo,
        logoCongThuong: data?.constant?.logoCongThuong,
        logoFooter: data?.constant?.logoFooter,
        phone: data?.constant?.phone,
        tagline: data?.constant?.tagline,
        nameWebsite: data?.constant?.nameWebsite,
        favicon: data?.constant?.favicon,
        titleForm: data?.constant?.titleForm,
        imagePartner: data?.constant.imagePartner,
      };
      state.dataListHashTags =
        data?.constant?.hashtag?.split(',').map((item, index) => {
          return {
            id: index + 1,
            value: item && item.trim(),
            label: item && item.trim(),
          };
        }) || [];
    },
    getListHashTagFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingSearch = false;
    },
    getDataPageHome: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDataPageHomeSuccess: (state, action) => {
      const {
        about_us,
        advisory,
        customer_experience,
        promotion,
        slider,
        customer_experience_name,
      } = action.data;
      state.type = action.type;
      state.isProcessing = false;
      state.sliderMain = slider;
      state.aboutUsMain = about_us;
      state.advisoryMain = advisory;
      state.customerExperience = customer_experience;
      state.customerExperienceName = customer_experience_name;
      state.promotionMain = promotion;
    },
    getDataPageHomeFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
  },
});

const { actions, reducer } = homeSlice;

export const {
  getDataPageHome,
  getDataPageHomeSuccess,
  getDataPageHomeFailed,
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
  getSearchProduct,
  getSearchProductSuccess,
  getSearchProductFailed,
  getSearchProductFormSearch,
  getSearchProductFormSearchSuccess,
  getSearchProductFormSearchFailed,
  resetGetSearchProduct,
  getListHashTag,
  getListHashTagSuccess,
  getListHashTagFailed,
} = actions;

export default reducer;
