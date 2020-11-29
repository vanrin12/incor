/* eslint-disable no-nested-ternary */
// @flow
import React, { memo } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ERROR_MESSAGE from 'constants/errorMsg';
import SelectDropdown from '../../../commons/components/Select';
import Button from '../../../commons/components/Button';

type Props = {
  handleSubmitForm: Function,
  listPartner: Array<{
    id: number,
    value: string,
    label: string,
  }>,
  listCategory: Array<{
    id: number,
    value: string,
    label: string,
  }>,
};

const ModalSort = ({ handleSubmitForm, listPartner, listCategory }: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      partner: '',
      category: '',
    },
    validationSchema: Yup.object().shape({
      partner: Yup.string().required(ERROR_MESSAGE.PARTNER),
      category: Yup.string().required(ERROR_MESSAGE.CATEGORY),
    }),
    onSubmit: (values) => {
      handleSubmitForm(values);
    },

    validateOnChange: false,
  });

  const handleSelectChange = (option, name) => {
    switch (name) {
      case 'partner':
        formik.setFieldValue('partner', option);
        formik.setFieldError('partner', '');
        break;
      case 'category':
        formik.setFieldValue('category', option);
        formik.setFieldError('category', '');
        break;
      default:
        break;
    }
  };

  const { partner, category } = formik.values;

  return (
    <div className="modal-sort">
      <div className="form-group">
        <p className="input__label">Chọn đối tác</p>
        <SelectDropdown
          name="partner"
          listItem={listPartner || []}
          placeholder="Chọn đối tác"
          onChange={(option) => handleSelectChange(option, 'partner')}
          option={partner}
          customClass={formik?.errors?.partner && 'red'}
          errorMsg={formik?.errors?.partner}
        />
      </div>
      <div className="form-group">
        <p className="input__label">Chọn hạng mục</p>
        <SelectDropdown
          name="category"
          listItem={listCategory || []}
          placeholder="Chọn hạng mục"
          onChange={(option) => handleSelectChange(option, 'category')}
          option={category}
          customClass={formik?.errors?.category && 'red'}
          errorMsg={formik?.errors?.category}
        />
      </div>
      <div className="form-group mb-0 text-right">
        <Button onClick={() => formik.handleSubmit()}>LỌC</Button>
      </div>
    </div>
  );
};

export default memo<Props>(ModalSort);
