import React,{useState,useEffect} from 'react';
import '../../../css/Store.css';
import Navigator from "./Navigator";
import InstructionMain from "./InstructionMain";
import axios from "axios";
import Booking from "./Booking";
import { Button } from '@material-ui/core';

function StoreMain(props) {
    const [Providers, setProviders] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3001/store/getAllProviders')
        .then((response)=>{
            setProviders(response.data);
            //console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        })
        
        //console.log(CardOpen);
    }, [])
    return (
        <div>
            <div className='storepro_main'>
                <div className='service_navigate'>
                    <Navigator/>
                </div>
                <div className='service_right_main'>
                    <InstructionMain Providers={Providers} setCardOpen={props.setCardOpen} setCardOpenedD={props.setCardOpenedD} CardOpen={props.CardOpen} CardOpenedD={props.CardOpenedD}/>
                </div>
                
            </div>
            {/* <div className='book_popup'>
                {props.CardOpen==0?null:<Booking CardOpenedD={props.CardOpenedD}/>}
                </div> */}
        </div>
    )
}

export default StoreMain
