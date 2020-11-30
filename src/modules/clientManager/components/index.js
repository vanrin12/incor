/* eslint-disable no-nested-ternary */
// @flow
import React, { memo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MainLayout from '../../../commons/components/MainLayout';
import IMAGES from '../../../themes/images';
import ItemClientManager from './ItemClient';
import { listDataClient } from '../../../mockData/listData';

type Props = {
  history: {
    push: Function,
  },
};

const ClientManager = ({ history }: Props) => {
  const totalRows = 50;
  const [paginationIndex, setPaginationIndex] = useState(0);

  const handleSelectPagination = (eventKey) => {
    setPaginationIndex(eventKey.selected);
  };

  // Render list item
  const renderListClient =
    listDataClient && listDataClient.length > 0 ? (
      listDataClient.map((item) => (
        <ItemClientManager key={item.id} history={history} itemObj={item} />
      ))
    ) : (
      <div className="no-data">KHÔNG CÓ BÀI VIẾT NÀO.</div>
    );

  return (
    <MainLayout>
      <div className="page-client">
        <div
          className="bg-page-title"
          style={{
            backgroundImage: `url(${IMAGES.bg_title_client})`,
          }}
        />
        <div className="container">
          <div className="page-title">KHÁCH HÀNG</div>
          <div className="list-client">{renderListClient}</div>

          {totalRows > 10 && (
            <div className="wrapper-pagination">
              <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel={<span className="gap">...</span>}
                pageCount={Math.ceil(totalRows / 10)}
                onPageChange={(eventKey) => handleSelectPagination(eventKey)}
                forcePage={paginationIndex}
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
        </div>
      </div>
    </MainLayout>
  );
};

export default memo<Props>(ClientManager);
