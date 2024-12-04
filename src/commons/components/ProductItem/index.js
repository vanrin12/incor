import React from 'react';
import Card from 'react-bootstrap/Card';
import ROUTERS from 'constants/router';

function ProductIem({ product, history }) {
  return (
    <div className='col-6 col-md-3 p-2 product-item'>
      <Card style={{
        cursor: 'pointer'
      }}
        onClick={() => history.push(`${ROUTERS.PRODUCT_LIST}/${product.id}`)}
      >
        <Card.Body>
          <Card.Img variant="top" src={product.image} />
          <Card.Title className='product-item__title'>Khóa thông minh cửa nhôm KANEX Elite KNX001</Card.Title>
          <div className='d-flex justify-content-around align-items-center'>
            <Card.Text className='product-item__price'>4.999.999</Card.Text>
            <button
              // onClick={() =>
                // history.push(`${ROUTERS.PAGE_BLOG}/${slug}/${itemObj?.id}`)
              // }
              className='product-item__btn-buy'
            >
              Mua Ngay
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductIem;