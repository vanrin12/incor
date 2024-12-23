/* eslint-disable no-nested-ternary */
// @flow
// libs
import React, { memo } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'commons/components/Button';
import Loading from 'commons/components/Loading/LoadingSmall';
import images from 'themes/images';

type Props = {
  title?: string,
  children: any,
  animation?: boolean,
  isOpen: boolean,
  size?: string,
  handleClose: Function,
  handleCloseIcon?: Function,
  customClass?: string,
  isShowIconClose?: boolean,
  isShowHeader?: boolean,
  isShowFooter?: boolean,
  isShowTwoBtn?: boolean,
  customClassButton?: string,
  classNameBtnLeft?: string,
  textBtnLeft?: string,
  classNameBtnRight?: string,
  textBtnRight?: string,
  handleSubmit?: Function,
  isDisabledButton?: boolean,
  isProcessing?: boolean,
};

export const ModalPopup = ({
  title = '',
  children,
  animation = false,
  isOpen,
  size,
  handleClose,
  customClass,
  isShowIconClose,
  isShowHeader,
  isShowFooter,
  isShowTwoBtn,
  customClassButton = '',
  classNameBtnLeft = '',
  textBtnLeft = '',
  classNameBtnRight = '',
  textBtnRight = 'OK',
  handleSubmit = () => {},
  isDisabledButton,
  handleCloseIcon = () => {},
  isProcessing = false,
}: Props) => (
  <Modal
    animation={animation}
    onHide={isShowIconClose ? handleCloseIcon : handleClose}
    show={isOpen}
    size={size}
    className={customClass}
  >
    {isShowIconClose && (
      <div
        className="modal-content__iconClose"
        onClick={handleCloseIcon}
        role="button"
        tabIndex={0}
        onKeyUp={handleCloseIcon}
      >
        <img src={images.icon_close2} alt="" />
      </div>
    )}

    {isShowHeader && <h3 className="modal-title">{title}</h3>}

    <Modal.Body>
      {!isShowHeader ? (
        <div className="modal-body__no-header">{children}</div>
      ) : (
        <div className="modal-body__has-header">{children}</div>
      )}
    </Modal.Body>
    {isShowFooter && (
      <Modal.Footer>
        {!isShowTwoBtn ? (
          <Button
            type="button"
            customClass={customClassButton}
            onClick={handleClose}
          >
            {textBtnRight}

            {isProcessing && <Loading />}
          </Button>
        ) : (
          <>
            <Button
              type="button"
              customClass={`button--half ${customClassButton} ${classNameBtnLeft}`}
              onClick={handleSubmit}
              isDisabled={isDisabledButton}
            >
              {textBtnLeft}
            </Button>
            <Button
              type="button"
              customClass={`button--half ${customClassButton} ${classNameBtnRight}`}
              onClick={handleClose}
            >
              {textBtnRight}
            </Button>
          </>
        )}
      </Modal.Footer>
    )}
  </Modal>
);

ModalPopup.defaultProps = {
  title: '',
  animation: false,
  size: '',
  customClass: '',
  isShowIconClose: false,
  isShowHeader: false,
  isShowFooter: false,
  isShowTwoBtn: false,
  customClassButton: '',
  classNameBtnLeft: '',
  textBtnLeft: '',
  classNameBtnRight: '',
  textBtnRight: 'OK',
  handleSubmit: () => {},
  isDisabledButton: false,
  handleCloseIcon: () => {},
  isProcessing: false,
};
export default memo<Props>(ModalPopup);
