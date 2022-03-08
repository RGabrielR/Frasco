import React, {useRef, useEffect} from 'react';
import FlexStructure from "../components/FlexStructure";
import RightSideStructure from "../components/rightSideStructure";
import RightOptions from "../components/RightOptions";
import JarFloor from "../components/JarFloor";
import {gsap} from 'gsap';
export default function Home() {
  const leftSide = useRef();
  const rightSide = useRef();
  const bottom = useRef();
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap.timeline()
    .from(leftSide.current, 1, {x: -1000, display: 'none'})
    .from(rightSide.current, 1, {x:1000, display: 'none'}, "-=1")
    .from(bottom.current, 1, {y: 500, display: 'none'})
  }, [])
  return (
    <div className="relative">
      <FlexStructure classes={" md:h-4/5-scr md:w-6/4"}>
        <div className="bg-primary w-11/12 justify-center  self-center  rounded-2xl relative mt-2 md:mx-6 md:mt-12" ref={leftSide}>
          <img src="/mainjar.png" className=" block mx-auto w-1/2 md:h-3/4 md:w-3/4 animate-float"    />
          <h1 className="font-sans text-4xl text-center bg-black text-white absolute cursor-default top-1/2 inset-x-2 rounded-xl md:bottom-12 md:text-5xl md:py-4 md:top-auto">
            frasco.com.ar
          </h1>
        </div>

       <RightSideStructure classes={"md:mt-6"} ref={rightSide}>
          <RightOptions src='accesibilityIconFit-01.png' title='Usos' href='Utility' bgBlack={true} newWindow={false}/>
          <RightOptions  src='typesIconFit-01.png' title='Tipos' href='Types' bgBlack={true} newWindow={false}/>
          <RightOptions  src='accesibilityIconSlim-01.png' title='Creador' href='About' bgBlack={true} newWindow={false}/>
          </RightSideStructure>
      </FlexStructure>
      <div className="-ml-44 -mt-20 hidden md:block md:relative">
      < JarFloor ref={bottom} />
      </div>
    </div>
  );
}
