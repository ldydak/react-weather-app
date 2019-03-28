import React, { Component } from 'react';
import ReactDOM from "react-dom";

import axios from 'axios';
import SearchCity from './SearchCity';
import ActualWeather from './ActualWeather';
import NextHoursWeather from './NextHoursWeather';

import "../../scss/style.scss";

class App extends Component {
    constructor() {
        super();
        this.state = {
            city: '',
            actualWeather: {
                temp: null,
                wind: null,
                press: null,
                desc: null,
                icon: null
            },
            nextHoursWeather: {
                list: []
            },
            visible: false,
            cityBackground: {
                img: ''
            }
        }
    }


    getCityDetails = query => {
        const api_id = 'f7018f0013e614be2063a6cc90ebbe0f';
        const unsplash_api_key = 'eb77ed1c4a3f8720eba7022ae3f8545dce0ee23a6eb72bacf3acfecc26a33757';
        const unsplash_api_secret_key = '1140d68005ca3b816da3f6d43bbd9573e3e6e5bc9a5be464a91f7b99f869a874';
        
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&lang=pl&cnt=5&appid=${api_id}`)
          .then(data => {
            // console.log(data);
            this.setState({ 
                city: data.data.name,
                actualWeather: {
                    temp: data.data.main.temp,
                    wind: data.data.wind.speed,
                    press: data.data.main.pressure,
                    desc: data.data.weather[0].description,
                    icon: data.data.weather[0].icon,
                },
                visible: true
             });
          });
        axios
          .get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&lang=pl&cnt=4&appid=${api_id}`)
          .then(data => {
            console.log(data);
            this.setState({ 
                nextHoursWeather: {
                    list: data.data.list
                }
             });
          });
        axios
        .get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${unsplash_api_key}`)
        .then(data => {
        console.log(data);
        this.setState({ 
            cityBackground: {
                img: data.data.results[0].urls.regular
            }
            });
        });

      };
      
    render() {
        return (
            <div className="weather-app">
                <SearchCity getCity={this.getCityDetails} visible={this.state.visible}/>
                <div className={`results-wrapper ${ this.state.visible === true ? '' : 'hidden'}`}>
                    <ActualWeather item={this.state.actualWeather} city={this.state.city} img={this.state.cityBackground} />
                    <NextHoursWeather item={this.state.nextHoursWeather}/>
                </div>    
            </div>
        )
    }
}

export default App;
