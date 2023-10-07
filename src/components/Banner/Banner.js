import React from 'react'
import './Banner.css'
import banner from '../../assets/Banner/banner.jpg'
import banner1 from '../../assets/Banner/Banner_1.jpg'
import banner2 from '../../assets/Banner/Banner_2.jpg'
import banner3 from '../../assets/Banner/banner_3.jpg'
import banner4 from '../../assets/Banner/Banner_4jpg.jpg'
import banner5 from '../../assets/Banner/Banner_5jpg.jpg' 
import banner6 from '../../assets/Banner/Banner_6.jpg'
import banner7 from '../../assets/Banner/Banner_7.jpg' 
import banner8 from '../../assets/Banner/Banner_8.jpg' 
const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full h-screenb border-style">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner} className="w-full" alt="Banner 1" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" alt="Banner 2" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" alt="Banner 3" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" alt="Banner 4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" alt="Banner 5" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={banner5} className="w-full" alt="Banner 6" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide7" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide7" className="carousel-item relative w-full">
                    <img src={banner6} className="w-full" alt="Banner 7" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide8" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide8" className="carousel-item relative w-full">
                    <img src={banner7} className="w-full" alt="Banner 8" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide7" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
