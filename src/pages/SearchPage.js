import React, {useState} from 'react';
import './SearchPage.css';
import Data from '../data/mock-data.json';


export default function SearchPage() {
    const [queryDeparture, setQueryDeparture] = useState("");
    const [queryArrival, setQueryArrival] = useState("");

    console.log("mock data:", Data);
    console.log("zoekopdracht", queryDeparture);

    return (

        <div className="inner">

            <div className="column">
                <label htmlFor="departure">Van:</label>
                <input placeholder="Zoek plaats van vertrek"
                       onChange={event => setQueryDeparture(event.target.value)}/>

                {
                    Data.filter(post => {
                        if (queryDeparture === '') {
                            return post;
                        } else if (post.address.cityName.toLowerCase().includes(queryDeparture.toLowerCase())) {
                            return post;
                        }
                    }).map((post, index) => (
                        <div className="box" key={index}>
                            <p>Name of airport: {post.name}</p>
                            <p>City: {post.address.cityName}</p>
                            <p>Airport code: {post.address.cityCode}</p>
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
                        } else if (post.address.cityName.toLowerCase().includes(queryArrival.toLowerCase())) {
                            return post;
                        }
                    }).map((post, index) => (
                        <div className="box" key={index}>
                            <p>Name of airport: {post.name}</p>
                            <p>City: {post.address.cityName}</p>
                            <p>Airport code: {post.address.cityCode}</p>
                        </div>
                    ))
                }
            </div>


        </div>
    )

};
