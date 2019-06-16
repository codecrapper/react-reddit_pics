import React from 'react'

const DropDown = (props) => {
    return (
        // <form onSubmit={props.testSubmit} className="ui form">
        //     <div className="ui action input">
        //         <select value={props.statusValue} onChange={props.handleChange} name="status"className="ui compact selection dropdown">
        //             <option value="hot">hot</option>
        //             <option value="new">new</option>
        //             <option value="top">top</option>
        //             <option value="controversial">controversial</option>
        //             <option value="rising">rising</option>
        //         </select>
        //     </div>
        // </form>
        <form onSubmit={props.testSubmit}>
            <select value={props.statusValue} onChange={props.handleChange} name="status"className="ui compact selection dropdown">
                    <option value="hot">hot</option>
                    <option value="new">new</option>
                    <option value="top">top</option>
                    <option value="controversial">controversial</option>
                    <option value="rising">rising</option>
                </select>
        </form>
    )
}

export default DropDown