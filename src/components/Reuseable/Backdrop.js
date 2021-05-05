import React from "react";

const Backdrop = ({ showBackdrop, setShowBackdrop, children }) => {
  return (
    <>
      {showBackdrop && (
        <div
          id="blur"
          className="App active "
          onClick={() => setShowBackdrop((prev) => !prev)}
        >
          <div className="flex justify-center items-center">{children}</div>
        </div>
      )}
    </>
  );
};

export default Backdrop;
