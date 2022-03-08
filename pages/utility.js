import React, {useRef, useEffect} from 'react';
import Image from "next/image";
import Title from '../components/Title';
import { gsap } from "gsap";

const Utility = () => {
  const tl = useRef();
  const title = useRef();
  const firstColumn = useRef();
  const secondColumn = useRef();
  const thirdColumn = useRef();
  
useEffect(() => {
  tl.current = gsap.
  timeline()
  .from(title.current, 1, {y:-500, display: 'none'})
  .from(firstColumn.current, 1, {x:-500, display: 'none'})
  .from(secondColumn.current, 1, {y:-800, display: 'none'},"-=1")
  .from(thirdColumn.current, 1, {x:500, display: 'none'}, "-=1");
  tl.current.play();
}, [])
  return (
    <>
      <Image
        src="/fondo utilidad.png"
        className="absolute z-0  w-11/12  object-cover"
        layout='fill'
        objectfit='cover'
      />
      <div className=" flex flex-col relative z-10  items-center justify-between">
        <Title title={"Utilidad"} ref={title} />
        <div className="flex flex-col mt-4 min-h-4/5-scr w-11/12  justify-between md:flex-row ">
          
          <div className="relative  md:pl-0 md:w-11/12 md:mr-4" ref={firstColumn}>
            <div className="bg-secondary  rounded-3xl my-3 self-center relative md:min-h-full">
              <p className="font-sans  text-2xl px-8 py-4 relative max-h-full z-10 sm:text-3xl md:text-4xl lg:text-5xl">
                Los frascos son la gran fuente receptora de liquidos del mundo
              </p>
              <Image
                src="/wateUUtility.png"
                className="absolute  translate-x-44 origin-bottom -rotate-270 z-0 opacity-1 md:translate-x-0"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="relative md:pl-0 md:w-11/12 md:mx-2" ref={secondColumn}>
            <div className="bg-secondary  rounded-3xl my-3 self-center relative md:min-h-full">
              <p className="font-sans  text-2xl px-8 py-4 relative z-10 sm:text-3xl lg:text-5xl">
                Pueden almacenarse con un cierre hermetico, su tapa, o
                utilizarlo sin ella
              </p>
              <Image
                src="/tapUtility.png"
                className="absolute translate-x-24  origin-bottom -rotate-270 z-0 opacity-40 md:translate-y-32 md:translate-x-0"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="relative md:pl-0 md:w-11/12 md:ml-4" ref={thirdColumn}>
            <div className="bg-secondary  rounded-3xl my-3 self-center relative md:min-h-full">
              <p className="font-sans  text-2xl px-8 py-4 relative z-10 sm:text-3xl lg:text-5xl">
                Tambien se usan en la industria farmaceutica para poder
                manipular quimicos
              </p>
              <Image
                src="/farmaUtility.png"
                className="absolute   translate-x-44  z-0 opacity-40 md:translate-x-0 md:translate-y-40"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Utility;
