import React from 'react'
import {View} from './styles.jsx'

const InfoCard = ({tempo,location,emp,carg,desc}) => {
  return (
    <>
      <View>
        {/* Section left Data y location */}
        <div className="left-section">
          <p className='data'>{tempo}</p>
          <p className='location'>{location}</p>
        </div>
        {/* Work info */}
        <div className="right-section">
          <h4>{emp}</h4>
          <h6>{carg}</h6>
          <p>{desc}</p>
        </div>
      </View>
    </>
  )
}

export default InfoCard