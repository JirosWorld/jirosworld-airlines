import React, {useState, useRef} from 'react';
import './SearchPage.css';
import SearchData from '../data/mock-flights.json';
import calculateCost from "../helpers/calculateCost";


export default function SearchPage() {
    const radioButtonDepartRef = useRef();
    const radioButtonArrivRef = useRef();
    const [queryDeparture, setQueryDeparture] = useState('');
    const [queryArrival, setQueryArrival] = useState('');
    const [airportNameDeparture, setAirportNameDeparture] = useState('');
    const [airportNameArrival, setAirportNameArrival] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [formPassengers, setFormPassengers] = useState(0);
    const [formName, setFormName] = useState('');
    const [formAddress, setFormAddress] = useState('');
    const [formPhonenr, setFormPhonenr] = useState('');
    const [formIdentification, setFormIdentification] = useState('');
    const [formOrderState, setFormOrderState] = useState(false);
    const [formSubmitState, setFormSubmitState] = useState(false);

    // console.log("mock zoek data:", SearchData);
    console.log("zoekopdracht vertrek: ", queryDeparture);

    //functies voor radiobuttons
    function handleAirportDepartureSelect(event) {
        // const departureName = radioButtonDepartRef.current.value;
        setAirportNameDeparture(event.target.value);
        // setAirportNameDeparture(departureName);
        console.log("vertrekstad:", airportNameDeparture);
        // radioButtonDepartRef.current.value = null;
    }

    function handleAirportArrivalSelect(event) {
        setAirportNameArrival(event.target.value);
        console.log("aankomststad:", airportNameArrival);
    }

    function handleOrder(event) {
        console.log("Persoonsgegevens ingevuld:");
        setFormOrderState(true);
    }

    //weten of de inputs allemaal werken:
    function handleSubmit(e) {
        setFormSubmitState(true);
        e.preventDefault();
        console.log("vertrekplaats", airportNameDeparture, "aankomstplaats", airportNameArrival, "personenCounter", formPassengers, "vertrekDatum", departDate, "aankomstDatum:", returnDate);
    }

    return (

        <>
            <form>
                <section className="search-airport">
                    <h2>Vertrek & aankomst</h2>
                    <h4>Zodra je begint met typen, zie je meteen de zoekresultaten verschijnen,
                        waarvan je er dan 1 kunt selecteren.</h4>

                    <div className="inner">
                        <div className="column">
                            <label htmlFor="departure">Zoek plaats van vertrek:</label>
                            <input placeholder="Type hier AMS en klik op SCHIPHOL optie"
                                   onChange={event => setQueryDeparture(event.target.value)}/>

                            {
                                SearchData.filter(postDeparture => {
                                    if (queryDeparture === '') {
                                        //alleen iets tonen waneer er iets getypt wordt
                                        return null;
                                    } else if (postDeparture.address.cityName.toLowerCase().includes(queryDeparture.toLowerCase())) {
                                        return postDeparture;
                                    }
                                }).map((postDeparture, index) => (

                                    <div className="box" key={index}>
                                        <label htmlFor={postDeparture.iataCode}>
                                            <input type="radio"
                                                   ref={radioButtonDepartRef}
                                                   id={postDeparture.iataCode}
                                                   name="airport_departure"
                                                   value={airportNameDeparture}
                                                   onChange={handleAirportDepartureSelect}
                                            />
                                            <p>{postDeparture.name}</p>
                                            <p>{postDeparture.address.cityName}</p>
                                            <p>{postDeparture.iataCode}</p>
                                            <p>{postDeparture.cost.score && postDeparture.cost.score}</p>
                                        </label>
                                    </div>

                                ))
                            }
                        </div>

                        <div className="column">
                            <label htmlFor="arrival">Zoek plaats van aankomst:</label>
                            <input placeholder="Type hier LOS en klik op LOS ANGELES optie"
                                   onChange={event => setQueryArrival(event.target.value)}/>

                            {
                                SearchData.filter(postArrival => {
                                    if (queryArrival === '') {
                                        //niets tonen waneer er niets getypt wordt
                                        return null;
                                    } else if (postArrival.address.cityName.toLowerCase().includes(queryArrival.toLowerCase())) {
                                        return postArrival;
                                    }
                                }).map((postArrival, index) => (

                                    <div className="box" key={index}>
                                        <label htmlFor={postArrival.iataCode}>
                                            <input type="radio"
                                                   ref={radioButtonArrivRef}
                                                   id={postArrival.iataCode}
                                                   name="airport_arrival"
                                                   value={airportNameArrival}
                                                   onChange={handleAirportArrivalSelect}
                                            />
                                            <p>{postArrival.name}</p>
                                            <p>{postArrival.address.cityName}</p>
                                            <p>{postArrival.iataCode}</p>
                                            <p>{postArrival.cost.score && postArrival.cost.score}</p>
                                        </label>
                                    </div>

                                ))
                            }
                        </div>
                    </div>

                </section>


                <section className="flight-date-persons">
                    <p> </p>
                    <label htmlFor="departure">Kies vertrekdatum: </label>
                    <input type="date"
                           onChange={(e) => setDepartDate(e.target.value)}
                           id="departure"
                           name="departure"
                           required/><br/>
                    <label htmlFor="return">Kies aankomstdatum: </label>
                    <input type="date"
                           onChange={(e) => setReturnDate(e.target.value)}
                           id="return"
                           name="return"/><br/>

                    <label htmlFor="passengers">Aantal personen: </label>
                    <input
                        type="number"
                        name="passengers"
                        id="passengers"
                        placeholder={1}
                        min="1" max="7"
                        value={formPassengers}
                        onChange={(e) => setFormPassengers(parseInt(e.target.value))}
                    /><br/>

                    <button
                        type="button"
                        name="order"
                        onClick={handleOrder}
                    >VLUCHT BOEKEN
                    </button>

                </section>


                {formOrderState ?
                    <>
                        <section>
                            <hr/>
                            <h2>Prijs</h2>
                            <p className="cost">Prijs van
                                selectie:
                                <br/>
                                <strong>&#128176; &nbsp;
                                    &euro; {calculateCost(SearchData[0].cost.score, SearchData[10].cost.score)},-
                                </strong>
                                <br/>= van Amsterdam naar Los Angeles</p>

                        </section>
                        <section>
                            <h2>Vul je gegevens in</h2>
                            <label htmlFor="fullname">
                                Volledige naam:
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="voornaam achternaam"
                                    id="fullname"
                                    value={formName}
                                    onChange={(e) => setFormName(e.target.value)}
                                />
                            </label>
                            <br/>
                            <label htmlFor="address">
                                Volledig adres:
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="(stad, land)"
                                    id="address"
                                    value={formAddress}
                                    onChange={(e) => setFormAddress(e.target.value)}
                                />
                            </label>
                            <br/>
                            <label htmlFor="phonenumber">
                                Telefoon:
                                <input
                                    type="text"
                                    name="phonenumber"
                                    placeholder="06-12345678"
                                    id="phonenumber"
                                    value={formPhonenr}
                                    onChange={(e) => setFormPhonenr(e.target.value)}
                                />
                            </label>
                            <br/>
                            <label htmlFor="identification">
                                ID nummer:
                                <input
                                    type="text"
                                    name="identification"
                                    placeholder="paspoortnummer"
                                    id="identification"
                                    value={formIdentification}
                                    onChange={(e) => setFormIdentification(e.target.value)}
                                />
                            </label>
                            <br/>
                        </section>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                        >
                            BEVESTIGEN
                        </button>
                    </>
                    :
                    <>
                        <hr/>
                        <p>Klik op 'vlucht boeken', om je persoonsgegevens in te kunnen vullen.</p>
                    </>}
            </form>


            {formSubmitState ?
                <div className="box">
                    <hr/>
                    <h2>Bestelling/Boeking</h2>
                    <p><strong>Dit heb je besteld/geboekt:</strong></p>
                    <p>Geboekte vlucht van:  {airportNameDeparture},<br/>
                        naar:  {airportNameArrival},<br/>
                        aantal personen:  {formPassengers},<br/>
                        vertrekDatum:  {departDate},<br/>
                        aankomstDatum:  {returnDate},<br/>
                        Naam:  {formName},<br/>
                        Adres:  {formAddress},<br/>
                        Telefoon:  {formPhonenr},<br/>
                        ID nummer:  {formIdentification}.
                    </p>
                    <hr/>
                </div>

                :
                <>
                    <hr/>
                    <p>Klik op 'bevestigen', om je bestelling te bekijken.</p>
                    <hr/>
                </>}


        </>

    )

};