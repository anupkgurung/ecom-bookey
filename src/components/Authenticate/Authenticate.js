import { Navigate, Outlet, useLocation } from "react-router-dom"
import {useAuthentication} from "../../context"

export const Authenticate = () => {
   const {userData} = useAuthentication()
   const location = useLocation()
   return (
       <>
            {userData ? <Outlet/> : <Navigate to="/login" state={{from:location}} replace />}
       </>
   )
}