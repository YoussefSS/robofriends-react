import React from 'react'

const SearchBox = ({searchChange /* again, we are destructuring here, we can just use props */}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;