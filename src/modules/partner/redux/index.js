import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import IMAGES from 'themes/images';

const initialState = {
  isProcessingProject: false,
  isProcessingQuotes: false,
  isProcessing: false,
  type: '',
  dataListProject: [],
  dataPartnerInfo: {},
  listEvaluate: [],
  listProductPartner: [],
  listConstructions: [],
  totalRows: 0,
  listGalleryProduct: [],
  isProcessingGallery: false,
};

const partnerSlice = createSlice({
  name: 'partner',
  initialState,
  reducers: {
    getListProject: (state, action) => {
      state.type = action.type;
      state.isProcessingProject = true;
    },
    getListProjectSuccess: (state, action) => {
      const { project } = action?.data;
      state.type = action.type;
      state.isProcessingProject = false;
      state.dataListProject = project?.map((item) => {
        return {
          id: item.id,
          name: item.name,
          address: item.address,
        };
      });
    },
    getListProjectFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingProject = false;
    },
    quotesProjects: (state, action) => {
      state.type = action.type;
      state.isProcessingQuotes = true;
    },
    quotesProjectsSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessingQuotes = false;
    },
    quotesProjectsFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingQuotes = false;
    },
    resetTypeQuotesProject: (state) => {
      state.type = '';
      state.isProcessingQuotes = false;
    },

    getListPartnerProjects: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getListPartnerProjectsSuccess: (state, action) => {
      // company_career: ""// TODO
      state.type = action.type;
      const { partner } = action?.data;
      state.dataPartnerInfo = {
        partnerId: partner?.id,
        logoPartner: partner?.partner_image || IMAGES.imgNotFound,
        partnerName: partner?.partner_name || '',
        rating: (partner?.avg && parseInt(partner?.avg, 10)) || 0,
        bgImage: partner?.company_image || IMAGES.imgNotFound,
        companyName: partner?.company_name || '',
        location: partner?.company_address || '',
        personnelSize: `${partner?.scale_name} Người` || '',
        taxCode: partner?.company_tax_code || '',
        image: partner?.company_image || IMAGES.imgNotFound,
        companyId: partner?.company_id,
        email: partner?.company_email || '',
        career: partner?.company_career?.split(',').map((item, index) => {
          return {
            id: index + 1,
            name: item,
          };
        }) || [
          {
            id: 1,
            name: 'Sofa',
          },
          {
            id: 2,
            name: 'Giừơng ngủ',
          },
          {
            id: 3,
            name: 'Thạch cao',
          },
        ],
      };
      state.listEvaluate = partner?.evaluate?.data.map((item) => {
        return {
          id: item.id,
          content: item.content,
          createdAt:
            item.created_at &&
            moment(item.created_at).format('HH:mm - DD.MM.YYYY'),
          rate: item.rate,
          user: item.user,
          userAvatar: item.user_avatar || IMAGES.imgNotFound,
        };
      });

      state.listProductPartner = partner?.products || [];
      state.listConstructions = partner?.constructions || [];
      state.isProcessing = false;
      state.totalRows = partner?.evaluate?.total || 0;
    },
    getListPartnerProjectsFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },

    getListGallery: (state, action) => {
      state.type = action.type;
      state.isProcessingGallery = true;
    },
    getListGallerySuccess: (state, action) => {
      const { popups } = action?.data;
      state.type = action.type;
      state.isProcessingGallery = false;
      state.listGalleryProduct =
        popups &&
        popups.map((item, index) => {
          return {
            id: index + 1,
            original: item.image,
            thumbnail: item.image,
          };
        });
    },
    getListGalleryFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingGallery = false;
    },
    resetTypeGalleryProduct: (state) => {
      state.type = '';
      state.isProcessingGallery = false;
    },
  },
});

const { actions, reducer } = partnerSlice;

export const {
  getListProject,
  getListProjectSuccess,
  getListProjectFailed,
  quotesProjects,
  quotesProjectsSuccess,
  quotesProjectsFailed,
  resetTypeQuotesProject,
  getListPartnerProjects,
  getListPartnerProjectsSuccess,
  getListPartnerProjectsFailed,
  getListGallery,
  getListGallerySuccess,
  getListGalleryFailed,
  resetTypeGalleryProduct,
} = actions;

export default reducer;
