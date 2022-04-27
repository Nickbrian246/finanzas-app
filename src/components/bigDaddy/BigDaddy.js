import React, { useState } from "react";
import { Ingresos } from "./ingresos/Ingresos";
import { Deuda } from "./deuda/Deuda";
import { DeudaItem } from "./deuda/DeudaItem";
import { Hormiga } from "./hormiga/Hormiga";
import { HormigaItem } from "./hormiga/HormilaItem";
import { useLocalStorage } from "../../hooks/useLocalStorage";


const BigDaddy = () => {
  const ingresosArray = [];

const [ingresoArrayfromState, setIngresoArrayfromState] = useLocalStorage('INGRESOS_V1',[]);

  return (
    <>
    <div className="w-full grid grid-cols-3 gap-5">
    <Ingresos
    ingresoArrayfromState={ingresoArrayfromState}
    setIngresoArrayfromState={setIngresoArrayfromState}
    />

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