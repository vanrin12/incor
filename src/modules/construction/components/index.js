/* eslint-disable no-nested-ternary */
// @flow
import React, { useState } from 'react';
import MainLayout from '../../../commons/components/MainLayout';
import TableConstructionManager from './TableConstruction';
import ModalRating from './ModalRating';
import ModalPopup from '../../../commons/components/Modal';
import {
  listConstruction,
  listCategory,
  listPartner,
} from '../../../mockData/listData';

const ConstructionManager = () => {
  const { dataInfo, dataTotal, dataList } = listConstruction;
  const [openModalNumberRating, setOpenModalNumberRating] = useState(true);
  const [isShowModalRating, setIsShowModalRating] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const quantityRating =
    dataList && dataList.filter((item) => item.progress > 75);

  const handleShowModalRating = (boolean) => {
    setIsShowModalRating(boolean);
    setIsShowModal(false);
  };

  const handleCloseIcon = () => {
    setIsShowModalRating(false);
  };

  const handleShowModal = () => {
    setIsShowModalRating(false);
    setIsShowModal(!isShowModal);
  };
  // sort partner and category
  const handleSubmitForm = (valueSearch) => {
    console.log(valueSearch);
    setIsShowModal(false);
  };

  const handleSubmitRating = (rating) => {
    console.log(rating, 'rating');
    setIsShowModalRating(false);
  };

  return (
    <MainLayout>
      <div className="page-construction pt-page">
        <h2 className="page-title">QUẢN LÝ TIẾN ĐỘ CÔNG TRÌNH</h2>
        <div className="project-info">
          <div className="project-title">{dataInfo?.projectOfName}</div>
          <div className="project-sub">
            Tên công trình / chủ đầu tư:
            {` ${dataInfo?.companyName}`}
          </div>
          <div className="project-address">
            Địa chỉ:
            {` ${dataInfo?.address}`}
          </div>
        </div>
        <TableConstructionManager
          dataList={dataList}
          listPartner={listPartner}
          listCategory={listCategory}
          handleSubmitForm={handleSubmitForm}
          isShowModal={isShowModal}
          handleShowModal={handleShowModal}
          handleShowModalRating={handleShowModalRating}
        />
        <div className="project-total">
          <ul>
            <li>
              <label>Tổng dự toán:</label>
              <div>{dataTotal?.totalCost}</div>
            </li>
            <li>
              <label>Tổng tiền đã thanh toán:</label>
              <div>{dataTotal?.totalAmountPaid}</div>
            </li>
            <li className="total">
              <label>Tổng tiền còn lại:</label>
              <div>{dataTotal?.totalMoney}</div>
            </li>
          </ul>
        </div>
      </div>
      <ModalRating
        handleSubmitRating={handleSubmitRating}
        isShowModalRating={isShowModalRating}
        handleCloseIcon={handleCloseIcon}
      />

      {/* Modal success */}
      <ModalPopup
        // isOpen
        // isOpen={openModalNumberRating}
        isShowFooter
        textBtnRight="ĐÓNG"
        handleClose={() => {
          setOpenModalNumberRating(false);
        }}
      >
        <h2 className="modal-title">THÔNG BÁO</h2>
        <div className="text-modal-content">
          Bạn có
          <span className="red">{` ${
            quantityRating && quantityRating.length
          } `}</span>
          hạng mục cần đánh giá
        </div>
      </ModalPopup>
    </MainLayout>
  );
};

export default ConstructionManager;
