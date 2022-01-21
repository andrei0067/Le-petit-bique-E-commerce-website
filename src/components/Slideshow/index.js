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
import MediaCardCustom from "../MediaCardCustom";
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
export default function Slideshow(props) {
    const {imagesIds , folderId} = props
    const classes = useStyles()
    console.log("Imaginile sunt Pentalog: ", imagesIds);
    return (
        <>
                <Swiper virtual
                        slidesPerView={1}>
                    {imagesIds.map(image=>(
                        <SwiperSlide style={{ listStyle: "none" }} key={image}>
                            <MediaCardCustom imageId={image} folderId={folderId}/>
                        </SwiperSlide>
                        )
                    )}
                </Swiper>

        </>
    )
}
