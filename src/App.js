
import './App.css';
import { Header } from './components/header/Header';
import { Balance } from './components/balance/Balance';
import { Footer } from './components/footer/Footer';
import { Welcome } from './components/welcome/Welcome';
import { Intructions } from './components/intructions/Intructions';
import{BigDaddy} from './components/bigDaddy/BigDaddy';
import {EditIngresoModal} from '../src/modals/editIngresoModal';
import {EditDeuda} from '../src/modals/components/EditDeuda';


function App() {

  return (
  <>
  <Header/>
  
  <Welcome/>
  <Intructions/>
  <BigDaddy/>
  <EditIngresoModal>
  <EditDeuda/>
</EditIngresoModal>

  <Balance/>
  <Footer/>
  </>
  );
}

export default App;
