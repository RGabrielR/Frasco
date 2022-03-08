import React from 'react';
const JarFloorWithoutRef = (props, ref) => {
    const numericArray = [1, 2, 3, 4, 5, 6, 7, 8]
    return ( 
        <div ref={ref}>
        {numericArray.map(i => {
            return(
              <>
              <img className="fixed  w-40 translate-y-[20px] mt-32 -ml-40" style={{transform: `translateX(${i * 290}px)`}} src="/jarOnBottom (1).png"/>
              <img className="fixed  w-40 translate-y-[20px] mt-32 -ml-20" style={{transform: `translateX(${i * 300}px)`}} src="/jarOnBottom (2).png"/>
              <img className="fixed  w-40 translate-y-[20px] mt-32 " style={{transform: `translateX(${i * 300}px)`}} src="/jarOnBottom (3).png"/>
              </>
            )
           })}
           </div>  
     );
}
const JarFloor = React.forwardRef(JarFloorWithoutRef)
export default JarFloor;