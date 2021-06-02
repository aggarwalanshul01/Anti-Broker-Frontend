import React from 'react';
import ComplaintForm from "./ComplaintForm";
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

function Booking(props) {
    let setCardOpen=props.setCardOpen; 
    let setCardOpenedD=props.setCardOpenedD;
    let CardOpen=props.CardOpen;
    let CardOpenedD=props.CardOpenedD;
    return (
        <div className='book_main_pop' onClick={(e)=>{
            if(e.target.className=='book_main_pop'){
                props.setCardOpen(0);
                props.setCardOpenedD({});
            }
            
        }}>
            <div  className='main_mid_pop'>
                <div style={{position:'fixed'}}>
                <Button variant="outlined" color="secondary" onClick={(e)=>{
            //if(e.target.className=='book_main_pop'){
                props.setCardOpen(0);
                props.setCardOpenedD({});
           // }
        }}>
                    <ClearIcon/>
                </Button>
                </div>
                <ComplaintForm CardOpenedD={CardOpenedD} data={props.data}/>
            </div>
        </div>
    )
}

export default Booking
