import React from "react";
import {Chart as ChartJS,ArcElement,Tooltip,Legend } from "chart.js"
import {Pie} from  "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)




export default  function GraphicMonthly(props){
  const { balance,ArrayMonthly} = props
  let options = {responsive:true, maintainAspectRatio:false}
  const labels = ArrayMonthly.filter((item) => !!item.nombre).map((item) => item.nombre);
  const dataMonthly = ArrayMonthly.filter((item) => item.monto).map((item) => {if (item.porDia) {return item.porDia}  return item.monto})
  

let data = {
  labels: labels,
  datasets:[
    {
      label:"Grafica Mensual",
      data:dataMonthly,
      backgroundColor:[
        "#BFF5BA",
        "#FF0000",
        "#FFFF00",
        "#00FF00",
        "#8A2BE2",
      ],
      borderColor: [
        "#BFF5BA",
        "#FF0000",
        "#FFFF00",
        "#00FF00",
        "#8A2BE2",
      ],
      borderWidth: 1,
    },
  ],

};
  return <Pie data={data} options={options} />
}

