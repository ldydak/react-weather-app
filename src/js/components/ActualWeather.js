import React, { Component } from 'react';

class ActualWeather extends Component {

    render() {
        return (
        
            <div className="actual-weather-wrapper" style={{backgroundImage: `url(${JSON.stringify(this.props.img.img)}), linear-gradient(44deg, #515B8B 0%, #816E8E 100%)`}}>
                <h1>{this.props.city}</h1>
                <p className="temp">{this.props.item.temp != null ? this.props.item.temp.toFixed() : ''}&deg;C</p>
                <p className="description">{this.props.item.desc}</p>
                <p className="wind">Wiatr: {this.props.item.wind} km/h</p>
                <p className="pressure">Ciśnienie: {this.props.item.press} hPa</p>

            </div>
        )
    }
}


export default ActualWeather;