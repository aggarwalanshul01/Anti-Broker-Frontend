import React from 'react'

function MainPage(props) {
    const data=(props.location.state);
    return (
        <div>
            <button>{data.name}aa</button>
        </div>
    )
}

export default MainPage
