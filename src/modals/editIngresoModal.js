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
    z-10
    "
    style={{
    marginTop:'-350px',
    marginLeft:'100px'}}
    >
      {children}
    </div>,
    document.getElementById('modal')
  );
};


export {EditIngresoModal};