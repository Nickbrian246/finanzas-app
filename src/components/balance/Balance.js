import React, { useEffect, useState } from "react";
import GraphicMonthly from "./graphics/pieGraphics";
import GraphicYearly from "./graphics/yearGraphics";
import Slider from "../bigDaddy/modal/consejosModal";
import { TextShortedNextWhiteSpace } from "./utils/text";

const balanceText = `1.Endeudamiento y estrés financiero: Un balance negativo lleva a endeudarse y genera estrés por la necesidad de pagar las deudas y los intereses.<br/>
2.Falta de liquidez: Dificultades para afrontar gastos inesperados o emergencias debido a la falta de recursos.<br/>
3.Dificultades para alcanzar metas financieras: Un balance negativo dificulta el logro de metas financieras a largo plazo, como ahorros o inversiones.<br/>
4.Efecto en la salud emocional: El estrés financiero puede generar ansiedad, depresión y otros problemas de salud mental.<br/>
5.Presión en las relaciones personales: Los problemas financieros pueden causar tensiones en las relaciones personales.<br/>
6.Dificultades en el trabajo y productividad: El estrés financiero puede afectar el rendimiento laboral y la productividad.<br/>
7.Riesgo de sobreendeudamiento: Un balance negativo prolongado puede llevar al sobreendeudamiento y problemas legales.<br/>
Para mantener una buena salud financiera y emocional, es importante equilibrar ingresos y gastos, ahorrar y planificar adecuadamente. Si enfrentas un balance negativo, busca asesoramiento financiero y toma medidas para mejorar tu situación económica.`
const Balance = (props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isBalanceNegative, setIsBalanceNegative] = useState(false)
  const {balance,ArrayMonthly,ArrayYearly} = props
  const totalIncomeMonthly = ArrayMonthly[ArrayMonthly.length  - 1]
  const {totalIncome} = totalIncomeMonthly;
  const totalIncomeYearly = (totalIncome * 12) 
  const TotalGastosAnuales = ArrayYearly.filter((item) => item.monto).reduce((prevValue, currentValue) => prevValue + parseFloat(currentValue.monto),0)
  const yearlyBalance = (totalIncomeYearly - parseFloat(TotalGastosAnuales))

const addLineBreaks = (text)=> {
  return text.split('<br/>').map((paragraph, index) => (
    <React.Fragment key={index}>
      {paragraph}
      <br /><br />
    </React.Fragment>
  ));
};
const toggleDescription = () => {
  setShowFullDescription(!showFullDescription);
};


useEffect(()=>{
  if(yearlyBalance < 0) {
    setIsBalanceNegative(true)
  }
},[yearlyBalance])

  return (
    <>
    <section className="w-full  flex flex-col justify-center relative gap-2 flex-wrap h-fit p-2  my-8">
        <article className="flex justify-center my-4 ">
          <div className=" bg-orange-600 rounded-md max-w-[1260px] p-2 text-white j">
              <div className="flex flex-col justify-center items-center ">
                {isBalanceNegative ? <><p className="text-2xl text-rose-50">¡Oh! Parece que tienes un balance negativo.</p><br></br>
                <p className="text-xl text-black">Aquí te dejo 7 razones por las cuales es importante evitar tener un balance negativo </p> <br/></>
                :<><p className="text-2xl text-white">¡FELICIDADES! Parece que tienes un balance positivo.</p><br></br>
              </>  }
              </div>
            {isBalanceNegative ? <p className="text-justify">
              {!showFullDescription?  TextShortedNextWhiteSpace(balanceText).replace(/<br\s*\/?>/g, ' ') : addLineBreaks(balanceText)}
            </p>
              :<p><br></br>Un balance positivo es esencial para la salud financiera y el bienestar <br/>económico. Proporciona estabilidad, flexibilidad y oportunidades para el crecimiento y el éxito tanto a nivel personal como empresarial.
              <br/>Mantener un balance positivo requiere una planificación financiera adecuada, gastos controlados y una gestión prudente de los recursos disponibles.
              </p>}
              { isBalanceNegative && (
              <button className="text-black underline" onClick={toggleDescription}>
                {showFullDescription ? "Ver menos..." : "Ver más..."}
              </button>
)}
          </div>
        </article>
        <div className="flex flex-wrap  gap-2">
          <div className=" flex-1 flex justify-center items-center "> {/**grafica de mes  */} 
          <div className="border-2 min-w-[260px] min-h-[400px] border-orange-600 w-4/5 h-[90%] p-2">
            <div className="w-full flex flex-col justify-center items-center ">
                <h2 className="inline-block text-2xl">Mensual</h2>
                <div className="flex gap-6">
                  <p>Balance:<span className={`${balance < 0 ? "text-red-600" : "text-cyan-400"}`}>{balance}</span></p>
                  <p>Ingresos Totales <span>{totalIncome.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</span></p>
                </div>
              </div>
                <div className="w-full h-4/5">
                  <GraphicMonthly
                  balance ={balance}
                  ArrayMonthly = {ArrayMonthly}
                  />
                </div>
          </div>
          </div>
          <div className=" flex-1 flex justify-center items-center  "> {/**grafica de año  */} 
            <div className="border-2 min-w-[260px] min-h-[400px] border-orange-600 w-4/5 h-[90%] p-2">
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className="inline-block text-2xl">Anual</h2>
                <div className="flex gap-6">
                  <p>Balance:<span className={`${yearlyBalance < 0 ? "text-red-600" : "text-cyan-400"}`}>{yearlyBalance}</span></p>
                  <p>Ingresos Totales <span>{totalIncomeYearly.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</span></p>
                </div>
              </div>
                <div className="w-full h-3/4">
                  <GraphicYearly
                  balance ={balance}
                  ArrayYearly = {ArrayYearly}
                  />
                </div>
            </div>
          </div>
        </div>
        <Slider/>

    </section>
    </>
  )
}

export {Balance};