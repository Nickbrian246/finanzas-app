import React, { useState } from "react";
/*Components*************************************** */
import { Ingresos } from "./ingresos/Ingresos";
import { Deuda } from "./deuda/Deuda";
import { DeudaItem } from "./deuda/DeudaItem";
import { Hormiga } from "./hormiga/Hormiga";
import { HormigaItem } from "./hormiga/HormilaItem";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { EditIngresoModal } from "../../modals/editIngresoModal";
import { EditDeuda } from "../../modals/components/EditDeuda";

/***************************************************** */


const BigDaddy = () => {
  const [modal, setModal]= useState(false);
  const [editItemPosition, setItemPosition  ]= useState('');
  const ingresosArray = [];

const [ingresoArrayfromState, setIngresoArrayfromState] = useLocalStorage('INGRESOS_V1',[]);
  return (
    <>
    <div className="w-full grid grid-cols-3 gap-5 relative">
    <Ingresos
    modal={modal}
    setModal={setModal}
    ingresoArrayfromState={ingresoArrayfromState}
    setIngresoArrayfromState={setIngresoArrayfromState}
    editItemPosition={editItemPosition}
    setItemPosition={setItemPosition}
    />
    {modal === true && (  <EditIngresoModal>
  <EditDeuda 
  modal={modal}
  setModal={setModal}
  ingresoArrayfromState={ingresoArrayfromState}
  setIngresoArrayfromState={setIngresoArrayfromState}
  editItemPosition={editItemPosition}
  setItemPosition={setItemPosition}
  />
</EditIngresoModal>)}

  <Deuda>
  {ingresosArray.map((Deudas)=> (
      <DeudaItem/>
    ))}
  </Deuda>

  <Hormiga>
  {ingresosArray.map((Deudas)=> (
      <HormigaItem/>
    ))}
  </Hormiga>
      
    </div>
    </>
  )
}

export {BigDaddy};