import React from 'react'

function Clock(props){
    return (
       <div>
        <h1>Hello World</h1>
        <h2>It is {props.toLocaleTimeString()}</h2>
       </div>
    )
}

export default Clock;