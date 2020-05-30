import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

const RH: FC = () => {

    const [humid, setHumid] = useState([]);

    const getRH = async () => {
        
        let response = await axios.get('https://app.conserv.io/data/api/health/db');
        let humid = response.data;
        humid.sort(function (a: any, b: any) {
            return a.bucket - b.bucket;
          });
        setHumid(humid) // sets stte after sorting chronologically
    }

    useEffect(() => {
        getRH();
    }, []); // pass in values that you want to monitor for changes into the array in second arg


    // console.log(avgRH)


    return(

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {humid.map(humidInstance => (
                            <li key={humidInstance['bucket']} className="list-group-item">{humidInstance['avg_rh']}</li> // ordinarily would use {humidInstance.bucket, but TS seems to want the dot notation replaced with bracket notation }
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}

// RH()

export default RH;