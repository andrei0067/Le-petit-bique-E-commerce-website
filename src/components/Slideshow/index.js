import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {makeStyles} from "@mui/styles";

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
                <Swiper className={classes.sliderCustom}>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>

        </>
    )
}