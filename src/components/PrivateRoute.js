
import {Navigate} from 'react-router-dom'
import { useAuth } from '../components/context/AuthContext'
const PrivateRoute = ({children}) => {
    const {currentUser} = useAuth()
    return currentUser? children : <Navigate to="/login"/>
  
}

export default PrivateRoute