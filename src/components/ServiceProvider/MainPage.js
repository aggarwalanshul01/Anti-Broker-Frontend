import React from 'react'

function MainPage(props) {
    const data=(props.location.state);
    return (
        <div>
            <button>{data.name}a</button>
        </div>
    )
}

export default MainPage
