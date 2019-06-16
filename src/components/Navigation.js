import React from 'react'

const Navigation = (props) => {
    return (
        <div>
            <button onClick={props.previousPageClick} class="ui grey button center aligned">previous</button>
            <span>Page {props.page}</span>
            <button onClick={props.nextPageClick} class="ui blue button center aligned">Next</button>
        </div>
    )
}

export default Navigation