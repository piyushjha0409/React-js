function BoilingVerdict(props){
    if(props.celcius >= 100){
        return <p>The Water would boil.</p>
    }
    return <p>The Water would not boil</p>
}

export default BoilingVerdict