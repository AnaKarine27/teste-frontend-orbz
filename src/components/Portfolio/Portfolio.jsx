import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Portfolio.css';
import { FiArrowRight } from 'react-icons/fi';
import portfolioImg1 from '../../assets/portfolio-img-1.png';
import portfolioImg2 from '../../assets/portfolio-img-2.png';
import portfolioImg3 from '../../assets/portfolio-img-1.png';
import portfolioImg4 from '../../assets/portfolio-img-2.png'; 

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container container">
        
        <div className="portfolio-text-content">
          <span>CONHEÇA</span>
          <h2>Nosso Trabalho</h2>
        </div>

        <div className="portfolio-carousel-content">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            pagination={{
              el: '.custom-pagination',
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide><img src={portfolioImg1} alt="Foto do Portfólio 1" /></SwiperSlide>
            <SwiperSlide><img src={portfolioImg2} alt="Foto do Portfólio 2" /></SwiperSlide>
            <SwiperSlide><img src={portfolioImg3} alt="Foto do Portfólio 3" /></SwiperSlide>
            <SwiperSlide><img src={portfolioImg4} alt="Foto do Portfólio 4" /></SwiperSlide>
          </Swiper>
          
          <div className="custom-pagination"></div>
          <button className="portfolio-button"> Conheça mais <FiArrowRight /> </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;