/* eslint-disable no-nested-ternary */
// @flow
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ERROR_MESSAGE from 'constants/errorMsg';
import MainLayout from '../../../commons/components/MainLayout';
import TableConstructionManager from './TableConstruction';
import ModalRating from './ModalRating';
import ModalPopup from '../../../commons/components/Modal';
import {
  listConstruction,
  listCategory,
  listPartner,
} from '../../../mockData/listData';
import { ratingProject, resetTypeRatingProject } from '../redux';

const ConstructionManager = () => {
  const dispatch = useDispatch();
  const { dataInfo, dataTotal, dataList } = listConstruction;
  const [openModalNumberRating, setOpenModalNumberRating] = useState(true);
  const [isShowModalRating, setIsShowModalRating] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [itemRating, setItemRating] = useState({});
  const { isProcessing, type } = useSelector((state) => state?.project);
  const [modalShowMess, setModalShowMess] = useState({
    isShow: false,
    content: '',
  });

  useEffect(() => {
    switch (type) {
      case 'project/ratingProjectSuccess':
        setIsShowModalRating(false);
        setModalShowMess({
          ...modalShowMess,
          isShow: true,
          content: ERROR_MESSAGE.TEXT_RATING_SUCCUSS,
        });
        break;
      case 'project/ratingProjectFailed':
        setIsShowModalRating(false);
        setModalShowMess({
          ...modalShowMess,
          isShow: true,
          content: ERROR_MESSAGE.TEXT_RATING_FAILED,
        });
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [type]);

  const quantityRating =
    dataList && dataList.filter((item) => item.progress > 75);

  const handleShowModalRating = (boolean, itemObj) => {
    setIsShowModalRating(boolean);
    setIsShowModal(false);
    setItemRating(itemObj);
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

  const handleSubmitRating = (item) => {
    dispatch(
      ratingProject({
        company_id: itemRating.id, // TODO UPDATE API
        rate: parseFloat(item.rating),
        content: item.note || '',
      })
    );
  };

  return (
    <MainLayout headTitle="Quản lý tiến độ công trình">
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
        isProcessing={isProcessing}
      />

      {/* Modal thông báo số lượng cần đáng giá */}
      <ModalPopup
        isOpen={openModalNumberRating}
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

      {/* Modal  hiển thị trạng thái sau khi đáng giá */}
      <ModalPopup
        isOpen={modalShowMess.isShow}
        isShowFooter
        textBtnRight="ĐÓNG"
        handleClose={() => {
          dispatch(resetTypeRatingProject());
          setModalShowMess({
            ...modalShowMess,
            isShow: false,
          });
        }}
      >
        <h2 className="modal-title">THÔNG BÁO</h2>
        <div className="text-modal-content">{modalShowMess.content}</div>
      </ModalPopup>
    </MainLayout>
  );
};

export default ConstructionManager;
