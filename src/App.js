
import './App.css';
import { Header } from './components/header/Header';
import { Ingresos } from './components/ingresos/Ingresos';
import { IngresosItem } from './components/ingresos/IngresosItem';
import { Deuda } from './components/deuda/Deuda';
import { DeudaItem } from './components/deuda/DeudaItem';
import { Hormiga } from './components/hormiga/Hormiga';
import { HormigaItem } from './components/hormiga/HormilaItem';
import { Balance } from './components/balance/Balance';
import { Footer } from './components/footer/Footer';
import { Welcome } from './components/welcome/Welcome';

const  ingresosArray = [
  {nombre: 'gas', monto:300},
  {nombre: 'luz', monto:300},
  {nombre: 'renta', monto:300},
  {nombre: 'comida', monto:300},
  {nombre: 'agua', monto:300},
  {nombre: 'colegiatura', monto:300},
  {nombre: 'netflix', monto:300},
]

function App() {

  return (
  <>
  <Header/>
  
  <Welcome/>

  <Ingresos>
    {ingresosArray.map((Deudas)=> (
      <IngresosItem/>
    ))}
  </Ingresos>

  <Deuda>
  {ingresosArray.map((Deudas)=> (
      <DeudaItem/>
    ))}
  </Deuda>

  <Hormiga>
  {ingresosArray.map((Deudas)=> (
      <HormigaItem/>
    ))}
  </Hormiga>

  <Balance/>
  <Footer/>

  </>
  );
}

export default App;
