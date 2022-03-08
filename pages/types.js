import React, {useRef, useEffect} from 'react';
import Title from "../components/Title";
import { useScreenSize, useBreakpoint } from "../services";
import CarouselMobile from "../components/CarouselMobile";
import CarouselDesktop from "../components/CarouselDesktop";
import {gsap} from 'gsap';

const Types = () => {
  const Carousel = useRef();
  const CarouselM = useRef();
  const tl = useRef();
  const bottomInfo = useRef();
  useEffect(() => {
    tl.current = gsap.timeline()
    .from(Carousel.current, 1, {y: -600, display: 'none'})
    .from(CarouselM.current, 1, {y: -600, display: 'none'},"-=1")    
    .from(bottomInfo.current, 1, {y: 600, display: 'none'})
  }, [])
  let screen = useScreenSize();
  let breakpoint = useBreakpoint(screen);
  return (
    <>
    {breakpoint == 'Mobile' ? <CarouselMobile ref={CarouselM} /> : <CarouselDesktop ref={Carousel}/>  }
      <div className="flex flex-col relative z-10 min-h-2/5-scr items-center justify-between md:min-h-min" ref={bottomInfo}>
        <Title title={"Tipos"} />
        <p className="text-center text-black self-center  w-5/6 text-3xl mt-4 ">
          los hay mas chicos y mas grandes, con formas o redondos, existe una
          amplia gama de frascos en el comercio actual.
        </p>
      </div>
    </>
  );
};

export default Types;
