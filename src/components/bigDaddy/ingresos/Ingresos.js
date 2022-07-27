import React, { useRef, useState } from "react";
import { BsXCircle } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import Swal from 'sweetalert2';


const Ingresos = ({
  ingresoArrayfromState,
  setIngresoArrayfromState,
  modal,
  setModal,
  editItemPosition,
  setItemPosition,
}) => {

const [ingreso, setIngreso] = useState('');
const [monto, setMonto] = useState('');
const refMonto = useRef(null);
const refIngreso = useRef(null);


const handleInputIngreso = (event) =>{
  setIngreso(event.target.value);
}
const handleInputMonto = (event) =>{
  setMonto(event.target.value);
}

const keyEvent = (e) => {
  if(e.key==='Enter' && ingreso === ''){
    Swal.fire({
      icon: 'error',
      title: 'opps, para que hace falta un campo',
    })
  }
  if(e.key==='Enter' && ingreso !== ''){
    refMonto.current.focus();
  }

  if((e.key==='Enter' && monto !=='') && ingreso !==''){
    
    handleClickButon()
  }
}

const handleClickButon = () => {

  if(monto==='' && ingreso === ''){
    Swal.fire({
      icon: 'error',
      title: 'opps, para que hace falta un campo',
    })
  }
  if( monto !=='' && ingreso !==''){
    
    const newArray = [...ingresoArrayfromState];
  newArray.push({
    nombre:ingreso,
    monto: monto,
  });
  
  setIngresoArrayfromState(newArray);

  setIngreso('');
  setMonto('');
  refIngreso.current.focus();
  }
}

const deleteItems = (a)=> {
  const findIndex = ingresoArrayfromState.findIndex(e =>e.nombre === a);
  const newArray = [...ingresoArrayfromState];
  newArray.splice(findIndex, 1);
  setIngresoArrayfromState(newArray);
  console.log(a);
  console.log('soy index', findIndex)

}
const handleEditButton = (a) => {
  const findIndex = ingresoArrayfromState.findIndex(e =>e.nombre === a);
  setModal(true)
  setItemPosition(findIndex)
  
};






  return (
    <>
    <div className="w-9/12 h-96 bg-gray-300  ml-10 rounded-md overflow-auto">
      <h1 className="font-bold ml-52 mb-4  text-lg">Ingresos</h1>

      <div className="flex  ">


        <input
        value={ingreso}
        onChange={handleInputIngreso}
        type={'text'}
        placeholder="Ingresos"
        className="ml-1 rounded-md"
        ref={refIngreso}
        onKeyUp={keyEvent}
        />
        
        <input
        value={monto}
        onChange={handleInputMonto}
        placeholder="$$$ Monto"
        className="ml-2 rounded-md"
        onKeyUp={keyEvent}
        ref={refMonto}
        type={'number'}
        />

        <button
        onClick={()=>{handleClickButon()}}
        className="ml-2
        bg-yellow-500
        rounded-md w-20
        font-bold
        text-black
        hover:bg-blue-500
        hover:text-white"
        >
          Guardar

        </button>


      </div>
      <div>
          {ingresoArrayfromState.map((a) => 
          {return <div
            key={a.nombre}
            style={{borderBottom:'1px solid blue'}}
            className="flex   items-center justify-between ml-8 mt-2 w-10/12"
            >

            <p className="w-36 truncate">{a.nombre}</p>
            <p className="w-36">{'$ '+a.monto}</p>

            <div className="flex space-x-5 ">
              <span>
                <BsXCircle
                onClick={()=>{deleteItems(a.nombre)}}
                style={{color:'red'}}
                />
              </span>
              <span>
                <BiPencil
                onClick={()=> {handleEditButton(a.nombre)}} 
                style={{color:'green'}}/>
              </span>
              </div>
            </div>
            }
          )}
      </div>
      
    </div>
    </>
  )
}

export {Ingresos};