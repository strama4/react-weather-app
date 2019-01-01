import React from 'react';


class DaysSelect extends React.Component {
    
    render() {
        const { days, onChange } = this.props;
        return (
            <div>
                <p>Select how many days you'd like to view:</p>
                <select id="daysSelect" onChange={onChange}>
                    {[...Array(days).keys()].map((item, index) => (
                        <option value={index+1}>{index+1}</option>
                    ))}
                </select>
            </div>

        )
    }
} 

export default DaysSelect;