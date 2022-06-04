import React, {useState} from 'react';
import './SearchPage.css';
import SearchData from '../data/mock-airports.json';


export default function SearchPage() {
    const [queryDeparture, setQueryDeparture] = useState("");
    const [queryArrival, setQueryArrival] = useState("");

    console.log("mock zoek data:", SearchData);
    console.log("zoekopdracht", queryDeparture);

    return (

        <section>
            <h2>Vlucht zoeken</h2>
            <div className="inner">

                <div className="column">
                    <label htmlFor="departure">Van:</label>
                    <input placeholder="Zoek plaats van vertrek"
                           onChange={event => setQueryDeparture(event.target.value)}/>

                    {
                        SearchData.filter(post => {
                            if (queryDeparture === '') {
                                return post;
                            } else if (post.address.cityName.toLowerCase().includes(queryDeparture.toLowerCase())) {
                                return post;
                            }
                        }).map((post, index) => (
                            <div className="box" key={index}>
                                <p>{post.name}</p>
                                <p>{post.address.cityName}</p>
                                <p>{post.iataCode}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="column">
                    <label htmlFor="arrival">Naar:</label>
                    <input placeholder="Kies plaats van aankomst"
                           onChange={event => setQueryArrival(event.target.value)}/>

                    {
                        SearchData.filter(post => {
                            if (queryArrival === '') {
                                return post;
                            } else if (post.address.cityName.toLowerCase().includes(queryArrival.toLowerCase())) {
                                return post;
                            }
                        }).map((post, index) => (
                            <div className="box" key={index}>
                                <p>{post.name}</p>
                                <p>{post.address.cityName}</p>
                                <p>{post.iataCode}</p>
                            </div>
                        ))
                    }
                </div>


            </div>
        </section>

    )

};
