import React from 'react'

const SearchBarView = (props) => {
    const { handleSearch, value, placeholder } = props;
  return (
    <div>
        <input type='search' value={value} onChange={handleSearch} placeholder={placeholder} style={{height:35, marginLeft:10}} />
    </div>
  )
}

export default SearchBarView