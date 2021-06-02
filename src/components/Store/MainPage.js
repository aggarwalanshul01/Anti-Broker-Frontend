import { Button } from '@material-ui/core';
import React,{useState} from 'react'
import { Redirect } from "react-router-dom";
import Profile from "./Components/Profile";
import StoreMain from "./Components/StoreMain";
import Header from "./Components/Header";
import Booking from "./Components/Booking";

function MainPage(props) {
    const [CardOpen, setCardOpen] = useState(0);
    const [CardOpenedD, setCardOpenedD] = useState({});
    const [profile, setprofile] = useState(1);
    const [SpecificData, setSpecificData] = useState(null);
    let data=props.data;
    console.log(data);
    if(data==null){
        return (
            <div>
                <Redirect to='/login_store'/>
            </div>
        )
    }
    
    return (
        <div>
            <Header data={data} setprofile={setprofile} profile={profile}/>
            {profile==1?
                <Profile data={props.data} setdata={props.setdata} setprofile={setprofile} profile={profile} profileComplete={setSpecificData}/>:
                <StoreMain data={props.data} setdata={props.setdata} setprofile={setprofile} profile={profile} profileComplete={setSpecificData} setCardOpen={setCardOpen} setCardOpenedD={setCardOpenedD} CardOpen={CardOpen} CardOpenedD={CardOpenedD}/>
            }<div className='book_popup'>
                {CardOpen==0?null:<Booking data={props.data} setCardOpen={setCardOpen} setCardOpenedD={setCardOpenedD} CardOpen={CardOpen} CardOpenedD={CardOpenedD}/>}
            </div>
        </div>
    )
}

export default MainPage

