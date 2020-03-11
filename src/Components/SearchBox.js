import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div>
            <label> SearchBox:
                <input 
                    className='pa3 tc ba b--black bg-white'
                    type='search' 
                    id='search'
                    placeholder='Search Robots'
                    onChange={searchChange}
                />
            </label>
        </div>
    )
}

export default SearchBox;