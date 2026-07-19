import React from "react";
import { Carousel } from 'react-bootstrap';

function SliderPreview({imgList}) {
    return (
        <Carousel>
            {
                imgList?.map((img, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt="Smart Lock"
                            loading={index === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            width="800"
                            height="800"
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>

    );
}

export default SliderPreview;
