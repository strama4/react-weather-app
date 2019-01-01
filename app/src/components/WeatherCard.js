import React, { Component } from 'react';
import Day from './Day';
import Temp from './Temp';
import WeatherPic from './WeatherPic';

let border = {
    true: {
        'transform': 'scale(1.2)',
        'transition': 'all 1s',
        'margin': '1px' 
    },
    false: {
        'margin': '1px',
        'transition': 'all 1s'
    }
}

class WeatherCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false
        }
    }

    handleHover = () => {
        this.setState({
            isHovering: !this.state.isHovering
        })
    }

    render() {
        return (
            <div style={border[this.state.isHovering]}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}>
                <Day day={this.props.day}/> 
                <WeatherPic img={this.props.img} alt={this.props.alt} />
                <Temp low={this.props.low} high={this.props.high} />
            </div>

        )
    }
}


export default WeatherCard;