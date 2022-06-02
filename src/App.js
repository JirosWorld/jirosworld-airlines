import logo from './assets/logo.jpeg';
import './App.css';
import React, {useEffect, useState} from 'react';
import AllFlights from "./pages/AllFlights";
import Locate from './components/Locate';
import Flight from './components/Flight';
import Confirm from './components/Confirm';
import Order from './components/Order';
import mockdata from './data/mock-flights.json';

function App() {
    const [origin, setOrigin] = useState();
    const [destination, setDestination] = useState();
    const [flight, setFlight] = useState();
    const [confirmation, setConfirmation] = useState();
    const [order, setOrder] = useState();

  useEffect(() => {
    document.title = "Jiro's Sharevalue Airlines"

    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }, 0);
    console.log("De pagina begint met de window naar boven gescrolld");
  }, []);

  return (
      <main className="page-container">
          <h1>Zoek vertrek en aankomst</h1>
          <img src={logo} alt="Sharevalue Logo"/>
              <Locate handleChoice={setDestination} display={"Origin"}/>
              <Locate handleChoice={setOrigin} display={"Destination"}/>
              { origin &&
              destination &&
              <Flight origin={origin} destination={destination} setFlight={setFlight}/>
              }
              { flight &&
              <Confirm flight={flight} setConfirmation={setConfirmation} />
              }
              { confirmation &&
              <Order confirmation={confirmation} order={order} setOrder={setOrder} />
              }
              <div>
                  <AllFlights/>
              </div>
      </main>
  );
}

export default App;
