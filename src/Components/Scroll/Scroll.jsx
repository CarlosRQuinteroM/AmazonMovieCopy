import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div>
            <div class="carousel-wrapper">
            <Carousel>
                <div>
                    <img className="carrusel" src="https://m.media-amazon.com/images/S/sonata-images-prod/ROW_ES_TVOD_Hero_Elcano_Multi_Title_Store_Feb21_v4/091e6e0f-dca1-4b7b-8671-2262f5ee4ec3._UR3000,600_SX1500_FMwebp_.jpg" alt="" />
                </div>
                <div>
                    <img className="carrusel" src="https://m.media-amazon.com/images/S/sonata-images-prod/ES_TVOD_SI_GodzillaVsKong_VOD/59156170-88ad-45b1-bce1-40a3b840a954._UR3000,600_SX1500_FMwebp_.jpeg" alt="" />
                </div>
                <div>
                    <img className="carrusel" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/TVOD_Hero_Joker_EST_ES/1ea5fea7-cc67-42bc-be94-cc46b3638dc8._UR3000,600_SX1500_FMwebp_.jpg" alt="" />
                </div>
            </Carousel>
        </div>
        </div>
    );
}
