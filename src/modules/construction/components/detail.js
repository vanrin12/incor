/* eslint-disable no-nested-ternary */
// @flow
import React, { useState, useEffect, useRef, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ERROR_MESSAGE from 'constants/errorMsg';
import Loading from 'commons/components/Loading';
import MainLayout from '../../../commons/components/MainLayout';
import TableConstructionManager from './TableConstruction';
import ModalRating from './ModalRating';
import ModalPopup from '../../../commons/components/Modal';
import {
  ratingProject,
  resetTypeRatingProject,
  getProjectDetail,
  filterSearchDetail,
} from '../redux';
import useOnClickOutside from '../../../customHooks/useClickOutSide';

type Props = {
  match: {
    params: {
      id: any,
    },
  },
};

const ConstructionManager = ({ match }: Props) => {
  const idProject = match && match.params && match.params.id;
  const dispatch = useDispatch();
  const wrapperInfoRef = useRef();
  const [openModalNumberRating, setOpenModalNumberRating] = useState(true);
  const [sortPrice, setSortPrice] = useState(false);
  const [isShowModalRating, setIsShowModalRating] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [itemRating, setItemRating] = useState({});
  const {
    isProcessing,
    type,
    dataProjectDetail,
    isProcessingProject,
    listPartner,
    dataListConstruction,
    totalAmountPrice,
    totalAmountPaid,
    totalAmountMoney,
    listSubPartner,
  } = useSelector((state) => state?.project);

  const [listConstructionItem, setListConstructionItem] = useState(
    dataListConstruction || []
  );
  const [modalShowMess, setModalShowMess] = useState({
    isShow: false,
    content: '',
  });

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  useEffect(() => {
    dispatch(getProjectDetail({ id: idProject }));
    // eslint-disable-next-line
  }, []);

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
    listConstructionItem &&
    listConstructionItem.filter((item) => item.progress >= 75 && !item.rating);

  let ListDESC = [];
  if (listConstructionItem && listConstructionItem.length > 0) {
    ListDESC = listConstructionItem.slice().sort((a, b) => {
      return Number(b.amount) - Number(a.amount);
    });
  }
  useEffect(() => {
    if (sortPrice) {
      setListConstructionItem(ListDESC);
    } else {
      setListConstructionItem(dataListConstruction || []);
    }
    // eslint-disable-next-line
  }, [sortPrice, dataListConstruction]);

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
    setIsShowModal(false);
    const { partner, category } = valueSearch;
    dispatch(
      filterSearchDetail({
        partner: partner.label,
        category: category.label,
        dataListConstruction,
      })
    );
  };

  const handleSubmitRating = (item) => {
    dispatch(
      ratingProject({
        construction_item_id: itemRating.id,
        rate: parseFloat(item.rating),
        content: item.note || '',
      })
    );
  };

  const handleSortPrice = () => {
    setSortPrice(!sortPrice);
  };

  return (
    <MainLayout headTitle="Quản lý tiến độ công trình">
      <div className="page-construction pt-page">
        {isProcessingProject ? (
          <Loading />
        ) : (
          <>
            <h2 className="page-title">CHI TIẾT TIẾN ĐỘ CÔNG TRÌNH</h2>
            <div className="project-info">
              <div className="project-title">
                {dataProjectDetail?.name || ''}
              </div>
              <div className="project-sub">
                Tên công trình / chủ đầu tư:
                {` ${dataProjectDetail?.partnerName || ''}`}
              </div>
              <div className="project-address">
                Địa chỉ:
                {` ${dataProjectDetail?.address || ''}`}
              </div>
            </div>
            <TableConstructionManager
              dataList={listConstructionItem}
              listPartner={listPartner}
              listCategory={listSubPartner}
              handleSubmitForm={handleSubmitForm}
              isShowModal={isShowModal}
              handleShowModal={handleShowModal}
              handleShowModalRating={handleShowModalRating}
              useRef={wrapperInfoRef}
              handleSortPrice={handleSortPrice}
              sortPrice={sortPrice}
            />
            <div className="project-total">
              <ul>
                <li>
                  <label>Tổng dự toán:</label>
                  <div>{totalAmountPrice}</div>
                </li>
                <li>
                  <label>Tổng tiền đã thanh toán:</label>
                  <div>{totalAmountPaid}</div>
                </li>
                <li className="total">
                  <label>Tổng tiền còn lại:</label>
                  <div>{totalAmountMoney}</div>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
      <ModalRating
        handleSubmitRating={handleSubmitRating}
        isShowModalRating={isShowModalRating}
        handleCloseIcon={handleCloseIcon}
        isProcessing={isProcessing}
      />

      {/* Modal thông báo số lượng cần đáng giá */}
      <ModalPopup
        isOpen={quantityRating?.length > 0 ? openModalNumberRating : false}
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

export default memo<Props>(ConstructionManager);
