import UserDetailsView from 'js/views/UserDetailView/UserDetail.view'
import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetailsContainer = () => {
    const params = useParams();
  return (
    <UserDetailsView userId = {params.userId} />
  )
}

export default UserDetailsContainer