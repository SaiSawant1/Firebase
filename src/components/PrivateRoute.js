
import {Navigate} from 'react-router-dom'
import { useAuth } from '../components/context/AuthContext'
const PrivateRoute = ({children}) => {
    const {currentUser} = useAuth()
    if(currentUser){
        return children
    }else{
        return <Navigate to='/login'/>
    }
  
}

export default PrivateRoute