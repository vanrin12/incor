// @flow

import React, { memo } from 'react';
import ModalPopup from '../../../commons/components/Modal';

import ItemQuotation from './ItemQuotation';

type Props = {
  openModalQuotation: boolean,
  handleCloseModalQuotation: Function,
  handleSubmitModalQuotation: Function,
  listQuotation: Array<{
    id: number,
  }>,
  listId: Array<number>,
  handleCheckBox: Function,
};

const ModalQuotation = ({
  openModalQuotation,
  handleCloseModalQuotation,
  handleSubmitModalQuotation,
  listQuotation,
  handleCheckBox,
  listId,
}: Props) => {
  const renderListQuotation =
    listQuotation && listQuotation.length > 0 ? (
      listQuotation.map((item) => (
        <ItemQuotation
          itemObj={item}
          key={item.id}
          handleCheckBox={handleCheckBox}
          listId={listId}
        />
      ))
    ) : (
      <div className="no-data">KHÔNG CÓ SẢN PHẨM NÀO.</div>
    );

  return (
    <ModalPopup
      isOpen={openModalQuotation}
      isShowFooter
      isShowIconClose
      handleCloseIcon={() => handleCloseModalQuotation()}
      textBtnRight="BÁO GIÁ"
      handleClose={() => handleSubmitModalQuotation()}
    >
      <h2 className="modal-title">CHỌN DỰ ÁN ĐỂ BÁO GIÁ</h2>
      <div className="text-modal-content content-quotation ">
        <ul className="quotation-chose">{renderListQuotation}</ul>
      </div>
    </ModalPopup>
  );
};

export default memo<Props>(ModalQuotation);
