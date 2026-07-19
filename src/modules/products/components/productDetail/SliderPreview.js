import React from "react";
import { Carousel } from 'react-bootstrap';
import IMAGES from 'themes/images';

function SliderPreview({imgList}) {
    console.log(imgList);
    return (
        <Carousel>
            {
                imgList?.map((img, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt="Smart Lock"
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>

    );
}

export default SliderPreview;