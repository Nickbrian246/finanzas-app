import React from "react";
import {SvgComponent} from '../../assets/SvgComponent';

const Welcome = () => {
 
  return (
    <>
    <div className="w-full bg-slate-500 h-96 flex justify-center items-center space-x-80">
      <div className="" >
        <p className="text-left font-serif text-2xl italic tracking-wide leading-9  text-white"> bienvenido a <strong>finanzas app </strong> <br/>
        El proposito de esta APP es el de ayudar <br/>
        a las personas a administrar sus finanzas de una manera <br/>
        que les permita generar ahorros y maximizar sus recursos.<br/>
        En esta App podras realizar tu balance mensual de tus gastos <br/>
        y con ello saber el estado de tus finanzas, hacer los ajustes <br/>
        necesarios para tener finanzas saludables.  </p>
      </div>
      <div className="mr-15">
        <SvgComponent width={700} height={400}/>
      </div>


    </div>
    </>
  )
}

export {Welcome};