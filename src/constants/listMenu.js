import ROUTERS from './router';

const LIST_MENU = [
  {
    id: 1,
    label: 'GIỚI THIỆU',
    to: ROUTERS.PAGE_ABOUT_US,
  },
  {
    id: 2,
    label: 'DỊCH VỤ',
    to: ROUTERS.PAGE_SERVICE,
  },
  {
    id: 3,
    label: 'KHÁCH HÀNG',
    to: ROUTERS.PAGE_CLIENT,
  },
  {
    id: 5,
    label: 'HỢP TÁC',
    to: ROUTERS.PAGE_COOPERATION,
  },
  {
    id: 6,
    label: 'TUYỂN DỤNG',
    to: ROUTERS.PAGE_RECRUITMENT,
  },
  {
    id: 7,
    label: 'LIÊN HỆ',
    to: ROUTERS.CONTACT_US,
  },
];
export default LIST_MENU;
