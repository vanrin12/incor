import React, { useState } from 'react';
import MainLayout from 'commons/components/MainLayout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ERROR_MESSAGE from '../../../constants/errorMsg';
import REGEX from 'constants/regexs';
import moment from 'moment';
import Input from '../../../commons/components/Input';
import SelectDropdown from '../../../commons/components/Select';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Cooperation() {
  const [value, setValue] = useState('daily');

  const handleChange = (val) => setValue(val);
  const benefitList = [
    {
      id: 1,
      imgIcon: 'https://korest.vn/wp-content/uploads/2021/12/icon-whys-1.png',
      title: 'Bảo hành đơn giản - lâu dài',
      detail: 'Bảo hành điện tử với nhiều phương pháp kích hoạt, tra cứu thông tin BH chỉ bằng SĐT, hiện thị tên nhà bán hàng 1 cách minh bạch, bảo hộ thị trường phân phối, yên tâm bán hàng không sợ lấn vùng.'
    },
    {
      id: 2,
      imgIcon: 'https://korest.vn/wp-content/uploads/2021/12/icon-whys-4.png',
      title: 'Đảm bảo lợi nhuận',
      detail: 'KANET hiện đang sử dụng rất nhiều phương pháp và biện pháp để đảm bảo lợi nhuận cho đại lý và nhà phân phối.'
    },
    {
      id: 3,
      imgIcon: 'https://korest.vn/wp-content/uploads/2021/12/icon-whys-3.png',
      title: 'Phân khúc dễ bán',
      detail: 'Sản phẩm KANET chất lượng cao cấp nhưng giá tầm trung, vậy nên dễ mua, dễ bán với đối tác bán hàng.'
    },
    {
      id: 4,
      imgIcon: 'https://korest.vn/wp-content/uploads/2021/12/icon-whys-4.png',
      title: 'Vô vàn giá trị hỗ trợ',
      detail: 'Tặng miễn phí 100% quầy kệ may đo theo showroom, Bàn giao thị trường, Hỗ trợ tìm kiếm khách hàng, Đào tạo bán hàng,...'
    }
  ]
  const formik = useFormik({
    initialValues: {
      nameClient: '',
      phone: '',
      email: '',
      file: '',
      fileName: '',
      note: '',
      selectCity: '',
      selectTime: '',
      selectType: '',
      selectSubType: '',
    },
    validateOnBlur: true,
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required(ERROR_MESSAGE.EMAIL_REQUIRED)
        .matches(REGEX.EMAIL, { message: ERROR_MESSAGE.EMAIL_FORMAT }),
      nameClient: Yup.string().required(ERROR_MESSAGE.MANE_CLIENT),
      selectCity: Yup.string().required(ERROR_MESSAGE.REQUIRED_CITY),
      selectType: Yup.string().required(ERROR_MESSAGE.REQUIRED_TYPE),
      selectSubType: Yup.string().required(ERROR_MESSAGE.REQUIRED_SUB_TYPE),
      phone: Yup.string()
        .required(ERROR_MESSAGE.PHONE)
        .matches(REGEX.PHONE, { message: ERROR_MESSAGE.PHONE_FORMAT }),
    }),

    onSubmit: (values) => {
      const formData = new window.FormData();
      formData.append('name', values?.nameClient);
      formData.append('email', values?.email);
      formData.append('phone', values?.phone);
      formData.append('area_id', values?.selectCity?.id);
      formData.append('space_type_id', values?.selectType?.id);
      formData.append('space_division_id', values?.selectSubType?.id);
      formData.append('file', values?.file || null);
      formData.append('time', values?.selectTime?.label);
      formData.append('description', values?.note);

      // dispatch(formRequest(formData));
    },

    validateOnChange: false,
  });

  const handleSelectChange = (option, name) => {
    switch (name) {
      case 'selectCity':
        formik.setFieldValue('selectCity', option);
        formik.setFieldError('selectCity', '');
        break;
      case 'selectType':
        formik.setFieldValue('selectType', option);
        formik.setFieldError('selectType', '');
        // dispatch(getSpaceDivisionSelecting(option.id));
        formik.setFieldValue('selectSubType', null);
        break;
      case 'selectSubType':
        formik.setFieldValue('selectSubType', option);
        formik.setFieldError('selectSubType', '');
        break;
      case 'selectTime':
        formik.setFieldError('selectTime', '');
        formik.setFieldValue('selectTime', option);
        break;
      default:
        break;
    }
  };

  const handelFocus = (name) => {
    switch (name) {
      case 'selectCity':
        formik.setFieldError('selectCity', '');
        break;
      case 'nameClient':
        formik.setFieldError('nameClient', '');
        break;
      case 'phone':
        formik.setFieldError('phone', '');
        break;
      case 'email':
        formik.setFieldError('email', '');
        break;
      default:
        break;
    }
  };

  const renderBenefitList = benefitList.map(i => {
    return (
      <div className='col-12 col-md-6 mt-3'>
        <p>
          <img src={i.imgIcon} alt="icon" />
        </p>
        <p className='title'>{i.title}</p>
        <p className='detail'>{i.detail}</p>
      </div>
    )
  });


  return (
    <MainLayout
      //   dataSeo={dataSeo}
      headTitle={`Đối tác`}
    >
      <div className="container-fluid cooperation">
        <div className="row">
          <div className="cooperation__banner"></div>
          <div className="cooperation__benefit">
            <h1>ƯU ĐIỂM KHI HỢP TÁC VỚI KANEt</h1>
            <p className='description'>
              KANET lấy nền tảng của trí tuệ để đưa ra những giải pháp thông
              minh cho khách hàng. Những kỹ sư của Kanet nghiên cứu, thiết kế,
              liên kết những sản phẩm CHẤT LƯỢNG HẠNG A - DỊCH VỤ HẠNG A nhằm
              mang đến cho khách hàng của Kanet sự “ An tâm số 1".
            </p>
            <div className='cooperation__section'>
              <div className='row'>
                {renderBenefitList}
              </div>
            </div>
          </div>
          <div className='col-12 cooperation__contactUs mt-5'>
            <div className='col-12 col-md-5 cooperation__contactUs__form-content'>
              <h2>{'FORM YÊU CẦU TƯ VẤN'}</h2>
              <div className="form-group row">
                <div className="col-12 col-md-6">
                  <Input
                    placeholder="Tên khách hàng"
                    label="Tên khách hàng"
                    name="nameClient"
                    // value={nameClient}
                    onChange={formik.handleChange}
                    errorMsg={formik?.errors?.nameClient}
                    customClass={formik?.errors?.nameClient && 'red'}
                    onFocus={() => handelFocus('nameClient')}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <Input
                    placeholder="Số điện thoại"
                    label="Số điện thoại"
                    name="phone"
                    // value={phone}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    // onKeyPress={(e) => isNumberKey(e)}
                    // onPaste={(e) => isOnPasteNumber(e)}
                    maxLength="11"
                    onFocus={() => handelFocus('phone')}
                    onChange={formik.handleChange}
                    errorMsg={formik?.errors?.phone}
                    customClass={formik?.errors?.phone && 'red'}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12 col-md-6">
                  <Input
                    placeholder="Email"
                    label="Email"
                    name="email"
                    // value={email}
                    onChange={formik.handleChange}
                    errorMsg={formik?.errors?.email}
                    customClass={formik?.errors?.email && 'red'}
                    onFocus={() => handelFocus('email')}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <p className="input__label">Khu vực</p>
                  <SelectDropdown
                    name="selectCity"
                    // listItem={dataListAreas || []}
                    placeholder="Chọn tỉnh/thành phố"
                    onChange={(option) => handleSelectChange(option, 'selectCity')}
                    // option={selectCity}
                    customClass={formik?.errors?.selectCity && 'red'}
                    errorMsg={formik?.errors?.selectCity}
                  />
                </div>
              </div>
              <div className='form-group row'>
                <div className="col-12">
                  <Form.Label className='w-100 text-center mt-3 mb-3' style={{ fontSize: '23px' }}>ANH/CHỊ MUỐN TRỞ THÀNH</Form.Label>
                  <ToggleButtonGroup
                    type="radio"
                    name="options"
                    value={value}
                    onChange={handleChange}
                    className="w-100"
                  >
                    <ToggleButton
                      id="tbg-radio-1"
                      value="daily"
                      variant={value === 'daily' ? 'danger' : 'outline-secondary'}
                      className="w-50 p-2"
                    >
                      ĐẠI LÝ
                    </ToggleButton>
                    <ToggleButton
                      id="tbg-radio-2"
                      value="distributor"
                      variant={value === 'distributor' ? 'danger' : 'outline-secondary'}
                      className="w-50 p-2"
                    >
                      NHÀ PHÂN PHỐI
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </div>
              <div className='form-group row'>
                <div className='col-12'>
                  <Form.Label>Lời nhắn nhủ đến Kanet</Form.Label>
                  <Form.Control
                    as="textarea"
                    // placeholder="Tùy Chọn"
                    style={{ height: '100px', marginTop: '10px', fontSize: '14px' }}
                  />
                </div>
              </div>
              <div className='form-group row'>
                <div className='col-12 text-center'>
                <Button variant="primary" style={{
                  margin: '0 auto',
                  padding: '10px 45px 10px 45.5px',
                  boxShadow: '0 1.5px 3px 0 rgba(0, 0, 0, 0.16)',
                  backgroundColor: 'rgba(183, 4, 4, 0.9)',
                  border: 'none',
                  borderRadius: '5px',
                  marginTop: '30px'
                }}>GỬI YÊU CẦU</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Cooperation;
