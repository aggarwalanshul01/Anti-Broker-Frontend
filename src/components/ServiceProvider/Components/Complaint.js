import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import '../../../css/Service_Provider.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Complaint(props) {
    const [MSRNo, setMSRNo] = useState('')
    //let space='  ';
    console.log(props.val);
    return (
        <div className='comp_main'>
            <div className='comp_head_main'>Complaint No : <b><span style={{color:'blue'}}>{props.val.ComplaintNo}</span></b></div>
            <br/>
            <div className='comp_rules_head'>Important Instructions</div>
            <div className='comp_rules_para'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
            <br/>
            <div className='comp_detailss'>
            
            <div className='comp_rules_head'>Name of the Store - <b><span style={{color:'black'}}>{props.val.StoreName}</span></b></div>
            <div className='comp_rules_head'>Store Username - <b><span style={{color:'black'}}>{props.val.usernameStore}</span></b></div>
            <div className='comp_rules_head'>PhoneNo of the Store - <b><span style={{color:'black'}}>{props.val.PhoneStore}</span></b></div>
            <div className='comp_rules_head'>Equipment - <b><span style={{color:'black'}}>{props.val.MachineName}</span></b></div>
            <div className='comp_rules_head'>Problem Faced - <b><span style={{color:'black'}}>{props.val.Problem}</span></b></div>
            
            <div className='comp_rules_head'>Date and Time - <b><span style={{color:'black'}}>{props.val.DateBooked}</span></b></div>
            </div>
            <br/>
            
            <div className='comp_msr_button'>
            <div className='comp_rules_head' style={{padding:'10px'}}>Service Number</div>
            <div style={{paddingBottom:'20px'}}>
            <input type="text" name="username" value={MSRNo} onChange={(e)=>{setMSRNo(e.value)}} className="input_msr" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <Button variant="contained" color="primary">
                Close Complaint<CheckCircleIcon/>
            </Button>
            
            </div>
        </div>
    )
}

export default Complaint