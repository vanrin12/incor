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

export { listConstruction, listCategory, listPartner };
