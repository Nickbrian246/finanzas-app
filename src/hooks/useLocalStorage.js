import React, {useState}from "react";



const useLocalStorage =(ingesoName,initialValue )=>  {


let parseIngresosItem;
const localStorageName = localStorage.getItem(ingesoName);

if(!localStorageName) { //si no hay nada en localStorage
  
  localStorage.setItem(ingesoName, JSON.stringify(initialValue));
  parseIngresosItem = initialValue;

} else { 
   // si hay algo 
  parseIngresosItem = JSON.parse(localStorageName);
};

const  [ingresoArrayfromState, setIngresoArrayfromState] = useState(parseIngresosItem);

const saveDeudadLocalStorage = (saveDeuda) => {
  const stingDeudad= JSON.stringify(saveDeuda);
  localStorage.setItem(ingesoName,stingDeudad);
  setIngresoArrayfromState(saveDeuda);
  
  
}
return [
  ingresoArrayfromState,
  saveDeudadLocalStorage,

]

}
export {useLocalStorage};