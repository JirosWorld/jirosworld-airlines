import logo from './assets/logo.jpeg';
import './App.css';
import React, {useEffect} from 'react';
import SearchPage from "./pages/SearchPage";

function App() {

    useEffect(() => {
        document.title = "Jiro's Sharevalue Airlines"

        setTimeout(() => {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }, 0);
        console.log("De pagina begint met de window naar boven gescrolld");
    }, []);

    return (
        <main className="page-container">
            <h1><img src={logo} alt="Sharevalue Logo"/> Zoek een vlucht</h1>

            <hr/>

            <SearchPage/>

            <p className="small">~ 2022 - Jiro Ghianni</p>
        </main>
    );
}

export default App;
