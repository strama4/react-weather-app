import React from 'react';

const Temp = ({low, high, temp}) => {
    if (!temp) {
        return <div>
            <span>Low: {Math.round(low)}&deg;C </span>
            <span>High: {Math.round(high)}&deg;C</span>
        </div>
    } else {
        return <div>
            <span>Temp: {Math.round(temp)}&deg;C</span>
        </div>
    }
    
}

export default Temp;