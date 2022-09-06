import ProductView from 'js/views/ProductView/Product.view'
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { productUpdate } from 'reduxStore/reducers/productReducer';

const ProductsContainer = () => {
    const { searchProduct } = useSelector(state=>state.productReducer);
    const dispatch = useDispatch();

    const handleProductSearch = useCallback((event)=>{
        const {value} = event.target;
        dispatch(productUpdate(value));
    },[])

  return (
    <ProductView value={searchProduct} handleSearch={handleProductSearch} placeholder='Search Product' />
  )
}

export default ProductsContainer