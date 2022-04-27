import React from "react";


const Deuda = () => {

  return (
    <>
    <div className="w-9/12 h-96 bg-gray-300  ml-10 rounded-md">
      <h1 className="font-bold ml-52 mb-4  text-lg">Deudas</h1>

      <div className="flex  ">
        <input placeholder="Ingresos" className="ml-1 rounded-md"/>
        <input placeholder="$$$ Monto" className="ml-2 rounded-md"/>
        <button className="ml-2 bg-yellow-500 rounded-md w-20 font-bold"> Guardar</button>
      </div>
      
    </div>
    </>
  )
}

export {Deuda};