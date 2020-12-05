import IMAGES from 'themes/images';

const listConstruction = {
  dataInfo: {
    projectOfName: 'Dự án 1',
    companyName: 'Cty TNHH  một thành viên ABC',
    address: 'Số 1, Mai đăng chơn, P.2, Q. Ngũ hành sơn, TP. Đà Nẵng',
  },
  dataList: [
    {
      id: 1,
      category: 'GIA PHÁT THỊNH',
      subCategory: 'Sơn Dulux',
      technicalDesc: {
        name: 'Sơn chống thấm',
        desc:
          '- Sơn chống thấm Dulux Aquatech flex waterproofing \n - Sơn kiềm WeatherGard Sealer \n Diện tích: 320',
      },
      totalCost: '30,000,000',
      date: '5 ngày',
      progress: 75,
      totalAmountPaid: '25,000,000',
      totalMoney: '30,000,000',
      remark: 'Đang chờ thanh toán',
      rating: '',
    },
    {
      id: 2,
      category: 'GIA PHÁT THỊNH',
      subCategory: 'Sơn Dulux',
      technicalDesc: {
        name: 'Sơn chống thấm',
        desc:
          '- Sơn chống thấm Dulux Aquatech flex waterproofing \n - Sơn kiềm WeatherGard Sealer \n - Sơn kiềm WeatherGard Sealer \n Diện tích: 320',
      },
      totalCost: '130,000,000',
      date: '5 ngày',
      progress: 20,
      totalAmountPaid: '125,000,000',
      totalMoney: '130,000,000',
      remark: 'Đang chờ thanh toán',
      rating: '',
    },
    {
      id: 3,
      category: 'GIA PHÁT THỊNH',
      subCategory: 'Sơn Dulux',
      technicalDesc: {
        name: 'Sơn chống thấm',
        desc:
          '- Sơn chống thấm Dulux Aquatech flex waterproofing \n - Sơn kiềm WeatherGard Sealer \n Diện tích: 320',
      },
      totalCost: '1,130,000,000',
      date: '5 ngày',
      progress: 98,
      totalAmountPaid: '1,025,000,000',
      totalMoney: '1,130,000,000',
      remark: 'Đang chờ thanh toán',
      rating: 5,
    },
    {
      id: 4,
      category: 'GIA PHÁT THỊNH',
      subCategory: 'Sơn Dulux',
      technicalDesc: {
        name: 'Sơn chống thấm',
        desc:
          '- Sơn chống thấm Dulux Aquatech flex waterproofing \n - Sơn kiềm WeatherGard Sealer \n Diện tích: 320',
      },
      totalCost: '30,000,000',
      date: '5 ngày',
      progress: 0,
      totalAmountPaid: '25,000,000',
      totalMoney: '30,000,000',
      remark: 'Đang chờ thanh toán',
      rating: '',
    },
    {
      id: 5,
      category: 'GIA PHÁT THỊNH',
      subCategory: 'Sơn Dulux',
      technicalDesc: {
        name: 'Sơn chống thấm',
        desc:
          '- Sơn chống thấm Dulux Aquatech flex waterproofing \n - Sơn kiềm WeatherGard Sealer \n Diện tích: 320',
      },
      totalCost: '30,000,000',
      date: '5 ngày',
      progress: 75,
      totalAmountPaid: '25,000,000',
      totalMoney: '30,000,000',
      remark: 'Đang chờ thanh toán',
      rating: '',
    },
    {
      id: 6,
      category: 'GIA PHÁT THỊNH',
      subCategory: 'Sơn Dulux',
      technicalDesc: {
        name: 'Sơn chống thấm',
        desc:
          '- Sơn chống thấm Dulux Aquatech flex waterproofing \n - Sơn kiềm WeatherGard Sealer \n Diện tích: 320',
      },
      totalCost: '300,000,000',
      date: '120 ngày',
      progress: 100,
      totalAmountPaid: '205,000,000',
      totalMoney: '300,000,000',
      remark: 'Đang chờ thanh toán',
      rating: 4,
    },
  ],
  dataTotal: {
    totalCost: '90,000,000',
    totalAmountPaid: '90,000,000',
    totalMoney: '90,000,000',
  },
};

const listPartner = [
  {
    id: 1,
    value: 'GIA PHÁT THỊNH',
    label: 'GIA PHÁT THỊNH',
  },
  {
    id: 2,
    value: 'GIA PHÁT THỊNH A',
    label: 'GIA PHÁT THỊNH A',
  },
  {
    id: 3,
    value: 'GIA PHÁT THỊNH B',
    label: 'GIA PHÁT THỊNH B',
  },
  {
    id: 4,
    value: 'GIA PHÁT THỊNH C',
    label: 'GIA PHÁT THỊNH C',
  },
  {
    id: 5,
    value: 'GIA PHÁT THỊNH D',
    label: 'GIA PHÁT THỊNH D',
  },
];

const listCategory = [
  {
    id: 1,
    value: 'Sơn Dulux',
    label: 'Sơn Dulux',
  },
  {
    id: 2,
    value: 'Sơn Dulux a',
    label: 'Sơn Dulux a',
  },
  {
    id: 3,
    value: 'Sơn Dulux b',
    label: 'Sơn Dulux b',
  },
];

const listDataClient = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit',
    date: '13:00 - 11/11/2020',
    image: IMAGES.img_client,
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit',
    date: '13:00 - 11/11/2020',
    image: IMAGES.img_client,
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit',
    date: '13:00 - 11/11/2020',
    image: IMAGES.img_client,
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit',
    date: '13:00 - 11/11/2020',
    image: IMAGES.img_client,
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ',
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit',
    date: '13:00 - 11/11/2020',
    image: IMAGES.img_client,
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ',
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit',
    date: '13:00 - 11/11/2020',
    image: IMAGES.img_client,
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ',
  },
];

const listDataSearchPage = [
  {
    id: 1,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    rating: 4,
    hashtag: 'Cửa Đẹp Adoor',
    location: 'Đà nẵng',
  },
  {
    id: 2,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    rating: 3,
    hashtag: 'Cửa Đẹp Adoor',
    location: 'Đà nẵng',
  },
  {
    id: 3,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    rating: 5,
    hashtag: 'Cửa Đẹp Adoor',
    location: 'Đà nẵng',
  },
  {
    id: 4,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    rating: 2,
    hashtag: 'Cửa Đẹp Adoor',
    location: 'Đà nẵng',
  },
  {
    id: 5,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    rating: 1,
    hashtag: 'Cửa Đẹp Adoor',
    location: 'Đà nẵng',
  },
  {
    id: 6,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    rating: 2,
    hashtag: 'Cửa Đẹp Adoor',
    location: 'Đà nẵng',
  },
  {
    id: 7,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    rating: 1,
    hashtag: 'Cửa Đẹp Adoor',
    location: 'Đà nẵng',
  },
  {
    id: 8,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    rating: 2,
    hashtag: 'Cửa Đẹp Adoor',
    location: 'Đà nẵng',
  },
  {
    id: 9,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    rating: 1,
    hashtag: 'Cửa Đẹp Adoor',
    location: 'Đà nẵng',
  },
];

const listProductCompany = [
  {
    id: 1,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    gallery: [
      {
        id: 1,
        original: 'https://picsum.photos/id/1011/1000/600/',
        thumbnail: 'https://picsum.photos/id/1011/1000/600/',
      },
      {
        id: 2,
        original: 'https://picsum.photos/id/1012/1000/600/',
        thumbnail: 'https://picsum.photos/id/1012/1000/600/',
      },
      {
        id: 3,
        original: 'https://picsum.photos/id/1013/1000/600/',
        thumbnail: 'https://picsum.photos/id/1013/1000/600/',
      },
      {
        id: 4,
        original: 'https://picsum.photos/id/1014/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/1000/600/',
      },
      {
        id: 5,
        original: 'https://picsum.photos/id/1014/1000/600/',
        thumbnail: 'https://picsum.photos/id/1014/1000/600/',
      },
      {
        id: 6,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/1000/600/',
      },
      {
        id: 7,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1016/1000/600/',
      },
    ],
  },
  {
    id: 2,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    gallery: [
      {
        id: 1,
        original: 'https://picsum.photos/id/1011/1000/600/',
        thumbnail: 'https://picsum.photos/id/1011/1000/600/',
      },
      {
        id: 2,
        original: 'https://picsum.photos/id/1012/1000/600/',
        thumbnail: 'https://picsum.photos/id/1012/1000/600/',
      },
      {
        id: 3,
        original: 'https://picsum.photos/id/1013/1000/600/',
        thumbnail: 'https://picsum.photos/id/1013/1000/600/',
      },
      {
        id: 4,
        original: 'https://picsum.photos/id/1014/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/1000/600/',
      },
      {
        id: 5,
        original: 'https://picsum.photos/id/1014/1000/600/',
        thumbnail: 'https://picsum.photos/id/1014/1000/600/',
      },
      {
        id: 6,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/1000/600/',
      },
      {
        id: 7,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1016/1000/600/',
      },
      {
        id: 8,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/1000/600/',
      },
      {
        id: 9,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1016/1000/600/',
      },
      {
        id: 10,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/1000/600/',
      },
      {
        id: 11,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1016/1000/600/',
      },
    ],
  },
  {
    id: 3,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    gallery: [
      {
        id: 1,
        original: 'https://picsum.photos/id/1011/1000/600/',
        thumbnail: 'https://picsum.photos/id/1011/1000/600/',
      },
      {
        id: 2,
        original: 'https://picsum.photos/id/1012/1000/600/',
        thumbnail: 'https://picsum.photos/id/1012/1000/600/',
      },
      {
        id: 3,
        original: 'https://picsum.photos/id/1013/1000/600/',
        thumbnail: 'https://picsum.photos/id/1013/1000/600/',
      },
      {
        id: 4,
        original: 'https://picsum.photos/id/1014/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/1000/600/',
      },
      {
        id: 5,
        original: 'https://picsum.photos/id/1014/1000/600/',
        thumbnail: 'https://picsum.photos/id/1014/1000/600/',
      },
      {
        id: 6,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/1000/600/',
      },
      {
        id: 7,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1016/1000/600/',
      },
    ],
  },
  {
    id: 4,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    gallery: [
      {
        id: 1,
        original: 'https://picsum.photos/id/1011/1000/600/',
        thumbnail: 'https://picsum.photos/id/1011/1000/600/',
      },
      {
        id: 2,
        original: 'https://picsum.photos/id/1012/1000/600/',
        thumbnail: 'https://picsum.photos/id/1012/1000/600/',
      },
      {
        id: 3,
        original: 'https://picsum.photos/id/1013/1000/600/',
        thumbnail: 'https://picsum.photos/id/1013/1000/600/',
      },
      {
        id: 4,
        original: 'https://picsum.photos/id/1014/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/1000/600/',
      },
      {
        id: 5,
        original: 'https://picsum.photos/id/1014/1000/600/',
        thumbnail: 'https://picsum.photos/id/1014/1000/600/',
      },
      {
        id: 6,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/1000/600/',
      },
      {
        id: 7,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1016/1000/600/',
      },
    ],
  },
  {
    id: 5,
    title: 'CỬA NHÔM HỆ XINGFA mở xếp adoor aluminium',
    image: IMAGES.img_product,
    gallery: [
      {
        id: 1,
        original: 'https://picsum.photos/id/1011/1000/600/',
        thumbnail: 'https://picsum.photos/id/1011/1000/600/',
      },
      {
        id: 2,
        original: 'https://picsum.photos/id/1012/1000/600/',
        thumbnail: 'https://picsum.photos/id/1012/1000/600/',
      },
      {
        id: 3,
        original: 'https://picsum.photos/id/1013/1000/600/',
        thumbnail: 'https://picsum.photos/id/1013/1000/600/',
      },
      {
        id: 4,
        original: 'https://picsum.photos/id/1014/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/1000/600/',
      },
      {
        id: 5,
        original: 'https://picsum.photos/id/1014/1000/600/',
        thumbnail: 'https://picsum.photos/id/1014/1000/600/',
      },
      {
        id: 6,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/1000/600/',
      },
      {
        id: 7,
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1016/1000/600/',
      },
    ],
  },
];

const listRatingCompanyName = [
  {
    id: 1,
    logo: IMAGES.img_product,
    nameClient: 'Khách hàng 1',
    rating: 3,
    time: '19:22 - 14.11.2020',
    comment:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
  },
  {
    id: 2,
    logo: IMAGES.img_product,
    nameClient: 'Khách hàng 1',
    rating: 5,
    time: '19:22 - 14.11.2020',
    comment:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
  },
  {
    id: 3,
    logo: IMAGES.img_product,
    nameClient: 'Khách hàng 1',
    rating: 3,
    time: '19:22 - 14.11.2020',
    comment:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
  },
  {
    id: 4,
    logo: IMAGES.img_product,
    nameClient: 'Khách hàng 1',
    rating: 5,
    time: '19:22 - 14.11.2020',
    comment:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
  },
  {
    id: 5,
    logo: IMAGES.img_product,
    nameClient: 'Khách hàng 1',
    rating: 2,
    time: '19:22 - 14.11.2020',
    comment:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
  },
];

const listQuotation = [
  {
    id: 1,
    name: 'Dự án 1',
  },
  {
    id: 2,
    name: 'Dự án 2',
  },
  {
    id: 3,
    name: 'Dự án 3',
  },
  {
    id: 4,
    name: 'Dự án 1',
  },
  {
    id: 5,
    name: 'Dự án 2',
  },
  {
    id: 6,
    name: 'Dự án 3',
  },
  {
    id: 7,
    name: 'Dự án 1',
  },
  {
    id: 8,
    name: 'Dự án 2',
  },
  {
    id: 9,
    name: 'Dự án 3',
  },
];
export {
  listConstruction,
  listCategory,
  listPartner,
  listDataClient,
  listDataSearchPage,
  listProductCompany,
  listRatingCompanyName,
  listQuotation,
};
