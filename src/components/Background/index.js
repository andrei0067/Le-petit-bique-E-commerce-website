import React from 'react'
import Particles from "react-tsparticles";
function Background() {
    return (
        <Particles
            params={{

                "autoPlay": true,
                "background": {
                    "color": {
                        "value": "#ffffff"
                    },
                },
                "fullScreen": {
                    "enable": true,
                    "zIndex": -1
                },
                "fpsLimit": 60,
                "particles": {
                    "move": {
                        "angle": {
                            "offset": 0,
                            "value": 90
                        },
                        "direction": "none",
                        "enable": true,
                        "speed": 2,
                    },
                    "number": {
                        "density": {
                            "enable": true,
                            "area": 800,
                            "factor": 1000
                        },
                        "limit": 0,
                        "value": 50
                    },
                    "rotate": {
                        "random": {
                            "enable": true,
                            "minimumValue": 0
                        },
                        "animation": {
                            "enable": true,
                            "speed": 5,
                            "sync": false
                        },
                        "direction": "random",
                    },
                    "shape": {
                        "options": {
                            "character": {
                                "fill": false,
                                "font": "Verdana",
                                "style": "",
                                "value": "*",
                                "weight": "400"
                            },
                            "image": [
                                {
                                    "src": "https://cdn-icons-png.flaticon.com/512/3082/3082060.png",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": "https://cdn-icons.flaticon.com/png/512/1702/premium/1702310.png?token=exp=1654720364~hmac=e918ae77239672249536d67e6b3fcaa2",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": "https://cdn-icons.flaticon.com/png/512/1702/premium/1702305.png?token=exp=1654720364~hmac=97c5683013e5be3ae55da1dbfe839c40",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": "https://cdn-icons-png.flaticon.com/512/6984/6984674.png",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": "  https://cdn-icons-png.flaticon.com/512/2367/2367773.png",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons-png.flaticon.com/512/2367/2367733.png",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons-png.flaticon.com/512/2367/2367608.png",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons.flaticon.com/png/512/2632/premium/2632839.png?token=exp=1654724479~hmac=e9954c1cc5b5c06dd83669a82f959050",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons-png.flaticon.com/512/3468/3468377.png",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons-png.flaticon.com/512/852/852907.png",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons.flaticon.com/png/512/3192/premium/3192394.png?token=exp=1654725340~hmac=a26c8a431d29d2db3c295ff48e430d21",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons.flaticon.com/png/512/3192/premium/3192399.png?token=exp=1654725341~hmac=2530fa073399f1e38ceb1b05622e400c",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons.flaticon.com/png/512/3192/premium/3192397.png?token=exp=1654725367~hmac=acce06f9b5c8ebb6381024cc5611598b",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons.flaticon.com/png/512/3192/premium/3192396.png?token=exp=1654725389~hmac=5d5ceb28adedb668346e5d4b10a9932f",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons-png.flaticon.com/512/7703/7703816.png",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons.flaticon.com/png/512/1409/premium/1409448.png?token=exp=1654725475~hmac=9c29f39e7682dd163d1ef721e8de979d",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons-png.flaticon.com/512/4019/4019665.png",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons.flaticon.com/png/512/2977/premium/2977402.png?token=exp=1654725488~hmac=5995d751ced544b8494792c18ac17453",
                                    "width": 32,
                                    "height": 32
                                },
                                {
                                    "src": " https://cdn-icons-png.flaticon.com/512/613/613968.png",
                                    "width": 32,
                                    "height": 32
                                },
                            ]
                        },
                        "type": "image"
                    },
                    "size": {
                        "random": {
                            "enable": false,
                            "minimumValue": 1
                        },
                        "value": 23,
                        "animation": {
                            "count": 0,
                            "speed": 40,
                            "startValue": "random",
                            "minimumValue": 0.1
                        }
                    },
                },

            }}/>
    )


}


export default Background;