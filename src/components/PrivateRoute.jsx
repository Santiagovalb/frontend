import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export default function PrivateRoute({ children, redirectTo = '/' }) {
  
  return redirectTo ? children : <Navigate to={redirectTo} />;
}
