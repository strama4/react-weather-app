import React, { Component } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import Layout from './components/Layout';


// sample API call for 5 day/ every 3hours 
// api.openweathermap.org/data/2.5/forecast?id=524901

class App extends Component {
  state = {
    error: null,
    weatherArr: null,
    isLoaded: false
  }

  componentDidMount() {
    this.callApi()
    .then(res => {
      this.setState({
        weatherArray: res,
        isLoaded: true,
      })
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error: {message: 'Fack off'}
      })
    })
    
  }

  callApi = async () => {
    const response = await fetch('/api/call');
    const data = await response.json();

    return data
  }

  getDay = (timestamp) => {
    let a = new Date(timestamp*1000);
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[a.getDay()];
  }

  render() {
    const { error, weatherArray, isLoaded} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
        return (
          <div className="App outer">
            <Layout className="outer">
            {
              this.state.weatherArray && weatherArray.map((day) => (
                <div className="inner">
                      {console.log(day.icon)}
                    <WeatherCard className="inner"
                      day={this.getDay(day.time)}
                      img={day.icon}
                      alt={day.icon}
                      high={day.temperatureHigh}
                      low={day.temperatureLow}
                      />
                  </div>
              
              ))
              }
      
              </Layout>
            </div>

        );
    }
  }
}

export default App;
