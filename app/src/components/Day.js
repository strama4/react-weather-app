import React from 'react';

const getDay = (timestamp) => {
    let a = new Date(timestamp*1000);
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[a.getDay()];
}

const Day = ({day}) => (
    <p>{getDay(day)}</p>
)

export default Day;