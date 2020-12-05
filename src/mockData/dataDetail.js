import IMAGES from 'themes/images';

const dataDetailClient = {
  id: 1,
  title:
    'HOÀN THÀNH & BÀN GIAO CÔNG TRÌNH KHÁCH HÀNG ANH AN VÀ NHÀ THẦU CITEXCO',
  desc:
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
  subImage:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  image: IMAGES.imageSlideUrl,
};

const listRecentClient = [
  {
    id: 1,
    title:
      'HOÀN THÀNH & BÀN GIAO CÔNG TRÌNH KHÁCH HÀNG ANH AN VÀ NHÀ THẦU CITEXCO',
  },
  {
    id: 2,
    title:
      'HOÀN THÀNH & BÀN GIAO CÔNG TRÌNH KHÁCH HÀNG ANH AN VÀ NHÀ THẦU CITEXCO',
  },
  {
    id: 3,
    title:
      'HOÀN THÀNH & BÀN GIAO CÔNG TRÌNH KHÁCH HÀNG ANH AN VÀ NHÀ THẦU CITEXCO',
  },
  {
    id: 4,
    title:
      'HOÀN THÀNH & BÀN GIAO CÔNG TRÌNH KHÁCH HÀNG ANH AN VÀ NHÀ THẦU CITEXCO',
  },
];

const dataPartnerInfo = {
  logoPartner: IMAGES.imageSlideUrl,
  partnerName: 'Đối tác 1',
  rating: 5,
  partnerInfo: {
    companyName: 'CÔNG TY CỬA ĐẸP ADOOR',
    location: '83 Tô Hiệu, Hòa Minh, Liên Chiểu, TP. Đà Nẵng',
    personnelSize: '100 - 500người',
    taxCode: '0123344445',
    image: IMAGES.img_product,
    career: [
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
  },
};
export { dataDetailClient, listRecentClient, dataPartnerInfo };
