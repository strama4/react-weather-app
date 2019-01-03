import React from 'react';
import sunny from '../assetss/images/sunny.png';
import clear from '../assetss/images/clear.png';
import cloudy from '../assetss/images/cloudy.png';
import sleet from '../assetss/images/sleet.png';
import snowy from '../assetss/images/snowy.png';
import rainy from '../assetss/images/rainy.png';
import windy from '../assetss/images/windy.png';
import foggy from '../assetss/images/foggy.png';
import night from '../assetss/images/clear-night.png';
import partlyCloudyDay from '../assetss/images/partly-cloudy.png';
import partlyCloudyNight from '../assetss/images/night-cloudy.png';

const WeatherPic = ({img, alt}) => {
    //props image is going to be string
    let src = null;
     
    switch(img) {
        case 'clear-day':
            src = clear;
            break;
        case 'clear-night':
            src = night;
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
            src= partlyCloudyDay;
            break;
        case 'partly-cloudy-night':
            src = partlyCloudyNight;
            break;
        case 'cloudy':
            src = cloudy;
            break;
        case 'fog':
            src = foggy;
            break;
        default:
            src = sunny;
    }

    return (
        <img src={src} alt={alt}></img>
    )
    
}

export default WeatherPic;
