import React from 'react';
import { Link } from 'react-router-dom'
import WeatherCard from './WeatherCard';

class SevenDayForecast extends React.Component {
    render() {
        const {data, days} = this.props;

        return (
            <div>
                {
                    data && data.map((day, index) => {
                        return index < days ?
                            <Link to="/random">
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