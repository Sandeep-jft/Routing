import SearchBarComponent from 'js/components/SearchBar.component'
import React, { useMemo } from 'react';
import {Link, Outlet} from 'react-router-dom'

const ProductView = (props) => {
  return (
    <div>
        <h3 style={{marginLeft:10}} >ProductView</h3>
        <SearchBarComponent  {...props} />
        <nav>
            <Link to='features' >Features</Link>
            <Link to='new' >Newest</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default ProductView;