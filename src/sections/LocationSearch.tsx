import React from 'react';
import SearchData from "../data/mock-flights.json";

function LocationSearch(props) {
    return (
        <>
            <section className="search-airport">
                <h2>Vlucht zoeken</h2>
                <h4>Zodra je begint met typen, zie je meteen de zoekresultaten verschijnen,
                    waarvan je er dan 1 kunt seecteren.</h4>

                <div className="inner">
                    <div className="column">
                        <label htmlFor="departure">Type plaats van vertrek:</label>
                        <input placeholder="Zoek plaats van vertrek" />

                                <div className="box">
                                    <label >
                                        <input type="radio" id="1"
                                               name="airport_departure"
                                               value="AMS"
                                        />
                                        <p>postDeparture.name</p>
                                        <p>postDeparture.address.cityName</p>
                                        <p>postDeparture.iataCode</p>
                                        <p>postDeparture.cost.travelers.score</p>
                                    </label>
                                </div>

                    </div>

                    <div className="column">
                        <label htmlFor="arrival">Zoek plaats van aankomst:</label>
                        <input placeholder="Kies plaats van aankomst" />

                                <div className="box" >
                                    <label >
                                        <input type="radio" id="{postArrival.iataCode}"
                                               name="airport_arrival"
                                               value="{airportNameArrival}"
                                               onChange="{handleAirportArrivalSelect}"
                                        />
                                        <p>postArrival.name</p>
                                        <p>postArrival.address.cityName</p>
                                        <p>postArrival.iataCode</p>
                                        <p>postArrival.cost.travelers.score</p>
                                    </label>
                                </div>

                    </div>
                </div>
                <p className="cost">Prijs van selectie: {SearchData[12].cost.travelers.score}</p>

                <button
                    type="button"
                    name="search"
                >ZOEKEN
                </button>

            </section>
        </>
    );
}

export default LocationSearch;