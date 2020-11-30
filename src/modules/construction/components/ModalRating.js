/* eslint-disable no-nested-ternary */
// @flow
import React, { memo, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import StarRatings from 'react-star-ratings';
import REGEX from 'constants/regexs';
import ERROR_MESSAGE from 'constants/errorMsg';
import ModalPopup from '../../../commons/components/Modal';

type Props = {
  handleSubmitRating: Function,
  isShowModalRating: boolean,
  handleCloseIcon: Function,
};

const ModalRating = ({
  handleSubmitRating,
  isShowModalRating,
  handleCloseIcon,
}: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      rating: 0,
      note: '',
    },
    validationSchema: Yup.object().shape({
      rating: Yup.string()
        .required(ERROR_MESSAGE.RATING)
        .matches(REGEX.NUMBER_RATING, { message: ERROR_MESSAGE.RATING }),
      note: Yup.string().required(ERROR_MESSAGE.TEXT_RATING),
    }),
    onSubmit: (values) => {
      handleSubmitRating(values);
    },
    validateOnChange: false,
  });

  useEffect(() => {
    if (!isShowModalRating) {
      formik.setFieldValue('note', '');
      formik.setFieldValue('rating', 0);
    }
    // eslint-disable-next-line
  }, [isShowModalRating]);

  const handleChangeRating = (rating) => {
    formik.setFieldValue('rating', rating);
  };

  const handelFocus = () => {
    formik.setFieldError('note', '');
  };

  const { note, rating } = formik.values;
  return (
    <ModalPopup
      isOpen={isShowModalRating}
      isShowFooter
      isShowIconClose
      textBtnRight="ĐÁNH GIÁ"
      handleCloseIcon={() => handleCloseIcon()}
      handleClose={() => {
        formik.handleSubmit();
      }}
    >
      <h2 className="modal-title">ĐÁNH GIÁ CÔNG TRÌNH</h2>
      <div className="sub-title">
        Bạn cảm thấy đối tác của chúng tôi như thế nào?
      </div>
      <div className="text-modal-content rating">
        <div className="position-relative mb-30">
          <StarRatings
            rating={rating}
            changeRating={(e) => handleChangeRating(e)}
            numberOfStars={5}
            starRatedColor="#ffb303"
            starHoverColor="#ffb303"
            name="rating"
          />
          {formik?.errors?.rating && (
            <p className="error-msg select">{formik?.errors?.rating}</p>
          )}
        </div>
        <div className="position-relative">
          <textarea
            className="form-control"
            rows="5"
            value={note}
            placeholder="Vui lòng để lại đánh giá chi tiết về hạng mục này"
            onChange={formik.handleChange}
            name="note"
            onFocus={() => handelFocus()}
          />
          {formik?.errors?.note && (
            <p className="error-msg select">{formik?.errors?.note}</p>
          )}
        </div>
      </div>
    </ModalPopup>
  );
};

export default memo<Props>(ModalRating);
