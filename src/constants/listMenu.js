import ROUTERS from './router';

const LIST_MENU = [
  {
    id: 1,
    label: 'GIỚI THIỆU',
    to: `${ROUTERS.PAGE_BLOG}/gioi-thieu`,
    name: 'gioi-thieu',
  },
  {
    id: 2,
    label: 'DỊCH VỤ',
    to: `${ROUTERS.PAGE_BLOG}/dich-vu`,
    name: 'dich-vu',
  },
  {
    id: 3,
    label: 'KHÁCH HÀNG',
    to: `${ROUTERS.PAGE_BLOG}/khach-hang`,
    name: 'khach-hang',
  },
  {
    id: 5,
    label: 'HỢP TÁC',
    to: `${ROUTERS.PAGE_BLOG}/hop-tac`,
    name: 'hop-tac',
  },
  {
    id: 6,
    label: 'TUYỂN DỤNG',
    to: `${ROUTERS.PAGE_BLOG}/tuyen-dung`,
    name: 'tuyen-dung',
  },
  {
    id: 7,
    label: 'LIÊN HỆ',
    to: `${ROUTERS.PAGE_BLOG}/lien-he`,
    name: 'lien-he',
  },
];
export default LIST_MENU;
