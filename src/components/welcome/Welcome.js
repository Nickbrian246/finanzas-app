import React from "react";
import {SvgComponent} from '../../assets/SvgComponent';
import "./welcome.css"

const Welcome = () => {

  return (
    <>
    <article className="w-full bg-slate-500 h-96 flex justify-around items-center p-1 ">
      <div className="flex-1 flex justify-center items-center w-fit h-full " >
        <p className=" text-left inline-block font-serif xl:text-2xl italic  text-xl xl:tracking-wide 2xl:leading-9  text-white"> bienvenido a <strong>finanzas app </strong> <br/>
        El propósito de esta APP es ayudar a las personas a administrar sus finanzas de una manera<br/>
        que les permita generar ahorros y maximizar sus recursos.<br/>
        En esta App podrás realizar tu balance mensual de gastos<br/>
        y con ello saber el estado de tus finanzas, hacer los ajustes<br/>
        necesarios para tener finanzas saludables.

        </p>
      </div>
      <div   className="svgContainer">
        <SvgComponent  width="100%" height="100%" />
      </div>
    </article>
    </>
  )
}

export {Welcome};