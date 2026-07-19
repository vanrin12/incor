import React, { useState, useEffect } from 'react';
import MainLayout from 'commons/components/MainLayout';
import Loading from '../../../commons/components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import useWindowDimensions from '../../../customHooks/useWindowDimensions ';
import ProductIem from '../../../commons/components/ProductItem';
import ReactPaginate from 'react-paginate';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { CATEGORIES } from 'constants/listCategories';
import { getProducts } from '../redux';
type Props = {
  history: {
    push: Function,
    location: {
      state: Object,
    },
  },
};

const ProductList = ({ history }: Props) => {
  const { width } = useWindowDimensions();
  const [paginationIndex, setPaginationIndex] = useState(null);
  const dispatch = useDispatch();
  const [category, setCategory] = useState(CATEGORIES[0]?.id);

  const { sliderMain } = useSelector((state) => state?.home);

  const { products, isProcessing, total } = useSelector((state) => state?.products);

  useEffect(() => {
    dispatch(
      getProducts({
        product_category_id: category,
        page: paginationIndex + 1,
        paged: 12,
      })
    );
  }, [category, dispatch, paginationIndex]);

  const renderProductList =
    products &&
    products.map((p) => {
      return <ProductIem product={p} history={history} />;
    });

  const handleSelectCategory = (selectedCategory) => {
    if (selectedCategory !== category) {
      setCategory(selectedCategory);
      setPaginationIndex(0); // ✅ Reset to first page when category changes
    }
  };

  const handleSelectPagination = (eventKey) => {
    setPaginationIndex(eventKey.selected);
  };
  return (
    <MainLayout headTitle="Sản Phẩm">
      <div className="main-wrap">
        {isProcessing ? (
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
                activeKey={category} // ✅ Ensures correct tab is active
                id="tab-categories"
                onSelect={(eventKey) => handleSelectCategory(eventKey)}
              >
                {CATEGORIES.map((item) => (
                  <Tab eventKey={item.id} title={item.name} key={item.id} />
                ))}
              </Tabs>
            </div>
            <div className="container">
              <div className="row">{renderProductList}</div>
              {/* {products.length > 12 && ( */}
                <div className="wrapper-pagination">
                  <ReactPaginate
                    previousLabel="Trang trước"
                    nextLabel="Trang sau"
                    breakLabel={<span className="gap">...</span>}
                    pageCount={Math.ceil(total / 12)}
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
              {/* )} */}
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default ProductList;
