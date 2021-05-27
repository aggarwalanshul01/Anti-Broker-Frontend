import React,{useState,useEffect} from 'react'
import Header from "./Components/Header";
import "../../css/Service_Provider.css";
import { Route,Switch,Redirect } from "react-router-dom";
import Profile from "./Components/Profile";
import ServiceMain from "./Components/ServiceMain";

function MainPage(props) {
    const [profile, setprofile] = useState(1);
    const [SpecificData, setSpecificData] = useState(null);

    
    
    let data=props.data;
    if(data==null){
        return (
            <div>
                <Redirect to='/login_service_provider'/>
            </div>
        )
    }
    //console.log(data);
    return (
        <div>
            <Header data={data} setprofile={setprofile} profile={profile}/>
            {profile==1?
                <Profile data={props.data} setdata={props.setdata} setprofile={setprofile} profile={profile} profileComplete={setSpecificData}/>:
                <ServiceMain data={props.data} setdata={props.setdata} setprofile={setprofile} profile={profile} profileComplete={setSpecificData}/>
            }
        </div>
    )
}

export default MainPage
