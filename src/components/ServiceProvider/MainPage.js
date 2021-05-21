import React from 'react'
import Header from "./Components/Header";
import "../../css/Service_Provider.css";
import { Route,Switch } from "react-router-dom";
import Profile from "./Components/Profile";

function MainPage(props) {
    let data=props.data;
    //console.log(data);
    return (
        <div>
            <Header data={data}/>
        </div>
    )
}

export default MainPage
