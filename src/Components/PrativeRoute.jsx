import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const PrativeRoute = () => {

    const auth = JSON.parse(localStorage.getItem("auth"))

  return (
    <div>
      {auth ? (
       <Outlet />
      ) : (
     <Navigate to={'/login'} />
      )}
    </div>
  )
}

export default PrativeRoute