import React from 'react';
import Card from 'react-bootstrap/Card';
import IMAGES from '../../../themes/images';
import ROUTERS from 'constants/router';

function ProductIem({ product, history }) {
  return (
    <>
      <Card className='col-md-3' style={{
        cursor: 'pointer'
      }}
      onClick={() => history.push(`${ROUTERS.PRODUCT_LIST}/${product.id}`)}
      >
        <Card.Body >
          <Card.Img variant="top" src={product.image} />
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <div className='d-flex justify-content-end'>
            <Card.Link variant="right" href={`/san-pham/${product.id}`}> <img src={IMAGES.arrowRight} style={{
              width: '25px',
              height: '15px'
            }} alt="Xem chi tiết" /></Card.Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductIem;