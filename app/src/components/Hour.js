import React from 'react';

const getHour = (timestamp) => {
    const time = new Date(timestamp*1000);
    return time.getHours();
}
const Hour = ({time}) => (
    <p>{`${getHour(time)}:00`}</p>
)

export default Hour;