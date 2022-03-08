import Link from "next/link";
const RightOptions = ({ title, bgBlack, src, href, newWindow }) => {
  return (
    <>
      <div className="flex  flex-row my-2 bg-secondary rounded-lg hover:bg-primary">
        <img
          className={`${bgBlack ? "bg-black" : ""} rounded-lg w-12 md:w-20 `}
          src={`/${src}`}
        />
        {newWindow ? (
             <Link href={href}>
                 <a target="_blank">
             <h1 className="font-sans text-2xl text-black self-center cursor-pointer pl-20 md:text-6xl md:mx-auto md:px-20">
               {title}
             </h1>
             </a>
           </Link>
        ) : (
            <Link href={`/${href}`}>
             <h1 className="font-sans text-4xl text-black self-center cursor-pointer pl-20 md:text-4xl md:px-20">
               {title}
             </h1>
           </Link>
        )}
      </div>
    </>
  );
};

export default RightOptions;
