// import SlickSlider from 'components/3d-slider';
import { AuthIsNotSignedIn } from "context/authContext"
// import AuthWrapper from 'pages/auth/AuthWrapper';
import { lazy } from "react"
import { Outlet, RouteObject } from "react-router-dom"
import { Loadable } from "routes"
const RcAuthWrapper = Loadable(lazy(() => import("pages/auth/AuthWrapper")))
const HomePage = Loadable(lazy(() => import("pages/home")))
const RcAppLayout = Loadable(lazy(() => import("layout/AppLayout")))
const RcPrivateLayout = Loadable(lazy(() => import("layout/PrivateLayout")))
const SignIn = Loadable(lazy(() => import("pages/auth/SignIn")))
// const RequestCode = Loadable(lazy(() => import('pages/auth/RequestCode')));
// const VerifyCode = Loadable(lazy(() => import('pages/auth/VerifyCode')));
// const Password = Loadable(lazy(() => import('pages/auth/Password')));
// const SignIn = Loadable(lazy(() => import('pages/auth/SignIn')));
// const SignUp = Loadable(lazy(() => import('pages/auth/SignUp')));

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <AuthIsNotSignedIn>
        <RcAppLayout>
          <RcAuthWrapper className="authpage-scroll" />
        </RcAppLayout>
      </AuthIsNotSignedIn>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      // {
      //   path: "/signup",
      //   element: <div>SignUp</div>,
      // },
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
  {
    path: "/",
    element: (
      <AuthIsNotSignedIn>
        <RcPrivateLayout>
          <RcAuthWrapper />
        </RcPrivateLayout>
      </AuthIsNotSignedIn>
    ),
    children: [
      {
        path: "/mail",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <AuthIsNotSignedIn>
        <RcAuthWrapper className="sign_up_page" />
      </AuthIsNotSignedIn>
    ),
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]
