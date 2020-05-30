import React, { FC } from 'react';
import Temp from './Temp';
import RH from './RH'

const Body: FC = () => {
    return(
        <div className='body'>
            <h1>Body Placeholder</h1>
            <Temp />
            <RH />
        </div>
    )
}

export default Body;