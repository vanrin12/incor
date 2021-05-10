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
  API_SEARCH: `/site/search`,
  API_SCALES: `/site/scales`,
  API_RATING_PROJECT: `/site/evaluates`,
  API_LIST_PROJECT_DETAIL: (id) => `/site/projects/${id}`,
  API_LIST_PROJECT: `/site/projects`,
  API_QUOTES: `/site/quotes`,
  API_GET_PARTNER: (partner_id) => `/site/partners/${partner_id}`,
  API_CONSTANTS: `/site/constants`,
  API_POPUP_GALLERY: `/site/popups`,
  API_HOME: `/site/home`,
  API_CHANGE_PASSWORD: '/auth/change-password',
  API_GET_LIST_LAYOUT: (layout) =>
    `/admin/constants/data-maps/layout?layout=${layout}`,
  API_GET_PARTNER_MANAGEMENT: `/admin/partners`,
};

export const API = create({
  baseURL: API_URI,
});
