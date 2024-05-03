// import SlickSlider from 'components/3d-slider';
import { AuthIsNotSignedIn } from 'contexts/authContext';
// import AuthWrapper from 'pages/auth/AuthWrapper';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { Loadable } from 'routes';
const RcAuthWrapper = Loadable(lazy(() => import('pages/auth/AuthWrapper')));
// const RequestCode = Loadable(lazy(() => import('pages/auth/RequestCode')));
// const VerifyCode = Loadable(lazy(() => import('pages/auth/VerifyCode')));
// const Password = Loadable(lazy(() => import('pages/auth/Password')));
// const SignIn = Loadable(lazy(() => import('pages/auth/SignIn')));
// const SignUp = Loadable(lazy(() => import('pages/auth/SignUp')));

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <AuthIsNotSignedIn>
        <RcAuthWrapper />
      </AuthIsNotSignedIn>
    ),
    children: [
      {
        path: '/',
        element: <div>hello</div>,
      },
      {
        path: '/signin',
        element: <div>signin</div>,
      },
      {
        path: '/signup',
        element: <div>SignUp</div>,
      },
      // {
      //   path: '/verify',
      //   element: <Password />,
      // },
      // {
      //   path: '/requestcode',
      //   element: <RequestCode />,
      // },
      // {
      //   path: '/forgotpassword',
      //   element: <ForgotPassword />,
      // },
    ],
  },
];
