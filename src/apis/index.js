/* eslint-disable camelcase */
// import libs
import { create } from 'apisauce';

const API_URI = process.env.REACT_APP_API_URL;

export const ROUTES = {
  API_LOGIN: `auth/login`,
  API_LOGOUT: `auth/logout`,
  API_BLOG: `site/blogs`,
  API_DETAIL_BLOG: (blogId) => `/site/blogs/${blogId}`,
  API_GET_CATEGORY_BLOG: `/site/categories`,
  API_LIST_BLOG_OFF_CATEGORY: (slug) => `/site/categories/${slug}`,
};

export const API = create({
  baseURL: API_URI,
});
