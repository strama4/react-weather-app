import React from 'react';

const Temp = ({low, high}) => (
    <div>
        <span>Low: {Math.round(low)} </span>
        <span>High: {Math.round(high)}</span>
    </div>
)

export default Temp;