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
        const {day, img, alt, low, high} = this.props;

        return (
            <div className="inner"
                style={border[this.state.isHovering]}
                    onMouseEnter={this.handleHover}
                    onMouseLeave={this.handleHover}>
                <Day day={day}/> 
                <WeatherPic img={img} alt={alt} />
                <Temp low={low} high={high} />
            </div>

        )
    }
}


export default WeatherCard;