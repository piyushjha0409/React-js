class calculator extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {temprature: ''};
  }

  handleChange(e){
    this.setState({temprature: e.target.value})

  }
  
  render(){
    <fieldset>
        <legend>Enter temprature in celcius</legend>
        <input 
        value={temprature}
        onChange={this.handleChange}
        />
        
    </fieldset>
  }
}