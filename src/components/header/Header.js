import React, { useState } from "react";
import { FaSuse } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { WiMoonWaxingCrescent4 } from "react-icons/wi";
import {HiAcademicCap} from "react-icons/hi"


const Header = () => {
  const [darKMode, setDarkMode] = useState(false);

  const handleDarkMode = ()=> {
      setDarkMode(!darKMode);
  }


  return (
    <>
    <header className="
    flex
    p-1
    w-full
    h-12 
    justify-center
    bg-slate-300 
    " >
      <div className="flex md:w-1/2 w-full justify-between">
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
            text-2xl
            sm:text-4xl
            font-bold
            tracking-wide
            inline-block
            ">
              Finanzas APP
            </h1>
        </div>
        <div>
            <HiAcademicCap style={{
              width:'60px',
              height:'40px',
              color:'blue',
              }}/>
          </div>
        {/* <button 
        title="boton de modo oscuro"
        className="
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
        </button> */}
      </div>


    </header>
    </>
  )
}

export {Header};