import React from "react";
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends React.Component {
  constructor(props){
    super(props);
    // this.handleChange = this.handleChange.bind(this)
    this.handleCelciusChange = this.handleCelciusChange.bind(this)
    this.handleCelciusChange = this.handleFahrenhietChange.bind(this)
    this.state = {temprature: '', scale: 'c'};
  }

  handleCelciusChange(e){
    this.setState({temprature: 'c', temprature})

  }
  
  handleFahrenhietChange(e){
    this.setState({scale: 'f', temprature})
  }
  render(){
    const scale = this.state.scale;
    const temprature = this.state.temprature
    const celcius = scale === 'f' ? tryConvert(temprature, toCelcius): temprature;
    const fahrenheit = scale === 'c' ? tryConvert(temprature, toFahrenheit): temprature;

    
    return(
    <fieldset>
        <legend>Enter temprature in celcius</legend>
        <input 
        value={temprature}
        onChange={this.handleChange}
        />

        <BoilingVerdict
         celcius={parseFloat(temprature)}
        />

    </fieldset>
    )
  }
}
export default Calculator
