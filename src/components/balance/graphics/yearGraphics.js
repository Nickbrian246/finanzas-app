import React from "react";
import {Chart as ChartJS,ArcElement,Tooltip,Legend } from "chart.js"
import {Pie} from  "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)


export default  function GraphicYearly(props){
  const { balance,ArrayYearly} = props
  let options = {responsive:true, maintainAspectRatio:false}
  const lables = ArrayYearly.filter((item) => { if(item.nombre) return item.nombre}).map((item) => item.nombre)
  const dataYearly = ArrayYearly.filter((item) =>{  if(item.monto ) return item.monto }).map((item) => item.monto)
  

let data = {
  labels: lables,
  datasets:[
    {
      label:"Grafico Anual",
      data:dataYearly,
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