
import './App.css';
import { Header } from './components/header/Header';
import { Balance } from './components/balance/Balance';
import { Footer } from './components/footer/Footer';
import { Welcome } from './components/welcome/Welcome';
import { Instructions } from './components/intructions/Intructions';
import{FinancialRecord} from './components/bigDaddy/BigDaddy';
import { useState } from 'react';


function App() {
  const [openGraphis, setOpenGraphics] =  useState(false);
  const [balance, setBalance] = useState(0)
  const [arrayMonthly, setArrayMonthly] = useState([])
  const [arrayYearly, setArrayYearly] = useState([])

  return (
  <>
  <Header/>
  <Welcome/>
  <Instructions/>
  <FinancialRecord
    setBalance = { setBalance}
    setArrayMonthly = { setArrayMonthly }
    setArrayYearly = { setArrayYearly }
    setOpenGraphics = { setOpenGraphics }
  />
  {openGraphis === true && (
      <Balance 
      balance = {balance}
      ArrayMonthly = { arrayMonthly }
      ArrayYearly = { arrayYearly }
      />
  )}
  <Footer/>
  </>
  );
}

export default App;
