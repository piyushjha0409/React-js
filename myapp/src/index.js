import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Calculator from './components/Calculator';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// function Clock(props){
//   return(
//     <div>
//       <h1>Hello World!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }
// function tick(){
//   root.render(<Clock date={new Date()} />);
// }

// setInterval(tick, 1000);

// class Clock extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       posts: [],
//       comments: [] //these are some independent variables 
//     };
//   }

//   componentDidMount(){
//    fetchPosts().then(response =>{
//     this.setState({
//       posts: response.posts
//     });
//    });

//    fetchComments().then(response =>{
//     this.setState({
//       comments: response.comments
//    })
//    })
//   }

//   componentWillUnmount(){
//   clearInterval(this.timerID);
//   }

// //function for the ticking 
//   tick(){
//     this.setState({
    
//     });
//   }
  
//   render(){
//     return(
//       <div>
//         <h1>Hello World!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Calculator />)

reportWebVitals();
