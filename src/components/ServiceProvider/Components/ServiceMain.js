import React,{useState,useEffect,useContext} from 'react';
import '../../../css/Service_Provider.css';
import Navigator from "./Navigator";
import InstructionMain from "./InstructionMain";
import axios from "axios";
import { ServiceComp } from '../../../App';

function ServiceMain(props) {
    const ServiceM = useContext(ServiceComp);
    let data=props.data;
    let setdata=props.data;
    const [a, seta] = useState(0)
    const [complaints, setcomplaints] = useState([]);
    
    useEffect(() => {
        if(a==0){
            seta(1);
        axios.post('http://localhost:3001/service/work_details',{username:data.username})
        .then((response)=>{
            //console.log(Date.now());
            //console.log(response.data);
            ServiceM[1](response.data);
            setcomplaints(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })}
    },[complaints]);
    const func=(()=>{
       // console.log('hello');
        axios.post('http://localhost:3001/service/work_details',{username:data.username})
        .then((response)=>{
            //console.log(Date.now());
            //console.log(response.data);
            ServiceM[1](response.data);
            setcomplaints(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    return (
        <div className='servicepro_main'>
            <div className='service_navigate'>
                <Navigator complaints={complaints} func={func}/>
            </div>
            <div className='service_right_main'>
                <InstructionMain  complaints={complaints} func={func}/>
            </div>
        </div>
    )
}

export default ServiceMain
