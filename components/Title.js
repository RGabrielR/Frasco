import React from 'react';
import Link from "next/link";

const TitleWithoutRef = ({ title }, ref) => {
  return (
    <div className=" bg-primary w-11/12 rounded-md self-center text-center text-black font-sans font-bold mt-5 text-5xl cursor-default relative md:text-6xl" ref={ref}>
      <p> {title} </p>
      <Link href={"/"}>
        <img
          src="/goBackBlack.png"
          layout="fill"
          objectFit="contain"
          className="absolute  top-1  w-10 z-50 cursor-pointer rounded-lg transition-all duration-500 hover:invert hover:bg-white md:w-14 md:left-8 md:top-0.5"
        />
      </Link>
    </div>
  );
};
const Title = React.forwardRef(TitleWithoutRef);
export default Title;
