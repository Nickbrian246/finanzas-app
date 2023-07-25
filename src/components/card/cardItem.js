
import {BsFillTrashFill} from "react-icons/bs"
import {BiPencil} from "react-icons/bi"


const CardItem = (props) => {

  const {
    nombre,
    monto,
    id,
    deleteItems,
    handleEditButton,
    porDia,
  } = props
    let montoCurrency = parseFloat(monto).toLocaleString("es-MX", {style:"currency", currency:"MXN"});
    let PorMesCurrencyFormat
if(porDia) {
  PorMesCurrencyFormat = porDia.toLocaleString("es-MX",{style:"currency" , currency:"MXN"} )
}

  return (

    <>
    <div
            key={id}
            style={{borderBottom:'1px solid blue'}}
            className="flex  items-center justify-between mt-2 w-10/12"
            >

            <p title="nombre" className="w-36 truncate">{nombre}</p>
            <p title="monto" className="w-36">{ montoCurrency}</p>
              {PorMesCurrencyFormat && (
                            <>
                            <p title="monto Mensual" className="w-36">{ `${PorMesCurrencyFormat}`}</p>
                            </>
              )}

            <div className="flex space-x-5 ">
              <span className="hover:scale-[1.3]">
                <BsFillTrashFill
                onClick={()=>{deleteItems(nombre)}}
                style={{color:'red'}}
                />
              </span>
              <span 
              className="hover:scale-[1.3]">
                <BiPencil
                onClick={()=> {handleEditButton(nombre)}} 
                style={{color:'green'}}/>
              </span>
              </div>
            </div>
    
    </>
  )
};

export { CardItem}