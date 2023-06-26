import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
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
      let activeImagePath = [];

      for (const image of images) {
        for (const src of image.src) {
          if (window.matchMedia(src.size).matches) {
            activeImagePath.push(src.path);
            break;
          }
        }
      }

      setActiveImage(activeImagePath)
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={8}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: `${styles.swiperButtonNext}`,
          prevEl: `${styles.swiperButtonPrev}`,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ 
          clickable: true, 
          renderBullet: (_, className) => {
            return `<button class="${className} ${styles.pagination__bullet}"></button>`
          }  
        }}
      >
        {activeImage.map((src, index) => (
          <SwiperSlide key={index}>
            <img className={styles.image} src={src} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={styles.swiperButtonNext}>Próximo</button>
      <button className={styles.swiperButtonPrev}>Anterior</button>
    </div>
  )
}
