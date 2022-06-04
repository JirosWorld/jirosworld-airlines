import React, {useState} from "react";
import TextInput from './TextInput';
import LocationSelect from './LocationSelect';
import './Locate.css';


function Locate(props) {
    const [value, setValue] = useState('');
    const [locations, setLocations] = useState([]);


    const submit = (e) => {
        e.preventDefault();
        fetch(
            "./data/mock-airports.json"
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

        </>
    );
};

export default Locate;