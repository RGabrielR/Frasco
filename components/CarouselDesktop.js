import useEmblaCarousel from "embla-carousel-react";
import React, { useState, useEffect, useCallback } from "react";
import { mediaByIndex } from "../media";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";  
import styles from '../styles/Embla.module.css';
import desktop from '../styles/EmblaDesktop.module.css';
const CarouselDesktop = () => {
    const SLIDE_COUNT = 6;
    const slides = Array.from(Array(SLIDE_COUNT).keys());
    const [viewportRef, embla] = useEmblaCarousel({
      loop:true,
      dragFree: true,
      containScroll: "trimSnaps"
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
      if (!embla) return;
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);
  
    useEffect(() => {
      if (!embla) return;
      embla.on("select", onSelect);
      onSelect();
    }, [embla, onSelect]);
  
    return (
      <div className={desktop.embla} >
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {slides.map((index) => (
              <div className={desktop.embla__slide} key={index}>
                <div className={desktop.embla__slide__inner}>
                <img
                    className={desktop.embla__slide__img}
                    src={mediaByIndex(index).src.default.src}
                    alt="A jar"
                  />
                  <h1 className={styles.embla__slide__text}>
                    {mediaByIndex(index).text}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    );
  };

 
export default CarouselDesktop;