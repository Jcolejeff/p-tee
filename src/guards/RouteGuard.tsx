import useStore from 'store';
import { useLocation, Navigate, useOutlet } from 'react-router-dom';
import { planTypes } from 'types';

const RouteGuard = () => {
  const loggedIn = useStore((state) => state.loggedIn);
  const user = useStore((state) => state.authDetails);
  const location = useLocation();
  const outlet = useOutlet();
  return !loggedIn ? (
    <Navigate
      to={`/login`}
      replace
      state={
        {
          path: location.pathname,
        } as { path: string; failedFrom: planTypes }
      }
    />
  ) : (
    outlet
  );
};

export default RouteGuard;
