/* eslint-disable no-nested-ternary */
// @flow
import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ROUTERS from 'constants/router';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { getDetailBlog, getListCategory } from 'modules/blog/redux';
import Loading from '../../../commons/components/Loading';
import MainLayout from '../../../commons/components/MainLayout';

type Props = {
  match: {
    params: {
      id: any,
      slug: any,
    },
  },
};

const ClientDetailManager = ({ match }: Props) => {
  const { id, slug } = match?.params;
  const dispatch = useDispatch();
  const {
    dataDetailBlog,
    isProcessing,
    relateBlog,
    listBlogCategories,
  } = useSelector((state) => state?.blog);

  const handleGetDetailBlog = useCallback(
    (blogId) => {
      dispatch(getDetailBlog(blogId));
    },
    // eslint-disable-next-line
    [dispatch, getDetailBlog]
  );

  useEffect(() => {
    handleGetDetailBlog(id);
  }, [handleGetDetailBlog, id]);

  useEffect(() => {
    dispatch(
      getListCategory({
        page: 1,
        paged: 99999,
      })
    );
    // eslint-disable-next-line
  }, []);

  const renderRelateBlog =
    relateBlog &&
    relateBlog.length > 0 &&
    relateBlog.map((item) => (
      <li key={item.id}>
        <Link to={`${ROUTERS.PAGE_BLOG}/${slug}/${item.id}`} title={item.name}>
          {item.name}
        </Link>
      </li>
    ));

  const renderListBlogCategories =
    listBlogCategories && listBlogCategories.length > 0 ? (
      listBlogCategories.map((item) => (
        <li key={item.id}>
          <Link to={`${ROUTERS.PAGE_BLOG}/${item.slug}`} title={item.name}>
            {item.name}
          </Link>
        </li>
      ))
    ) : (
      <div className="no-data">KHÔNG CÓ DANH MỤC NÀO.</div>
    );

  return (
    <MainLayout headTitle={`Blog - ${dataDetailBlog?.name || ''}`}>
      <div className="page-client detail">
        {isProcessing ? (
          <Loading />
        ) : (
          <>
            <div
              className="bg-page-title"
              style={{
                backgroundImage: `url(${dataDetailBlog?.image})`,
              }}
            >
              <div className="detail-top">
                <div className="detail-title">{dataDetailBlog?.name}</div>
                <ul className="breadcrumbs">
                  <li>
                    <Link to={ROUTERS.MAIN_PAGE} title="Trang chủ">
                      Trang chủ
                    </Link>
                  </li>
                  <li className="line"> / </li>
                  <li>
                    <Link
                      to={`${ROUTERS.PAGE_BLOG}/${slug}`}
                      title={dataDetailBlog?.category?.name || ''}
                    >
                      {dataDetailBlog?.category?.name}
                    </Link>
                  </li>
                  <li className="line"> / </li>
                  <li className="sub-title">{dataDetailBlog?.name}</li>
                </ul>
              </div>
            </div>
            <div className="custom-container">
              <div className="content-detail">
                <div className="row">
                  <div className="row-left col-12 col-lg-8">
                    <p>
                      {dataDetailBlog?.content &&
                        parse(dataDetailBlog?.content)}
                    </p>
                    <div className="recent-post">
                      <h3>BÀI VIẾT LIÊN QUAN</h3>
                      <ul>{renderRelateBlog}</ul>
                    </div>
                  </div>
                  <div className="row-right col-12 col-lg-4">
                    <div className="list-category">
                      <h3>CHUYÊN MỤC KHÁC</h3>
                      <ul>{renderListBlogCategories}</ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default memo<Props>(ClientDetailManager);
