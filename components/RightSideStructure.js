import React from 'react';

const RightSideStructureWithoutRef = ({ children, classes}, ref) => {
  return (
    <div className={`flex flex-col w-11/12 h-full   justify-around self-center md:mr-20 md:h-7/6  ${classes}`} ref={ref}>
      {children}
    </div>
  );
};
const RightSideStructure = React.forwardRef(RightSideStructureWithoutRef)
export default RightSideStructure;
