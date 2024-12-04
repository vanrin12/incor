import React from "react";
import { Carousel } from 'react-bootstrap';
import IMAGES from 'themes/images';

function SliderPreview() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMAGES.product01}
                    alt="Smart Lock"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMAGES.product02}
                    alt="Smart Lock"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMAGES.product03}
                    alt="Smart Lock"
                />
            </Carousel.Item>
           
        </Carousel>

    );
}

export default SliderPreview;