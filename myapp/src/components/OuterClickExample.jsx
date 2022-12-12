import React from "react";

class OuterClickExample extends React.Component{

    constructor(props){
        super(props);
       
        this.state = {
            isOpen : false//initializing the state as false
        }
        //creating a ref 
        this.toggleContainer = React.createRef();
        this.onClickHandler = this.onClickHandler.bind(this)
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this)
        
    }

    
    componentDidMount(){
        window.addEventListener('click', this.onClickOutsideHandler)
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.onClickOutsideHandler)
    }
    //function
    onClickHandler(){
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }))
    }

    //function 2
    onClickOutsideHandler(event){
        if(this.state.isOpen && !this.toggleContainer.current.contains(event.target)){
            this.setState({isOpen: false})
        }
    }
    render(){
        return(
            <div ref={this.toggleContainer}>
                <button onClick={this.onClickHandler}>Select Options</button>
                {this.state.isOpen && (
                <ul>
                    <li>Chai</li>
                    <li>Samosa</li>
                    <li>Coffee</li>
                </ul>
                )}
            </div>
        )
    }
}
export default OuterClickExample