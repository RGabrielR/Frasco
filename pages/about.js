import React, {useRef, useEffect} from 'react';
import Title from "../components/Title";
import FlexStructure from "../components/FlexStructure";
import RightSideStructure from "../components/rightSideStructure";
import RightOptions from "../components/RightOptions";
import {gsap } from "gsap";
const about = () => {
  const leftSide = useRef();
  const rightSide = useRef();
  const title = useRef();
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap.timeline()
    .from(title.current,1, {y: -300, display: 'none'} )
    .from(leftSide.current, 1, {x: -800, display: 'none'})
    .from(rightSide.current, 1, {x: 800, display: 'none'}, "-=1")
  }, [])
  return (
    <div className="flex flex-col items-center  md:justify-around h-screen">
      <Title title={"Creador"} ref={title} />
      <FlexStructure classes={"md:w-[95%] min-h-[85vh] md:min-h-min"}>
        <div className=" flex flex-col justify-around self-center items-center h-2/5 md:flex-row " ref={leftSide}>
          <div className=" flex flex-col bg-primary text-center mt-2 w-11/12 md:h-[70vh] md:mt-0 md:self-center md:justify-around">
            <h1 className="text-3xl font-sans my-2 md:text-5xl">
              Gabriel Alabí
            </h1>
            <p className="text-justify font-sans text-xs w-11/12 pl-4 pr-2 py-2 text-xs md:min-h-[50vh] md:text-2xl md:pt-4 md:max-w-[100vw]">
              desarrollador fullstack MERN - mongo, express, react y node -
              construí esta pagina con el fin de mostrar habilidades en diseño,
              construcción de pagina web y experiencia de usuario. Para ver mas
              proyectos míos o saber mas de mí te invito en entrar a los
              siguientes links
            </p>
          </div>
        </div>
        <RightSideStructure ref={rightSide}>
          <RightOptions
            src="linkedin.png"
            title="linkedin"
            href="https://www.linkedin.com/in/ivan-gabriel-alabi/"
            bgBlack={false}
            newWindow={true}
          />
          <RightOptions
            src="github.png"
            title="github"
            href="https://github.com/RGabrielR"
            bgBlack={false}
            newWindow={true}
          />
          <RightOptions
            src="mail.png"
            title="mail"
            href="https://www.linkedin.com/in/ivan-gabriel-alabi/"
            bgBlack={false}
            newWindow={true}
          />
          <RightOptions
            src="portfolio.png"
            title="+ more"
            href="https://www.gabrielalabi.com.ar/"
            bgBlack={false}
            newWindow={true}
          />
        </RightSideStructure>
      </FlexStructure>
    </div>
  );
};

export default about;
