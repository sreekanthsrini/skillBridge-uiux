import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router';
import { getUser } from '../../utils/auth';


interface ProtectedRouteProps {
  children?: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    if (!localStorage.getItem('token') || !user) {
      navigate('/');
    }
  }, [navigate, user]);

  if (!localStorage.getItem('token') || !user) {
    return null; // or loading spinner
  }

  return children ? <>{children}</> : <Outlet />;
}

