import React from 'react';
import './Clock.css'

const date = new Date();
const localTime = date.getTime();
const localOffset = date.getTimezoneOffset() * 60000;
const utc = localTime + localOffset;
const offset = +2;
const ger = utc + (3600000 * offset);
const gerTimeNow = new Date(ger).toLocaleString();

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {gerTimeNow}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.Iterate(),1000
        );
    }

    Iterate(){
        this.setState({
            gerTimeNow: new Date()
        });
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return(
            <div>
                <h1>{this.props.country} Current Time:</h1>
                {/* Me renderiza el date pero tiene un problema con el objeto -> dice que los objetos no son validos como un hijo de React */}
                {/* <p>{this.state.gerTimeNow}</p> */}
            </div>
        );
    }
}

export default Clock;