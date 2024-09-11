import React, { useState } from 'react';
import MainLayout from 'commons/components/MainLayout';
import Loading from '../../../commons/components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import useWindowDimensions from '../../../customHooks/useWindowDimensions ';
import { productList } from '../../../mockData/dataSlide';
import ProductIem from '../../../commons/components/ProductItem';
import ReactPaginate from 'react-paginate';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { CATEGORIES } from 'constants/listCategories';
type Props = {
  history: {
    push: Function,
    location: {
      state: Object,
    },
  },
};

const ProductList = ({ history }: props) => {
  const { height, width } = useWindowDimensions();
  const [paginationIndex, setPaginationIndex] = useState(null);
  const { dataListHashTags, sliderMain, isProcessing } = useSelector(
    (state) => state?.home
  );

  const renderProductList = productList.map((p) => {
    return <ProductIem product={p} history={history} />;
  });

  return (
    <MainLayout headTitle="Sản Phẩm">
      <div className="main-wrap">
        {false ? (
          <Loading />
        ) : (
          <>
            <div
              className="banner"
              style={{
                backgroundImage: `url(${
                  width > 1280
                    ? sliderMain?.uploads?.[0]?.image
                    : sliderMain?.uploads?.[1]?.image
                })`,
              }}
            />
            <div className="line-space tabs-wrap">
              <Tabs
                defaultActiveKey={1}
                id="uncontrolled-tab-example"
              >
                {CATEGORIES.map((item) => (
                  <Tab eventKey={item.id} title={item.name} />
                ))}
              </Tabs>
            </div>
            <div className='container'>
              <div className='row'>
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
};

export default ProductList;
