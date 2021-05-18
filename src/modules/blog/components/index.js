/* eslint-disable no-nested-ternary */
// @flow
import React, { memo, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { getListBlogOffCategory } from 'modules/blog/redux';
import MainLayout from '../../../commons/components/MainLayout';
import IMAGES from '../../../themes/images';
import ItemClientManager from './ItemClient';
import Loading from '../../../commons/components/Loading';

type Props = {
  history: {
    push: Function,
    location: Object,
  },
  match: {
    params: {
      slug: string,
    },
  },
};

const ClientManager = ({ history, match }: Props) => {
  const { slug } = match?.params;
  const label = history?.location?.state?.label || 'Liên hệ';
  const dispatch = useDispatch();
  const {
    listBlogOffCategory,
    isProcessing,
    totalRow,
    nameCategory,
    imageCategory,
  } = useSelector((state) => state?.blog);

  const [paginationIndex, setPaginationIndex] = useState(null);

  const handleSelectPagination = (eventKey) => {
    setPaginationIndex(eventKey.selected);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleGetListBlogOffCategory = useCallback(
    (params) => {
      dispatch(getListBlogOffCategory(params));
    },
    // eslint-disable-next-line
    [dispatch, getListBlogOffCategory]
  );

  useEffect(() => {
    if (slug) {
      setPaginationIndex(0);
      handleGetListBlogOffCategory({
        slug_or_id: slug,
        page: 1,
        paged: 6,
      });
    }
    // eslint-disable-next-line
  }, [slug]);

  useEffect(() => {
    if (paginationIndex !== null) {
      handleGetListBlogOffCategory({
        slug_or_id: slug,
        page: paginationIndex + 1,
        paged: 6,
      });
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // eslint-disable-next-line
  }, [handleGetListBlogOffCategory, paginationIndex]);

  // Render list item
  const renderListBlogCategory =
    listBlogOffCategory && listBlogOffCategory.length > 0 ? (
      listBlogOffCategory.map((item) => (
        <ItemClientManager
          key={item.id}
          history={history}
          itemObj={item}
          slug={slug}
        />
      ))
    ) : (
      <div className="no-data">KHÔNG CÓ BÀI VIẾT NÀO.</div>
    );

  return (
    <MainLayout headTitle={`Blog - ${nameCategory || label}`}>
      <div className="page-client wrap-slide">
        <div className="bg-page-title">
          <img src={imageCategory || IMAGES.bg_title_client} alt="" />
        </div>
        <div className="container">
          <div className="page-title">{nameCategory || label}</div>
          {isProcessing ? (
            <Loading />
          ) : (
            <>
              <div className="list-client">{renderListBlogCategory}</div>
              {totalRow > 6 && (
                <div className="wrapper-pagination">
                  <ReactPaginate
                    previousLabel="Trang trước"
                    nextLabel="Trang sau"
                    breakLabel={<span className="gap">...</span>}
                    pageCount={Math.ceil(totalRow / 6)}
                    onPageChange={(eventKey) =>
                      handleSelectPagination(eventKey)
                    }
                    forcePage={paginationIndex || 0}
                    containerClassName="pagination"
                    disabledClassName="disabled"
                    activeClassName="active"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    marginPagesDisplayed={1}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default memo<Props>(ClientManager);
