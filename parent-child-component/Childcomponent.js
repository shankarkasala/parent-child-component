import React from 'react'

function Childcomponent(props) {
    

    return (
        <div>
            <button onClick={()=>props.greethandler('child')}>greet</button>
        </div>
    )
}

export default Childcomponent
