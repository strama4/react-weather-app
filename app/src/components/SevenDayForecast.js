import React from 'react';
import { Link } from 'react-router-dom'
import WeatherCard from './WeatherCard';

class SevenDayForecast extends React.Component {
    getDay(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.getDay();
    }

    render() {
        const {data, daysSelected} = this.props;

        return (
            <div className="flex-container">
                {
                    data && data.map((day, index) => {
                        return index < daysSelected ?
                            <Link key={index} to={`/${this.getDay(day.time)}`}>
                                <WeatherCard
                                    key={index}
                                    day={day.time}
                                    img={day.icon}
                                    alt={day.icon}
                                    low={day.temperatureLow}
                                    high={day.temperatureHigh}
                                />                    
                            </Link> :
                            null
                    })   
                }
            </div>
        )
    }
}

export default SevenDayForecast;