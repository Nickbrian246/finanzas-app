import React, { useRef, useState } from "react";
import { BsXCircle } from "react-icons/bs";
import {BsFillTrashFill} from "react-icons/bs"
import { BiPencil } from "react-icons/bi";
import Swal from 'sweetalert2';
import { EditDeuda } from "../../../modals/components/EditDeuda";
import { EditIngresoModal } from "../../../modals/editIngresoModal";

const Deuda = ({
  ingresoArrayfromState,
  setIngresoArrayfromState,
  editItemPosition,
  setItemPosition,
}) => {

const [ingreso, setIngreso] = useState('');
const [monto, setMonto] = useState('');
const [modal, setModal]= useState(false);
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
    <div className="max-w-xl  h-96 bg-gray-300 p-2  rounded-md overflow-auto relative "> {/**card container */} 
      <div className="flex mb-1">{/**titulo */}
        <h1 className="font-bold  m-auto text-lg">Egresos</h1>
      </div>
      <div className="flex w-full justify-between gap-2  ">
          <div className="flex flex-wrap w-full gap-2 ">
              <input
              value={ingreso}
              onChange={handleInputIngreso}
              type={'text'}
              placeholder="Ingresos"
              className=" rounded-md flex-1"
              ref={refIngreso}
              onKeyUp={keyEvent}
            />
            
            <input
            value={monto}
            onChange={handleInputMonto}
            placeholder="$$$ Monto"
            className="rounded-md flex-1"
            onKeyUp={keyEvent}
            ref={refMonto}
            type={'number'}
            />
          </div>

        <button
        title="boton de guardado"
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


      </div>{/**inputs y boton  */}
      <div className="flex flex-col items-start  ">{/**List */}
          {ingresoArrayfromState.map((a) => 
          {return <div
            key={a.nombre}
            style={{borderBottom:'1px solid blue'}}
            className="flex  items-center justify-between mt-2 w-10/12"
            >

            <p className="w-36 truncate">{a.nombre}</p>
            <p className="w-36">{'$ '+a.monto}</p>

            <div className="flex space-x-5 ">
              <span className="hover:scale-[1.3]">
                <BsFillTrashFill
                onClick={()=>{deleteItems(a.nombre)}}
                style={{color:'red'}}
                />
              </span>
              <span 
              className="hover:scale-[1.3]">
                <BiPencil
                onClick={()=> {handleEditButton(a.nombre)}} 
                style={{color:'green'}}/>
              </span>
              </div>
            </div>
            }
          )}
  {modal === true && ( 
  <div 
  className="absolute top-1/4 left-1/4">
    <EditIngresoModal
      modal={modal}
      setModal={setModal}
      ingresoArrayfromState={ingresoArrayfromState}
      setIngresoArrayfromState={setIngresoArrayfromState}
      editItemPosition={editItemPosition}
      setItemPosition={setItemPosition}
    >
      <EditDeuda 
        modal={modal}
        setModal={setModal}
        ingresoArrayfromState={ingresoArrayfromState}
        setIngresoArrayfromState={setIngresoArrayfromState}
        editItemPosition={editItemPosition}
        setItemPosition={setItemPosition}
      />
    </EditIngresoModal>
  </div>
)}

      </div>
      
    </div>
    </>
  )
}

export {Deuda};