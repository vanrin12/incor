import { createSlice } from '@reduxjs/toolkit';
import IMAGES from 'themes/images';

const initialState = {
  listBlogs: [],
  isProcessing: false,
  totalRow: 0,
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    getListBlog: (state, action) => {
      state.type = action.type;
      state.isProcessing = true;
    },
    getListBlogSuccess: (state, action) => {
      const { posts } = action?.data;
      state.type = action.type;
      state.isProcessing = false;
      state.totalRow = posts?.to;
      state.listBlogs =
        posts &&
        posts?.data &&
        posts?.data.map((item) => {
          return {
            id: item.id,
            title: item.name || '',
            date: '13:00 - 11/11/2020', //TODO UPDATE
            image: item.image || IMAGES.imgNotFound,
            desc: item.description || '',
          };
        });
    },
    getListBlogFailed: (state, action) => {
      state.type = action.type;
      state.isProcessing = false;
      state.totalRow = 0;
    },
  },
});

const { actions, reducer } = blogSlice;

export const { getListBlog, getListBlogSuccess, getListBlogFailed } = actions;

export default reducer;
