import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div>
            <label className= 'tc'>SearchBox:
                <input 
                    className='pa3 ba b--green bg-lightest-blue'
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