// @flow
import React, { memo, useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import REGEX from 'constants/regexs';
import { isNumberKey, isOnPasteNumber } from 'helpers/validate';
import Input from '../Input';
import ERROR_MESSAGE from '../../../constants/errorMsg';
import SelectDropdown from '../Select';
import ModalPopup from '../Modal';
import Button from '../Button';
import Loading from '../Loading/LoadingSmall';
import { listTime } from '../../../constants/list';
import {
  getSpaceDivisionSelecting,
  formRequest,
} from '../../../modules/home/redux';

type Props = {
  isOpenModalClient: boolean,
  handleCloseModal: Function,
};

const FormContactUsMobile = ({
  isOpenModalClient,
  handleCloseModal,
}: Props) => {
  const dispatch = useDispatch();

  const [listSelectSubType, setListSelectSubType] = useState([]);
  const [dateTime, setDateTime] = useState('');
  const dateTimeRef = useRef('');
  const [pageStep, setPageStep] = useState(1);

  const {
    dataListAreas,
    dataListSpaceType,
    dataListSpaceDivision,
    isProcessing,
    dataConstant,
  } = useSelector((state) => state?.home);

  useEffect(() => {
    setListSelectSubType(dataListSpaceDivision);
  }, [dataListSpaceDivision, dataListSpaceDivision.length]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      phone: Yup.string()
        .required(ERROR_MESSAGE.PHONE)
        .matches(REGEX.PHONE, { message: ERROR_MESSAGE.PHONE_FORMAT }),
    }),

    onSubmit: () => {
      setPageStep(2);
    },
    validateOnChange: false,
  });
  const {
    nameClient,
    phone,
    email,
    fileName,
    note,
    selectCity,
    selectTime,
    selectType,
    selectSubType,
  } = formik.values;

  const handelChecksValidStep2 = () => {
    if (!selectType) {
      formik.setFieldError('selectType', ERROR_MESSAGE.REQUIRED_TYPE);
      return;
    }
    if (!selectSubType) {
      formik.setFieldError('selectSubType', ERROR_MESSAGE.REQUIRED_SUB_TYPE);
      return;
    }
    setPageStep(3);
  };

  // submit call api request success
  const handelChecksValidStep3 = () => {
    const formData = new window.FormData();
    formData.append('name', nameClient);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('area_id', selectCity?.id);
    formData.append('space_type_id', selectType?.id);
    formData.append('space_division_id', selectSubType?.id);
    formData.append('file', formik?.values?.file || null);
    formData.append('time', selectTime?.label);
    formData.append('date', dateTime || new Date());
    formData.append('description', note);
    dispatch(formRequest(formData));
  };
  // set value default

  useEffect(() => {
    if (!isOpenModalClient) {
      setPageStep(1);
      formik.setFieldValue('selectCity', '');
      formik.setFieldValue('selectType', '');
      formik.setFieldValue('selectSubType', '');
      formik.setFieldValue('selectTime', '');
      formik.setFieldValue('selectCity', '');
      formik.setFieldValue('nameClient', '');
      formik.setFieldValue('phone', '');
      formik.setFieldValue('email', '');
      formik.setFieldValue('file', '');
      formik.setFieldValue('note', '');
      formik.setFieldValue('fileName', '');

      formik.setFieldError('selectCity', '');
      formik.setFieldError('selectType', '');
      formik.setFieldError('selectSubType', '');
      formik.setFieldError('selectTime', '');
      formik.setFieldError('nameClient', '');
      formik.setFieldError('phone', '');
      formik.setFieldError('email', '');
      formik.setFieldError('file', '');
      formik.setFieldError('note', '');
      formik.setFieldError('fileName', '');
      setDateTime(null);
    }
    // eslint-disable-next-line
  }, [isOpenModalClient]);
  const handleSelectChange = (option, name) => {
    switch (name) {
      case 'selectCity':
        formik.setFieldValue('selectCity', option);
        formik.setFieldError('selectCity', '');
        break;
      case 'selectType':
        formik.setFieldValue('selectType', option);
        formik.setFieldError('selectType', '');
        dispatch(getSpaceDivisionSelecting(option.id));
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

  const handleChangeFile = (e) => {
    if (
      e &&
      e.target &&
      e.target.validity &&
      e.target.validity &&
      e.target.files &&
      e.target.files[0]
    ) {
      formik.setFieldValue('file', e.target.files[0]);
      formik.setFieldValue('fileName', e.target.files[0].name);
    }
  };

  return (
    <ModalPopup
      isOpen={isOpenModalClient}
      size="lg"
      customClass="FormContactUsMobile"
      isShowIconClose
      handleClose={handleCloseModal}
      handleCloseIcon={handleCloseModal}
    >
      <div className="form-contact-us">
        <h2>{dataConstant?.titleForm || 'FORM YÊU CẦU TƯ VẤN'}</h2>
        <div className={`group-1 ${pageStep === 1 ? 'd-block' : 'd-none'}`}>
          <div className="form-group">
            <Input
              placeholder="Tên khách hàng"
              label="Tên khách hàng"
              name="nameClient"
              value={nameClient}
              onChange={formik.handleChange}
              errorMsg={formik?.errors?.nameClient}
              customClass={formik?.errors?.nameClient && 'red'}
              onFocus={() => handelFocus('nameClient')}
            />
          </div>
          <div className="form-group">
            <Input
              placeholder="Số điện thoại"
              label="Số điện thoại"
              name="phone"
              value={phone}
              pattern="[0-9]*"
              inputMode="numeric"
              onKeyPress={(e) => isNumberKey(e)}
              onPaste={(e) => isOnPasteNumber(e)}
              maxLength="11"
              onFocus={() => handelFocus('phone')}
              onChange={formik.handleChange}
              errorMsg={formik?.errors?.phone}
              customClass={formik?.errors?.phone && 'red'}
            />
          </div>
          <div className="form-group">
            <Input
              placeholder="Email"
              label="Email"
              name="email"
              value={email}
              onChange={formik.handleChange}
              errorMsg={formik?.errors?.email}
              customClass={formik?.errors?.email && 'red'}
              onFocus={() => handelFocus('email')}
            />
          </div>
          <div className="form-group">
            <p className="input__label">Khu vực</p>
            <SelectDropdown
              name="selectCity"
              listItem={dataListAreas || []}
              placeholder="Chọn tỉnh/thành phố"
              onChange={(option) => handleSelectChange(option, 'selectCity')}
              option={selectCity}
              customClass={formik?.errors?.selectCity && 'red'}
              errorMsg={formik?.errors?.selectCity}
            />
          </div>
          <div className="form-group mb-0 btn-group">
            <Button
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              TIẾP THEO
            </Button>
          </div>
        </div>
        <div className={`group-2 ${pageStep === 2 ? 'd-block' : 'd-none'}`}>
          <div className="form-group style-line">
            <p className="input__label">Loại hình không gian</p>
            <SelectDropdown
              name="selectType"
              listItem={dataListSpaceType || []}
              onChange={(option) => handleSelectChange(option, 'selectType')}
              option={selectType}
              errorMsg={formik?.errors?.selectType}
              customClass={formik?.errors?.selectType && 'red'}
            />
          </div>
          <div className="form-group style-line">
            <p className="input__label">Phân chia không gian</p>
            <SelectDropdown
              name="selectSubType"
              listItem={listSelectSubType || []}
              onChange={(option) => handleSelectChange(option, 'selectSubType')}
              option={selectSubType}
              errorMsg={formik?.errors?.selectSubType}
              customClass={formik?.errors?.selectSubType && 'red'}
            />
          </div>
          <div className="group-btn-file style-line form-group">
            <p className="input__label d-flex align-items-center">
              Bản vẽ 2D <span>(tùy chọn)</span>
            </p>
            <div className="d-flex align-items-end">
              <div className="d-group">
                <input
                  type="file"
                  className="custom-file-input"
                  value=""
                  onChange={(e) => handleChangeFile(e)}
                  accept="*, capture=camera"
                />
                <Input
                  placeholder="Chưa có file nào được chọn"
                  name="fileName"
                  value={fileName}
                  onChange={() => {}}
                />
              </div>
              <Button
                type="submit"
                variant="secondary w-150"
                onClick={() => {}}
              >
                CHỌN FILE
              </Button>
            </div>
          </div>
          <div className="style-line form-group date-time">
            <p className="input__label">Thời gian tư vấn</p>
            <div className="d-flex align-items-end">
              <p className="input__label w-auto">Giờ</p>
              <SelectDropdown
                name="selectSubType"
                listItem={listTime || []}
                onChange={(option) => handleSelectChange(option, 'selectTime')}
                option={selectTime}
              />
              <p className="input__label w-auto ml-2">Ngày tháng</p>
              <DatePicker
                selected={dateTime}
                onChange={(date) => {
                  setDateTime(date);
                }}
                minDate={new Date()}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                // locale="vi"
                dateFormat="yyyy-MM-dd"
                disabledKeyboardNavigation
                onChangeRaw={(e) => e.preventDefault()}
                onFocus={(e) => e.preventDefault()}
                onKeyDown={(e) => e.preventDefault()}
                // popperPlacement="right-start"
                ref={dateTimeRef}
              />
            </div>
          </div>
          <div className="form-group mb-0 btn-group">
            <Button onClick={() => handelChecksValidStep2()}>TIẾP THEO</Button>
          </div>
        </div>
        <div className={`group-3 ${pageStep === 3 ? 'd-block' : 'd-none'}`}>
          <div className="form-group">
            <p className="input__label">Ghi chú thêm</p>
            <textarea
              className="form-control"
              rows="4"
              value={note}
              placeholder="Ghi chú về số lượng - kích thước từng loại"
              onChange={formik.handleChange}
              name="note"
            />
          </div>
          <div className="form-group mb-0 btn-group">
            <Button onClick={() => handelChecksValidStep3()}>
              YÊU CẦU TƯ VẤN
              {isProcessing && <Loading />}
            </Button>
          </div>
        </div>
      </div>
    </ModalPopup>
  );
};

export default memo<Props>(FormContactUsMobile);
