import React, { useState } from 'react';
import "./css/style.css";

const TempApp = () => {

    const [city, setCity] = useState("pune");

    return (
        <>
        <div className="box">
            <div className="inputData">
                <input
                type="search"
                className="inputFeild"
                defaultValue=""
                onChange={(event) => {

                }}
                />
            </div>
        <div className="info">
            <h2 className="location">
                <i class="fas fa-street-view"></i>{city}
            </h2>
            <h1 className="temp">
                5.25Cel
            </h1>
            <h3 className="tempin_max"> Min : 5.25Cel | Max : 5.25Cel </h3>
        </div>
        <div className="wave -one"></div>
        </div>

        </>
    )
}

export default TempApp;