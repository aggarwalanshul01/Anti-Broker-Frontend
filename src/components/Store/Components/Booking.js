import React from 'react'

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
            <div className='main_mid_pop'>hello</div>
        </div>
    )
}

export default Booking
