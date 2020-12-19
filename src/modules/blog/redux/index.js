import { createSlice } from '@reduxjs/toolkit';
import IMAGES from 'themes/images';

const initialState = {
  listBlogs: [],
  isProcessing: false,
  totalRow: 0,
  dataDetailBlog: {},
  relateBlog: [],
  isProcessingCategory: false,
  listBlogCategories: [],
  listBlogOffCategory: [],
  nameCategory: '',
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    getListBlog: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
      state.totalRow = 0;
    },
    getListBlogSuccess: (state, action) => {
      const { posts } = action?.data;
      state.type = action.type;
      state.isProcessing = false;
      state.totalRow = posts?.total;
      state.listBlogs =
        posts &&
        posts?.data &&
        posts?.data.map((item) => {
          return {
            id: item.id,
            title: item.name || '',
            date: '13:00 - 11/11/2020', // TODO UPDATE
            image: item.image || IMAGES.imgNotFound,
            desc: item.description || '',
          };
        });
    },
    getListBlogFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
    getDetailBlog: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getDetailBlogSuccess: (state, action) => {
      const { post } = action?.data;
      state.type = action.type;
      state.isProcessing = false;
      state.dataDetailBlog = {
        id: post?.id,
        categoryId: post?.category_id,
        category: post?.category,
        content: post?.content,
        name: post?.name,
        image: post?.image || IMAGES.bg_title_client,
      };
      state.relateBlog = post?.relate?.map((item) => {
        return {
          categoryId: item.category_id,
          content: item.content,
          id: item.id,
          name: item.name,
        };
      });
    },
    getDetailBlogFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
    },
    getListCategory: (state, action) => {
      state.type = action.type;
      state.isProcessingCategory = true;
      state.totalRow = 0;
    },
    getListCategorySuccess: (state, action) => {
      const { data } = action?.data?.categories;
      state.type = action.type;
      state.isProcessingCategory = false;
      state.listBlogCategories = data || [];
      state.totalRow = data?.total;
    },
    getListCategoryFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingCategory = false;
    },
    getListBlogOffCategory: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
      state.totalRow = 0;
    },
    getListBlogOffCategorySuccess: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      const { category } = action?.data;
      state.type = action.type;
      state.isProcessing = false;
      state.totalRow = category?.posts?.total;
      state.nameCategory = category?.name || '';
      state.listBlogOffCategory =
        category &&
        category?.posts &&
        category?.posts?.data?.map((item) => {
          return {
            id: item.id,
            title: item.name || '',
            date: '13:00 - 11/11/2020', // TODO UPDATE
            image: item.image || IMAGES.imgNotFound,
            desc: item.description || '',
          };
        });
    },
    getListBlogOffCategoryFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.listBlogOffCategory = [];
      state.nameCategory = '';
    },
  },
});

const { actions, reducer } = blogSlice;

export const {
  getListBlog,
  getListBlogSuccess,
  getListBlogFailed,
  getDetailBlog,
  getDetailBlogSuccess,
  getDetailBlogFailed,
  getListCategory,
  getListCategorySuccess,
  getListCategoryFailed,
  getListBlogOffCategory,
  getListBlogOffCategorySuccess,
  getListBlogOffCategoryFailed,
} = actions;

export default reducer;
