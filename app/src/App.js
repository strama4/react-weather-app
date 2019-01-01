import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import SevenDayForecast from './components/SevenDayForecast';
import HourlyForecast from './components/HourlyForecast';
import DaysSelect from './components/DaysSelect';

class App extends Component {
  state = {
    error: null,
    weatherArr: null,
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
    const { error, weatherArray, isLoaded, days} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
        return (
          <div className="App outer">
            {console.log(weatherArray)}
            <Layout className="outer">
              <Route exact path="/" render={() => 
                <div>
                  <SevenDayForecast days={days} data={weatherArray}/>
                  <DaysSelect onChange={this.handleChange} days={weatherArray.length} />
                </div>
              } />
              <Route path="/random" component={HourlyForecast} />
            </Layout>
            </div>
        );
    }
  }
}

export default App;
