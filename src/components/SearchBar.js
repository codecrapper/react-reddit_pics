import React from 'react'

const SearchBar = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="ui form">
            <div className="field">
                <div className="ui labeled input">
                    <div className="ui label">https://www.reddit.com/r/</div>
                    <input 
                        type="text"
                        name="search"
                        placeholder="earthporn"
                        value={props.searchValue}
                        onChange={props.handleChange}
                    />
                </div>
            </div>
        </form>
    )
}

export default SearchBar