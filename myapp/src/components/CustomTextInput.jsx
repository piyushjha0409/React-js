import React from "react";

class CustomTextInput extends React.Component {

    constructor(props) {
        super(props);

        //creating a refernce to store the textInput DOM element
        this.textInput = React.createRef();
    }
    render() {
        // we will use the ref callback to store the reference to the text input DOM
        return (
            <input 
            type="text"
            ref={this.textInput}
     />
);
    }
}

export default CustomTextInput