import React, { useState } from "react";
/*Components*************************************** */
import { Ingresos } from "./ingresos/Ingresos";
import { Deuda } from "./deuda/Deuda";
import { Hormiga } from "./hormiga/Hormiga";
import { useLocalStorage } from "../../hooks/useLocalStorage";
/***************************************************** */
import Swal from 'sweetalert2';

const FinancialRecord = (props) => {
  const {setArrayMonthly,setArrayYearly,setOpenGraphics,setBalance} = props
  const [modal, setModal]= useState(false);
  const [editItemPosition, setItemPosition  ]= useState('');
  const [Iserror, setIsError] = useState(false);

const [ingresoArrayfromState, setIngresoArrayfromState] = useLocalStorage('INGRESOS_V1',[]);
const [ingresoArrayDeudas, setIngresoArrayDeudas] = useLocalStorage('DEUDAS_V1',[]);
const [IngresoArrayHormiga, setIngresoArrayHormiga] = useLocalStorage('HORMIGA_V1',[]);

const handleBtn = () => {
    if(ingresoArrayfromState.length === 0  ||  ingresoArrayDeudas.length === 0   || IngresoArrayHormiga.length === 0 ){
      return  Swal.fire({
        icon: 'error',
        title: 'Aún tienes campos que llenar.',
      }) 
    }
    /**Semanal */
    const totalIncome = ingresoArrayfromState.reduce((previusValue, currentValue) =>{
      return previusValue + parseFloat(currentValue.monto)
    },0)

    const expensesdebt = ingresoArrayDeudas.reduce ((previusValue, currentValue) => {
      return  previusValue + parseFloat(currentValue.monto)
    },0) 
    
    const expensesAnt = IngresoArrayHormiga.reduce((previusValue, currentValue) =>{
      return previusValue + parseFloat(currentValue.porDia)
    },0)
    const generateMonthly = [...ingresoArrayDeudas,...IngresoArrayHormiga,{totalIncome}]
    const balance = totalIncome - (expensesdebt + expensesAnt)
    /**Year */

    const yearTotalIncome = (totalIncome * 12);
    
    const yearExpensesDebt = ingresoArrayDeudas.map((item) => {
      return {...item,monto: parseFloat(item.monto ) * 12}
    })

    const yearExpensesAnt = IngresoArrayHormiga.map((item) => {
      return {
        ...item,
        monto:parseFloat(item.monto) * 12,
        porDia: parseFloat(item.porDia) *12
        }
    })
    const generateYear = [...yearExpensesAnt, ...yearExpensesDebt , {totalIncome}]
    setBalance(balance)
    setArrayMonthly(generateMonthly)
    setArrayYearly(generateYear)
    setOpenGraphics((preState) => !preState)
}

  return (
    <>
    <section className="w-full flex justify-center my-28  flex-wrap gap-4">{/**Container */}
    <div className="w-3/4 flex justify-end p-4">
      <button
      onClick={() => {handleBtn()}}
      className="
      p-1 
      bg-orange-500 
      rounded-lg 
      text-2xl
    text-white"

      >
        Generar Balance
      </button>
    </div>
    <div className=" w-full flex justify-center gap-2 relative  p-2 flex-wrap " >
      <Ingresos
      ingresoArrayfromState={ingresoArrayfromState}
      setIngresoArrayfromState={setIngresoArrayfromState}
      editItemPosition={editItemPosition}
      setItemPosition={setItemPosition}
      />

    <Deuda 
        ingresoArrayfromState={ingresoArrayDeudas}
        setIngresoArrayfromState={setIngresoArrayDeudas}
        editItemPosition={editItemPosition}
        setItemPosition={setItemPosition}
      />

    <Hormiga
          ingresoArrayfromState={IngresoArrayHormiga}
          setIngresoArrayfromState={setIngresoArrayHormiga}
          editItemPosition={editItemPosition}
          setItemPosition={setItemPosition}
    />
    </div>
    </section>
    </>
  )
}

export {FinancialRecord};