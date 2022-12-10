import React from "react";
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {temprature: ''};
  }

  handleChange(e){
    this.setState({temprature: e.target.value})

  }
  
  render(){

    const temprature = this.state.temprature

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
