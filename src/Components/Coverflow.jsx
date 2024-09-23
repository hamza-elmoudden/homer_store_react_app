import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Card } from './Card';
import { useSelector } from "react-redux";
import {  useEffect, useState } from "react";


export const Coverflow = () => {
  // const [prodcte, setProd] = useState(null);

  const products = useSelector((state) => state.products[0]);

  // useEffect(() => {
    
  //   setProd(products);
  // }, [products]);

  

  return (
    <>
      <div className="text-center py-3  text-2xl">
        <div className="text-2xl capitalize font-mono">Top Productes Seller</div>
      </div>
      <div className='px-3 py-10 container mx-auto overflow-hidden'>
        <div className="w-full">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000, // Adjust the delay as needed
              disableOnInteraction: false, // Keeps autoplay even if the user interacts with the Swiper
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper py-8"
          >
            {
              products && products.map((prod)=>{
                return(
                  <SwiperSlide key={prod._id} className="w-fit">
                  <Card  prod={prod}/>
                </SwiperSlide>
                )
              })
            }
           
          </Swiper>
        </div>
      </div>
    </>
  )
}
