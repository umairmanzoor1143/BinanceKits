// import { AuthIsSignedIn } from 'contexts/authContext';
// import PrivateLayout from 'layouts/privatelayout';
// import { lazy } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
// import { Loadable } from 'routes';
// import AppLayout from 'layouts/applayout';

// const SubsRightView = Loadable(lazy(() => import('pages/subscriptions/subsRighView')));

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    // \\AuthIsSignedIn
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <div>AppLayout</div>,
        children: [
          { path: 'changepassword', element: <div>signout</div> },
          { path: 'signout', element: <div>signout</div> },
          {
            path: '',
            element: <div>PrivateLayout</div>,
            children: [],
          },
        ],
      },
    ],
  },
];
