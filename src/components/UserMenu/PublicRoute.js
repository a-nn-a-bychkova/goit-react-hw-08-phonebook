import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

export default function PrivateRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  console.log('shouldRedirect', shouldRedirect);
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}
