import React from 'react';
import sunny from '../assetss/images/sunny.png';
import cloudy from '../assetss/images/cloudy.png';
import sleet from '../assetss/images/sleet.png';
import snowy from '../assetss/images/snowy.png';
import rainy from '../assetss/images/rainy.png';
import windy from '../assetss/images/windy.png';
import mostlyCloud from '../assetss/images/mostly-cloudy.png';

const WeatherPic = ({img, alt}) => {
    //props image is going to be string
    let src = null;
     
    switch(img) {
        case 'clear-day':
        case 'clear-night':
            src = sunny;
            break;
        case 'rain':
            src = rainy;
            break;
        case 'snow':
            src = snowy;
            break;
        case 'sleet':
            src = sleet;
            break;
        case 'windy':
            src = windy;
            break;
        case 'partly-cloudy-day':
        case 'partly-cloudy-night':
            src = mostlyCloud;
            break;
        case 'cloudy':
            src = cloudy;
            break;
        default:
            src = sunny;
    }

    return (
        <img src={src} alt={alt}></img>
    )
    
}

export default WeatherPic;
