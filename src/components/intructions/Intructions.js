import React from "react";


const Intructions = () => {

  return (
    <>
    <div className="w-full h-96 bg-white ">

          <div className="flex w-full justify-center h-11 items-center">
            <p className=" text-xl text-white  font-bold tracking-wider"> ¿Como funciona finanzas APP?</p>
          </div>

          <div className=" w-full grid grid-cols-4 justify-items-center ">

              <div className=" shadow-md w-5/6  ">

                <h2 className="font-bold text-yellow-300  text-lg tracking-wider ml-24">Ingresos</h2>

                <p className="text-base text-slate-900 text-left ml-2"> En el apartado de ingresos coloca tus ingresos <br/>
                mensuales ejemplo:</p>
                <li className="ml-2">
                  Ventas
                </li>
                <li className="ml-2">
                  Salario
                </li>
                <li className="ml-2">
                  Rentas
                </li>
                <p className="ml-2">etc</p>
              </div>

              <div className=" w-5/6 shadow-md ">

                  <h2 className="font-bold text-yellow-300  text-lg tracking-wider ml-24">Egresos</h2>

                  <p className="text-base text-slate-900 text-left ml-2"> En el apartado de Egresos coloca tus egresos <br/>
                  mensuales ejemplo:</p>
                  <li className="ml-2">
                    Renta
                  </li>
                  <li className="ml-2">
                    Despensa
                  </li>
                  <li className="ml-2">
                    Factura electrica
                  </li>
                  <p className="ml-2">etc</p>
              </div>

              <div className="w-5/6 shadow-md ">
                  <h2 className="font-bold text-yellow-300  text-lg tracking-wider ml-24">Gastos Hormiga</h2>

                  <p className="text-base text-slate-900 text-left ml-2"> En el apartado de gastos hormiga  coloca    <br/>
                  aquellos que no supenran los 250 pesos '' diarios ''<br/> -el programa los calculara mensualmente- <br/>
                  ejemplo:</p>

                  <li className="ml-2">
                    Comida Rppida 
                  </li>
                  <li className="ml-2">
                    Cafe
                  </li>
                  <li className="ml-2">
                    Botanas
                  </li>
                  <p className="ml-2">etc</p>
              </div>

              <div className="w-5/6 shadow-md ">
                  <h2 className="font-bold text-yellow-300  text-lg tracking-wider ml-24">Balance</h2>

                  <p className="text-base text-slate-900 text-left ml-2"> Una vez hayas teminidado de colocar tus datos  <br/>
                  dale click al boton de  'Generar balance' el cual <br/> se encargara de generar tu balance y 
                  de darte algunos consejos financieros</p>

              </div>

          </div>
      

    </div>
    </>
  )
}

export {Intructions};