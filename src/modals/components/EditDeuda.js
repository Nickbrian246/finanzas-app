import React, { useRef, useState } from "react";
import Swal from 'sweetalert2';

import { BsXCircle } from "react-icons/bs";


const EditDeuda = ({
  ingresoArrayfromState,
  setIngresoArrayfromState,
  modal,
  setModal,
  editItemPosition,
  setItemPosition,
})=> {

const [modalNombre,setModalNombre]= useState('');
const [modalDeuda,setModalDeuda]= useState('');
const refDeudaDeuda = useRef(null);

const handelInputModalNombre = (e) => {
  setModalNombre(e.target.value);
}
const handelInputModalDeuda = (e) => {
  setModalDeuda(e.target.value);
}


const keyEvent = (e) => {
  if(e.key ==='Enter' && modalNombre ===''){
    Swal.fire({
      icon: 'error',
      title: 'opps, para que hace falta un campo',
    })
    
  }
  if(e.key ==='Enter' && modalNombre !==''){
      refDeudaDeuda.current.focus();
  }
  if(e.key ==='Enter' && modalDeuda !==''){
    editItem();
    setModal(false);
  }
};

const handleCloseModal = () => {
  setModal(false);

};


const editItem = ()=> {
  const newArray = [...ingresoArrayfromState];
  newArray.splice(editItemPosition, 1,{
    nombre:modalNombre,
    monto:modalDeuda,
  });
  setIngresoArrayfromState(newArray);
  setModal(false)

}



  return (
    <>
    <div className="
    relative
    w-full
    flex
    flex-col
    items-center
    gap-5
    justify-center
    bg-slate-300

    ">
      <div className="absolute
      top-1
      right-2">
        <BsXCircle 
        onClick={()=> {handleCloseModal()}}  
      style={{color:'red',fontSize:'20px'}}/>
      </div>

      <h1
      className="mt-4
      ">
        Ingrese los cambios
      </h1>

      <input 
      className="w-48
      h-30px
      rounded-lg
      border-black
      drop-shadow-lg"
      placeholder="ingrese el nombre"
      onKeyUp={keyEvent}
      value={modalNombre}
      onChange= {handelInputModalNombre}
      type={'text'}/>

      <input 
      className="w-48
      h-30
      rounded-lg
      border-black
      drop-shadow-lg"
      placeholder="ingrese el monto"
      onKeyUp={keyEvent}
      ref={refDeudaDeuda}
      value={modalDeuda}
      onChange= {handelInputModalDeuda}
      type={'number'}
      />

      <button
      onClick={()=> {editItem()}}
      className="
      w-28
      h-8
      rounded-lg
      drop-shadow-lg
      bg-orange-300
      mb-4
      hover:bg-lime-600"
      >Guardar</button>

    </div>
    </>
  );
};


export  {EditDeuda};