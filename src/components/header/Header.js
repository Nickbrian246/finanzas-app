import React, { useState } from "react";
import { FaSuse } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { WiMoonWaxingCrescent4 } from "react-icons/wi";


const Header = () => {
  const [darKMode, setDarkMode] = useState(false);

  const handleDarkMode = ()=> {
      setDarkMode(!darKMode);
  }


  return (
    <>
    <div className="w-full
    flex h-12 space-x-80
    justify-center
    bg-slate-300 
    space-y-2 
    items-center
    " >

      <div>
        <FaSuse style={{
          width:'60px',
          height:'40px',
          color:'blue',
          }}/>
      </div>

      <div>
        <h1  className="
        font-sans
        text-4xl
        font-bold
        tracking-wide
        ">
          Finanzas APP
        </h1>
      </div>

      <button className="
      rounded-full
    bg-white h-8 w-8"
      onClick={handleDarkMode}>

          {darKMode ?
            < IoMdSunny
              style={{
              marginLeft:'6px',
              color:'orange',
              width:'20px',
              height:'30',
              }}
              />
              : 
            <WiMoonWaxingCrescent4 
                style={{
                marginLeft:'6px',
                color:'gray',
                width:'20px',
                height:'30',
                }}
                />
            }
      </button>

    </div>
    </>
  )
}

export {Header};