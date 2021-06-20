import React, { useEffect, useState } from 'react';
import "./css/style.css";

const TempApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect( () => {
        const fetchApi = async () => {

            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`
            const response = await fetch(url);
            // console.log(response)
            const resjson = await response.json();
            // console.log(resjson)
            setCity(resjson)
        }
        fetchApi();
    },[])
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
                <i className="fas fa-street-view"></i>{search}
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