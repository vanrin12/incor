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
  API_GET_AREAS: `/site/areas`,
  API_SPACE_DIVISION: `/site/space-division`,
  API_SPACE_TYPE: `/site/space-type`,
  API_CONTACT_FORM: `/site/form-requests`,
};

export const API = create({
  baseURL: API_URI,
});
