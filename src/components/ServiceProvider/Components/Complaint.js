import React from 'react';

function Complaint(props) {
    console.log(props.val);
    return (
        <div>
            {props.val._id}
        </div>
    )
}

export default Complaint