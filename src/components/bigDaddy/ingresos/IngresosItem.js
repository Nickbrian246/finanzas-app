
import React from "react";


const IngresosItem = (props) => {
  return (
    <>
    <div className="flex">
      <div>
      <p>{'hello there'}</p>
      </div>
      <div>
        <p>{props.monto}</p>
      </div>
    </div>
    </>
  )
}

export {IngresosItem};