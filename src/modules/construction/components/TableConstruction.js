/* eslint-disable no-nested-ternary */
// @flow
import React, { memo } from 'react';
import ItemTable from './ItemTable';
import IMAGES from '../../../themes/images';
import ModalSort from './ModalSort';

type Props = {
  dataList: Array<{
    id: number,
    category: string,
    hashtag: string,
    technicalDesc: Object,
    totalCost: string,
    date: string,
    progress: number,
    totalAmountPaid: string,
    totalMoney: string,
    remark: string,
    rating: any,
    amount: number,
  }>,
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
  isShowModal: boolean,
  handleSubmitForm: Function,
  handleShowModal: Function,
  handleShowModalRating: Function,
  useRef: any,
  handleSortPrice: Function,
  sortPrice: boolean,
};

const TableConstructionManager = ({
  dataList,
  listPartner,
  listCategory,
  handleSubmitForm,
  isShowModal,
  handleShowModal,
  handleShowModalRating,
  useRef,
  handleSortPrice,
  sortPrice,
}: Props) => {
  const renderListConstruction =
    dataList.length > 0 ? (
      dataList.map((item) => (
        <ItemTable
          itemObj={item}
          key={item.id}
          handleShowModalRating={handleShowModalRating}
        />
      ))
    ) : (
      <div className="table-no-data">Bạn chưa có dự án nào.</div>
    );

  return (
    <div className={`table-construction ${isShowModal ? 'isShowModal' : ''}`}>
      <div className="table-header d-flex">
        <div className="t-item t-item1">
          <div
            onClick={() => handleShowModal()}
            className="d-flex align-items-center"
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            HẠNG MỤC / ĐƠN VỊ
            <img src={IMAGES.iconUp} alt="" className="ico-up style1" />
          </div>
          <div ref={useRef}>
            {isShowModal && (
              <ModalSort
                listPartner={listPartner}
                listCategory={listCategory}
                handleSubmitForm={handleSubmitForm}
              />
            )}
          </div>
        </div>
        <div className="t-item t-item2">MÔ TẢ KỸ THUẬT</div>
        <div
          className="t-item t-item3"
          onClick={() => handleSortPrice()}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          DỰ TOÁN
          <img
            src={IMAGES.iconUp}
            alt=""
            className={`style1 ${sortPrice ? 'ico-down' : 'ico-up'}`}
          />
        </div>
        <div className="t-item t-item4">
          THỜI GIAN
          <br />
          THI CÔNG
        </div>
        <div className="t-item t-item5">TIẾN ĐỘ</div>
        <div className="t-item t-item6">
          SỐ TIỀN
          <br />
          ĐÃ THANH TOÁN
        </div>
        <div className="t-item t-item7">
          SỐ TIỀN
          <br />
          CÒN LẠI
        </div>
        <div className="t-item t-item8">GHI CHÚ</div>
        <div className="t-item t-item9">PHẢN HỒI</div>
      </div>
      <div className="table-body">{renderListConstruction}</div>
    </div>
  );
};

export default memo<Props>(TableConstructionManager);
