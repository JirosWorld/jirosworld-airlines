import React, {useState} from "react";
import TextInput from './TextInput';
import LocationSelect from './LocationSelect';
import './Locate.css';
import Data from "../data/mock-flights.json";


function Locate(props) {
    const [value, setValue] = useState('');
    const [locations, setLocations] = useState([]);
    const [queryDeparture, setQueryDeparture] = useState("");
    const [queryArrival, setQueryArrival] = useState("");

    console.log("mock data:", Data);
    console.log("zoekopdracht", queryDeparture);

    const submit = (e) => {
        e.preventDefault();
        fetch(
            "http://localhost:8080/api/locations?keyword=" + value
        )
            .then((response) => response.json())
            .then((json) => {
                setLocations(json);
            });
    }

    return (
        <>
            <section>
                <h2>Locate file</h2>
                <TextInput onSubmit={submit} display={props.display}
                           onChange={(e) => setValue(e.target.value)} value={value}/>
                <LocationSelect data={locations} handleChoice={props.handleChoice}/>
            </section>

            <hr/>

            <section className="inner">

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
                                <p>{post.name}</p>
                                <p>{post.address.cityCode}</p>
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
                            } else if (post.address.cityName.toLowerCase().includes(queryDeparture.toLowerCase())) {
                                return post;
                            }
                        }).map((post, index) => (
                            <div className="box" key={index}>
                                <p>{post.name}</p>
                                <p>{post.address.cityCode}</p>
                            </div>
                        ))
                    }
                </div>


            </section>
        </>
    );
};

export default Locate;