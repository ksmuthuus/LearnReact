import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
  summer:{
    text:'Hot outside...',
    iconText:'sun'
  },
  winter:{
    text:'Chill Outside',
    iconText:'snowflake'
  }
}

const getSeason = (lat, month) => {
  if(month > 2 && month < 9){
    return (lat > 0) ?'summer' :'winter'
  }
  else{
    return (lat > 0) ?'winter' :'summer'
  }
}


const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const {text, iconText}=seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconText} massive icon`}/>
        <h1>{text}</h1>
      <i className={`icon-right ${iconText} massive icon`}/>
    </div>)
}

export default SeasonDisplay