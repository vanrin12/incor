import React, { useState } from 'react';
import MainLayout from 'commons/components/MainLayout';
import Loading from '../../../commons/components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import useWindowDimensions from '../../../customHooks/useWindowDimensions '
import {
  productList,
} from '../../../mockData/dataSlide';
import magazineItem from './magazineItem';
import ReactPaginate from 'react-paginate';

type Props = {
  history: {
    push: Function,
    location: {
      state: Object,
    },
  },
};



const magazineList = ({ history }: props ) => {

  const { height, width } = useWindowDimensions();
  const [paginationIndex, setPaginationIndex] = useState(null);
  const {
    dataListHashTags,
    sliderMain,
    isProcessing,
  } = useSelector((state) => state?.home);

  const renderProductList = productList.map(p => {
    return (
      <magazineItem product={p} history={history}/>
    )
  })

  return (
    <MainLayout
      headTitle="Sản Phẩm"
    >
      <div className="main-wrap">
        {false ? (
          <Loading />
        ) : (
          <>
            <div className="banner" style={{
              backgroundImage: `url(${width > 1280 ? sliderMain?.uploads?.[0]?.image : sliderMain?.uploads?.[1]?.image})`
            }} />
            <div className='line-space'>
              <p>TẠP CHÍ KHÓA KANET</p>
            </div>
            <div className='container-fluid'>
              <div className='row d-flex justify-content-center' style={{ gap: "20px" }}>
                {renderProductList}
              </div>
              {productList.length > 6 && (
                <div className="wrapper-pagination">
                  <ReactPaginate
                    previousLabel="Trang trước"
                    nextLabel="Trang sau"
                    breakLabel={<span className="gap">...</span>}
                    pageCount={Math.ceil(productList.length / 6)}
                    onPageChange={(eventKey) => { }}
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
            </div>
          </>
        )}
      </div>
    </MainLayout>

  );
}

export default magazineList;