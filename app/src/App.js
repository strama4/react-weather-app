import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import SevenDayForecast from './components/SevenDayForecast';
import HourlyForecast from './components/HourlyForecast';
import DaysSelect from './components/DaysSelect';

class App extends Component {
  state = {
    error: null,
    weatherArray: null,
    isLoaded: false,
    days: 6
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
        error: {message: error}
      })
    })
    
  }

  callApi = async () => {
    const response = await fetch('/api/call');
    const data = await response.json();

    return data
  }

  handleChange = (e) => {
    this.setState({
      days: e.target.value
    })
  }
  

  render() {
    const { error, isLoaded, days} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } 
    if (!isLoaded) {
      return <div>Loading...</div>
    } 
    const dailyArray = this.state.weatherArray.daily.data;
    const hourlyArray = this.state.weatherArray.hourly.data
    {console.log(this.state.weatherArray)}
    
    return (
        <div className="App">
          <Layout className="outer">
            <Route exact path="/" render={() => 
              <div>
                <SevenDayForecast daysSelected={days} data={dailyArray}/>
                <DaysSelect onChange={this.handleChange} days={dailyArray.length} />
              </div>
            } />
            <Route path="/:id" render={(props) => <HourlyForecast {...props} hourly={hourlyArray}/>} />
          </Layout>
          </div>
      );
    
  }
}

export default App;
