import React from "react";
import mockdata from '../data/mock-flights.json';

const TextInput = props => (
  <form onSubmit={props.onSubmit}>
      <h3>TextInput file</h3>
    <label>{props.display}: </label>
    <input value={props.value} onChange={props.onChange}/>
    <input type="submit"/>
  </form>
);

export default TextInput;