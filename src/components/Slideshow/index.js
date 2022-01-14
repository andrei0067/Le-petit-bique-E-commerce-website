import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {makeStyles} from "@mui/styles";
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
// import "swiper/swiper-bundle.css";

const useStyles = makeStyles({
    sliderCustom: {
        '&.swiper': {
            width: "100%",
            height: "100%"
        },
        '&.swiper_slide': {
            textAlign: "center",
            fontSize: "18px",
            background: "#fff",
            display: "flex",
            WebkitBoxPack: "center",
            MsFlexPack: "center",
            WebkitJustifyContent: "center",
            justifyContent: "center",
            WebkitBoxAlign: "center",
            MsFlexAlign: "center",
            WebkitAlignItems: "center",
            alignItems: "center"
        },
        '&.swiper_slide_img': {
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }
    }
});
export default function Slideshow() {
    const classes = useStyles()
    return (
        <>
            <Swiper virtual
                    slidesPerView={1}>
                <SwiperSlide style={{ listStyle: "none" }}>
                    <div style={{height: '320px',
                        lineHeight: '320px',
                        background: '#364d79'}}>
                        Slide 1
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ listStyle: "none" }}><div style={{height: '320px',
                    lineHeight: '320px',
                    background: '#364d79'}}>
                    Slide 2
                </div></SwiperSlide>
                <SwiperSlide style={{ listStyle: "none" }}><div style={{height: '320px',
                    lineHeight: '320px',
                    background: '#364d79'}}>
                    Slide 3
                </div></SwiperSlide>
                <SwiperSlide style={{ listStyle: "none"}}><div style={{height: '320px',
                    lineHeight: '320px',
                    background: '#364d79'}}>
                    Slide 4
                </div></SwiperSlide>
            </Swiper>

        </>
    )
}