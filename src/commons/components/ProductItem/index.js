import React from 'react';
import Card from 'react-bootstrap/Card';
import ROUTERS from 'constants/router';

function ProductIem({ product, history }) {
  const formatCurrency = (value) => {
    if (!value) return ""; // Handle empty input
  
    // Convert to a string and remove all non-numeric characters except for a possible decimal point
    const numericValue = value.toString().replace(/\D/g, "");
  
    // Format as Vietnamese currency
    return new Intl.NumberFormat("vi-VN").format(Number(numericValue));
  };
  return (
    <div className='col-6 col-md-3 p-2 product-item'>
      <Card style={{
        cursor: 'pointer'
      }}
        onClick={() => history.push(`${ROUTERS.PRODUCT_LIST}/${product.id}`)}
      >
        <Card.Body>
          <Card.Img
            variant="top"
            src={product?.images?.[0]?.image}
            alt={product?.name || 'Sản phẩm KANET'}
            loading="lazy"
            decoding="async"
            width="600"
            height="600"
          />
          <Card.Title className='product-item__title'>{product.name}</Card.Title>
          <div className='d-flex justify-content-around align-items-center'>
            <Card.Text className='product-item__price'>{formatCurrency(String(Math.round(Number(product?.price))))}</Card.Text>
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
