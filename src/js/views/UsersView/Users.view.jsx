import React from 'react'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'

const UserView = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams ] = useSearchParams();
    const handleNavigation = (path)=>{
        navigate(`${path}`)
    }
    const searchValue = searchParams.get('filter') === 'active' ;
  return (
    <div>
        <h3>List of Users</h3>
        <button onClick={()=>handleNavigation(1)}>user 1</button>
        <button onClick={()=>handleNavigation(2)}>user 2</button>
        <button onClick={()=>handleNavigation(3)}>user 3</button>
        <Outlet />
        <div style={{margin:15}} >
            <button onClick={()=>setSearchParams({filter:'active'})}>Active users</button>
            <button onClick={()=>setSearchParams({})}>Reset users</button>
        </div>
        {
            searchValue ? <h3>List of active users </h3> : <h3>List of all users</h3>
        }
    </div>
  )
}

export default UserView