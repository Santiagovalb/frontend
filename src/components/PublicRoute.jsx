import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const shouldRedirect = isFinite && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}