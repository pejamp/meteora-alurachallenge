import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import styles from './Banner.module.scss';
import bannerImage1 from 'src/assets/Mobile/Banner carousel 1 _ 375.png';
import bannerImage2 from 'src/assets/Tablet/Banner carousel 1 _ 768.png';
import bannerImage3 from 'src/assets/Desktop/Banner-carousel 1 _ 1440 (1).png';

export function Banner() {
  const images = [
    {
      src: [
        { path: bannerImage1, size: '(max-width: 739px)' },
        { path: bannerImage2, size: '(min-width: 740px) and (max-width: 959px)' },
        { path: bannerImage3, size: '(min-width: 960px)' },
      ],
    },
    {
      src: [
        { path: bannerImage1, size: '(max-width: 739px)' },
        { path: bannerImage2, size: '(min-width: 740px) and (max-width: 959px)' },
        { path: bannerImage3, size: '(min-width: 960px)' },
      ],
    },
    {
      src: [
        { path: bannerImage1, size: '(max-width: 739px)' },
        { path: bannerImage2, size: '(min-width: 740px) and (max-width: 959px)' },
        { path: bannerImage3, size: '(min-width: 960px)' },
      ],
    },
  ];

  const [activeImage, setActiveImage] = useState([] as string[]);

  useEffect(() => {
    const handleResize = () => {
      for (const image of images) {
        image.src.forEach((src) => {
          if (window.matchMedia(src.size).matches) {
            setActiveImage([...activeImage, src.path]);
          }
        }
        );
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = activeImage.map((src, index) => (
    <SwiperSlide key={index}>
      <img src={src} alt="" />
    </SwiperSlide>
  ));
  

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {slides}
      </Swiper>
    </div>
  )
}
