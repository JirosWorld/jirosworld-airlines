import React, {useEffect, useState} from 'react';

function AllFlights() {
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('./data/mock-flights.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div className="App">
            {
                data && data.length>0 && data.map((item, index)=><p key={index}>{item.city}</p>)
            }
        </div>
    );
}

export default AllFlights;