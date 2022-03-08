const FlexStructure = ({ children, classes }) => {
  return (
    <div className={`flex flex-col content-between max-w-full max-h-full md:flex-row  md:items-center ${classes}`}>
      {children}
    </div>
  );
};
export default FlexStructure;
