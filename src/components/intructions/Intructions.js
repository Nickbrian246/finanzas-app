import React from "react";


const Instructions = () => {

  return (
    <>
    <article className="w-full  bg-white flex flex-col flex-grow pt-8">

      <div className="flex w-full mb-5 justify-center  items-center">{/*Instructions title */}
        <h2 className=" text-xl text-black  font-bold tracking-wider"> ¿Como funciona finanzas APP?</h2>
      </div>

      <div className=" w-full flex p-2 gap-6 h-auto flex-wrap "> {/**card container */}

          <div className=" min-w-[219px] max-w-[526px] shadow-xl flex-1  bg-slate-50 flex flex-col p-2 ">

            <h2 className="font-bold text-orange-600  m-auto text-lg tracking-wider inline-block">Ingresos</h2>

            <p className="text-base text-slate-900 text-left ml-2"> 
              En el apartado de ingresos, coloca tus ingresos<br/>
              mensuales. Por ejemplo:</p>
          <li className="ml-2">
            Ventas
          </li>
          <li className="ml-2">
            Salario
          </li>
          <li className="ml-2">
            Rentas
          </li>
          <p className="ml-2">etc.</p>
          </div>

          <div className="  min-w-[219px] max-w-[526px] shadow-xl flex-1  bg-slate-50 flex flex-col p-2   ">

              <h2 className="font-bold text-orange-600  m-auto text-lg tracking-wider inline-block">Egresos</h2>

              <p className="text-base text-slate-900 text-left ml-2"> En el apartado de Egresos coloca tus egresos <br/>
              mensuales ejemplo:</p>
            
              <li className="ml-2">
                Renta
              </li>
              <li className="ml-2">
                Despensa
              </li>
              <li className="ml-2">
                Factura eléctrica
              </li>
              <p className="ml-2">etc.</p>
          </div>

          <div className="  min-w-[219px] max-w-[526px] shadow-xl flex-1  bg-slate-50 flex flex-col p-2  ">
              <h2 className="font-bold text-orange-600  m-auto text-lg tracking-wider inline-block">Gastos Hormiga</h2>

              <p className="text-base text-slate-900 text-left ml-2"> En el apartado de gastos hormiga, coloca<br/>
              aquellos que no superan los 250 pesos ''diarios''.<br/> El programa los calculará mensualmente.<br/>
              Ejemplo:</p>
              <li className="ml-2">
                Comida Rápida
              </li>
              <li className="ml-2">
                Café
              </li>
              <li className="ml-2">
                Botanas
              </li>
              <p className="ml-2">etc.</p>
          </div>

          <div className="  min-w-[219px] max-w-[526px] shadow-xl flex-1  bg-slate-50 flex flex-col p-2  ">
            <h2 className="font-bold text-orange-600 m-auto mt-3 mb-5 text-lg tracking-wider inline-block">Balance</h2>
            <p className="text-base text-slate-900 text-left">Una vez hayas terminado de colocar tus datos, <br/>
            dale clic al botón 'Generar balance', el cual <br/> se encargará de generar tu balance y 
            de darte algunos consejos financieros.
            </p>
          </div>

      </div>

    </article>
    </>
  )
}

export {Instructions};