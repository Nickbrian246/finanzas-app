import React from "react";
import ReactDOM from "react-dom";

const EditIngresoModal = ({children}) => {


  return ReactDOM.createPortal(
    <div className="
    
    w-80
    h-auto
    drop-shadow-lg
    content-center
    justify-items-center
    ">
      {children}
    </div>,
    document.getElementById('modal')
  );
};


export {EditIngresoModal};