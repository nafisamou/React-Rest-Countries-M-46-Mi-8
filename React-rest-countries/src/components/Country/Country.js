import React from "react";
import './Country.css'
const Country = (props) => {
    // console.log(props)
    const {name,region,coatOfArms,population,area,flags} =  props.country;
  return (
    <div className="country   bg-gradient">
      {/* <h2>Name: {props.country.name.common}</h2> */}
      <h2>Name: {name.common}</h2>
      <br/>
      <img src={flags.png} alt="" />
      <p>Region: {region}</p>
      <h3>Population: {population}</h3>
      <h4>Area: <small>{area}</small></h4>
      <img src={coatOfArms.png} alt=""/>
      
    </div>
  );
};

export default Country;
