// @flow

import React, { memo } from 'react';
import Loading from 'commons/components/Loading/LoadingSmall';
import ModalPopup from '../../../commons/components/Modal';
import ItemQuotation from './ItemQuotation';

type Props = {
  openModalQuotation: boolean,
  handleCloseModalQuotation: Function,
  handleSubmitModalQuotation: Function,
  listQuotation: Array<{
    id: number,
  }>,
  itemQuote: number,
  handleCheckBox: Function,
  isProcessingProject: boolean,
  isProcessingQuotes: boolean,
  errorMsg: string,
};

const ModalQuotation = ({
  openModalQuotation,
  handleCloseModalQuotation,
  handleSubmitModalQuotation,
  listQuotation,
  handleCheckBox,
  itemQuote,
  isProcessingProject,
  isProcessingQuotes,
  errorMsg,
}: Props) => {
  const renderListQuotation =
    listQuotation && listQuotation.length > 0 ? (
      listQuotation.map((item) => (
        <ItemQuotation
          itemObj={item}
          key={item.id}
          handleCheckBox={handleCheckBox}
          itemQuote={itemQuote}
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
      isProcessing={isProcessingQuotes}
      handleCloseIcon={() => handleCloseModalQuotation()}
      textBtnRight="BÁO GIÁ"
      handleClose={() => handleSubmitModalQuotation()}
    >
      <h2 className="modal-title">CHỌN DỰ ÁN ĐỂ BÁO GIÁ</h2>
      <div className="text-modal-content content-quotation ">
        {isProcessingProject ? (
          <Loading size="md" />
        ) : (
          <>
            <ul className="quotation-chose">{renderListQuotation}</ul>
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
          </>
        )}
      </div>
    </ModalPopup>
  );
};

export default memo<Props>(ModalQuotation);
