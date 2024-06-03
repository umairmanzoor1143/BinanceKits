import Loader from "components/Loader"
import { HTMLAttributes, Suspense, lazy } from "react"
import { useRoutes } from "react-router-dom"
import { privateRoutes } from "./PrivateRoutes"
import { publicRoutes } from "./PublicRoutes"

// const Privacy = Loadable(lazy(() => import('pages/privacy/privacy')));
export function Loadable<T>(
  Component: React.ComponentType<any>,
  LoadingComponent: any = Loader
) {
  return (props: HTMLAttributes<T> & { [key: string]: any }) => (
    <Suspense fallback={<LoadingComponent />}>
      <Component {...props} />
    </Suspense>
  )
}

const Index = () => {
  const publicElement = useRoutes([
    ...publicRoutes,
    ...privateRoutes,
    {
      path: "*",
      element: <div>Not Found</div>,
    },
  ])
  return (
    <div className="main-container-wrapper h-100" id="main-container-wrapper">
      {publicElement}
    </div>
  )
}

export default Index
