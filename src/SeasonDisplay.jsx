import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer : {
        text:"let's hit the beach",
        iconName: 'sun',
        weather: 'summer time'
    },
    winter : {
        text: "burr it is cold here" ,
        iconName:'snowflake',
        weather: 'winter time'
    }
}

const getSeason = (lat , month) => {
    if(month > 2 && month < 9){
          return lat > 0 ? 'summer' : 'winter';
    }
    else
    return lat > 0? 'winter' : 'summer';
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat , new Date().getMonth());
    const {text , iconName ,weather } = seasonConfig[season];
        return (
        <div className={`season-display ${season}`}>
                <i className={`icon-left massive ${iconName} icon`} />
                    <h1>{`${weather} : ${text}`}</h1>
                <i className={`icon-right massive ${iconName} icon`} />
        </div>
        )
};

export default SeasonDisplay;