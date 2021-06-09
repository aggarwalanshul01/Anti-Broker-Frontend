import React,{useState} from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ParticularComplaint from "./ParticularComplaint";

function ParticularMonth(props) {
    const [opened, setopened] = useState(0);
    let val=props.val;
    let data=props.data;
    let yrmon=props.yrmon;
    let done=props.done;
    console.log(yrmon);
    console.log(done);
    return (
        <div className='particular_month_main'>
            <div className='particular_month_head'  onClick={
                ()=>{
                    setopened(opened^1);
                }
            }>
                <span>
                <b>{yrmon+"    "}<CheckCircleOutlineIcon style={{marginTop:'-5px',color:'green',marginLeft:'10px',marginRight:'5px'}}/>{done+" "} <HighlightOffIcon style={{marginTop:'-5px',color:'red',marginLeft:'10px',marginRight:'5px'}}/>{data.length-done+" "} </b> 
                {opened==0?<KeyboardArrowRightIcon style={{marginTop:'-5px'}}/>:<KeyboardArrowDownIcon  style={{marginTop:'-5px'}}/>}
                </span>
                
            </div>
            <div>
                {opened==1?
                data.map((val,ind)=>{
                    return <ParticularComplaint data={data[ind]}/>
                })
                
                :null}
                
            </div>
        </div>
    )
}

export default ParticularMonth
