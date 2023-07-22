import React from 'react'
import { Navigate } from 'react-router'

export default function ProtectedRoute(prpos) {
    // const navigate = useNavigate()
    if (localStorage.getItem('UserToken') == null) {
        return <Navigate to={'/login'} />
    }
    else {

        return prpos.children
    }


}