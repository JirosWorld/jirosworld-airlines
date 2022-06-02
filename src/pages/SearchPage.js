import React, {useState} from 'react';
import './SearchPage.css';
import Data from '../data/mock-flights.json';


export default function SearchPage() {
    const [queryDeparture, setQueryDeparture] = useState("");
    const [queryArrival, setQueryArrival] = useState("");

    console.log("mock data:", Data);
    console.log("zoekopdracht", queryDeparture);

    return (

        <section className="inner">

            <div className="column">
                <label htmlFor="departure">Van:</label>
                <input placeholder="Zoek plaats van vertrek"
                       onChange={event => setQueryDeparture(event.target.value)}/>

                {
                    Data.filter(post => {
                        if (queryDeparture === '') {
                            return post;
                        } else if (post.city.toLowerCase().includes(queryDeparture.toLowerCase())) {
                            return post;
                        }
                    }).map((post, index) => (
                        <div className="box" key={index}>
                            <p>{post.city}</p>
                            <p>{post.country}</p>
                        </div>
                    ))
                }
            </div>

            <div className="column">
                <label htmlFor="arrival">Naar:</label>
                <input placeholder="Kies plaats van aankomst"
                       onChange={event => setQueryArrival(event.target.value)}/>

                {
                    Data.filter(post => {
                        if (queryArrival === '') {
                            return post;
                        } else if (post.city.toLowerCase().includes(queryArrival.toLowerCase())) {
                            return post;
                        }
                    }).map((post, index) => (
                        <div className="box" key={index}>
                            <p>{post.city}</p>
                            <p>{post.country}</p>
                        </div>
                    ))
                }
            </div>


        </section>
    )

};
