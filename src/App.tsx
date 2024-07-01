import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar, FreeMode} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/scrollbar';

import './App.css'

function App() {

  return (
    <div className='section'>
      <Swiper
        scrollbar={{draggable: true, hide: false}}
        modules={[Scrollbar, FreeMode]}
        freeMode={{enabled: true, sticky: false}}
        slidesPerView={'auto'}
        slidesOffsetAfter={120}
        spaceBetween={30}
        className="mySwiper"
      >
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
    </div>
  )
}

export default App
