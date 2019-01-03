import React from 'react';
import Day from './Day';
import Hour from './Hour';
import Temp from './Temp';
import WeatherPic from './WeatherPic';
import { Link } from 'react-router-dom';
import Button from './Button';

class HourlyForecast extends React.Component {
    getDay(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.getDay();
    }

    render() {
        const { hourly, match } = this.props;
        const matchedData = hourly.filter(hour => this.getDay(hour.time) == match.params.id);
        if (matchedData.length === 0) {
            return (
                <div>
                    <p>We're sorry, there's no hourly data for this day...</p>
                    <div>
                        <Button location="/" text="Go Back to Main Page" />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="flex-container">
                    {
                        matchedData && matchedData.map((item, index) => {
                            return <div className="inner">
                                        <Day day={item.time} />
                                        <WeatherPic img={item.icon} alt={item.icon} /> 
                                        <Temp temp={item.temperature} />
                                        <Hour time={item.time} />
                                    </div>

                        })      
                    }
                    <div>
                        <Button location="/" text="Go Back to Main Page" />
                    </div>
                    
                </div>
            )
        }
    }
}

export default HourlyForecast;