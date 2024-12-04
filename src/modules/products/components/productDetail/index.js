import React from 'react';
import MainLayout from 'commons/components/MainLayout';
import SliderPreview from './SliderPreview'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import IMAGES from 'themes/images';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const ProductDetail = ({ id }) => {

  return (
    <MainLayout
      headTitle="Sản Phẩm Chi Tiết"
      customClass='custom-main-layout'
    >
      <div className="container product-detail-wrap">
        <div className='row'>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Trang Chủ</Breadcrumb.Item>
            <Breadcrumb.Item href="/Sản Phẩm">
              Sản Phẩm
            </Breadcrumb.Item>
            <Breadcrumb.Item active>KHÓA VÂN TAY 001</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <SliderPreview />
          </div>
          <div className='col-md-6'>
            <h1 className='product-detail-tittle'>KHÓA VÂN TAY THÔNG MINH KANET ELITE KN001</h1>
            <div class="price d-flex align-items-center"><h2 className="text-danger">4.999.999</h2><button type="submit" class="btn-contact ml-3">Liên Hệ</button></div>
            <div className='promotion'>
              <div className='label'>Ưu Đãi</div>
              <div className='promotion-detail'>
                <p>Tặng ngay Gói bảo hành trị giá <strong style={{ color: '#b40706', fontWeight: 800 }}>5.000.000</strong> khi lắp khóa từ 30/4 - 1/5</p>
                <p>Tặng ngay Gói lắp đặt trị giá <strong style={{ color: '#b40706', fontWeight: 800 }}>2.000.000</strong> khi lắp khóa từ 30/4 - 1/5</p>
              </div>
            </div>
            <div className='feature-detail'>
              <h2 className='feature-title'>Tính năng sản phẩm</h2>
              <ul className='feature-list dashed'>
                <li>Kiểu mở khóa: vân tay, thẻ từ, mật mã, chìa khóa cơ, điện thoại.</li>
                <li>Bộ nhớ 100 người dùng.</li>
                <li>Phần mềm TTLOCK tiếng Việt.</li>
                <li>Màu sắc: Đen, vàng, đồng, bạc.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='tabs-wrap mt-3 mt-sm-5'>
          <Tabs
            defaultActiveKey="desc"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="desc" title="MÔ TẢ SẢN PHẨM">
              <div style={{
                fontFamily: 'Bebas',
                fontSize: '14px'
              }}>
                <h2 className='mt-2'
                  style={{
                    fontSize: '20px'
                  }}
                >Heading 2 Từ Khóa SEO Phụ</h2>
                <p className='mt-2 content-post'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <img src={IMAGES.product01} alt="Product Image" className='image-post' />
                <h2 style={{
                  marginTop: '10px',
                  fontSize: '20px'
                }}>Heading 2 Từ Khóa SEO Phụ</h2>
                <p className='mt-2 content-post'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Tab>
            <Tab eventKey="technicalDesc" title="THÔNG SỐ KỸ THUẬT">
              <div className="product-specs">
                <table className="specs-table">
                  <tbody>
                    <tr>
                      <th>KIỂU MỞ KHÓA</th>
                      <td>Vân tay, thẻ từ, mật mã, chìa khóa cơ, điện thoại.</td>
                    </tr>
                    <tr>
                      <th>BỘ NHỚ</th>
                      <td>100 người dùng</td>
                    </tr>
                    <tr>
                      <th>CÔNG NGHỆ VÂN TAY</th>
                      <td>FBC/ Sinh trắc học</td>
                    </tr>
                    <tr>
                      <th>PHẦN MỀM</th>
                      <td>TTLock Tiếng Việt, hỗ trợ Android và iOS</td>
                    </tr>
                    <tr>
                      <th>MÀU SẮC</th>
                      <td>Đen, Vàng, Đồng Bạc</td>
                    </tr>
                    <tr>
                      <th>TRỌNG LƯỢNG</th>
                      <td>2 Kg</td>
                    </tr>
                    <tr>
                      <th>KÍCH THƯỚC</th>
                      <td>5 x 10 x 20cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tab>
            <Tab eventKey="relateProduct" title="SẢN PHẨM LIÊN QUAN">
              <div style={{
                fontFamily: 'Bebas',
                fontSize: '14px'
              }}>
                <h2 className='mt-2'
                  style={{
                    fontSize: '20px'
                  }}
                >Heading 2 Từ Khóa SEO Phụ</h2>
                <p className='mt-2'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <img src={IMAGES.product01} alt="Product Image" className='image-post' />
                <h2 style={{
                  marginTop: '10px',
                  fontSize: '20px'
                }}>Heading 2 Từ Khóa SEO Phụ</h2>
                <p className='mt-2'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

    </MainLayout>
  )
}

export default ProductDetail;