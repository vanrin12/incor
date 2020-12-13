import ROUTERS from './router';

const LIST_MENU = [
  {
    id: 1,
    label: 'GIỚI THIỆU',
    to: ROUTERS.PAGE_ABOUT_US,
    name: 'about',
  },
  {
    id: 2,
    label: 'DỊCH VỤ',
    to: ROUTERS.PAGE_SERVICE,
    name: 'service',
  },
  {
    id: 3,
    label: 'KHÁCH HÀNG',
    to: ROUTERS.PAGE_BLOG,
    name: 'blog',
  },
  {
    id: 5,
    label: 'HỢP TÁC',
    to: ROUTERS.PAGE_COOPERATION,
    name: 'cooperation',
  },
  {
    id: 6,
    label: 'TUYỂN DỤNG',
    to: ROUTERS.PAGE_RECRUITMENT,
    name: 'recruitment',
  },
  {
    id: 7,
    label: 'LIÊN HỆ',
    to: ROUTERS.CONTACT_US,
    name: 'contact-us',
  },
];
export default LIST_MENU;
