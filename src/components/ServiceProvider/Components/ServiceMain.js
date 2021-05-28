import React,{useState,useEffect} from 'react';
import '../../../css/Service_Provider.css';
import Navigator from "./Navigator";
import InstructionMain from "./InstructionMain";
import axios from "axios";

function ServiceMain(props) {
    let data=props.data;
    let setdata=props.data;
    useEffect(() => {
        axios.post('http://localhost:3001/service/work_details',{username:data.username})
        .then((response)=>{
            console.log(Date.now());
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    return (
        <div className='servicepro_main'>
            <div className='service_navigate'>
                <Navigator/>
            </div>
            <div className='service_right_main'>
                <InstructionMain/>
            </div>
        </div>
    )
}

export default ServiceMain
