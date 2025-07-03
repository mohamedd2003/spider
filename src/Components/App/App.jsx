import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../Layout/layout"
import React, { Suspense } from "react"
const Home = React.lazy(() => import('../../Pages/Home/Home'));
const Lazy = React.lazy(() => import('../Lazy/lazy'));
const Videos = React.lazy(() => import('../../Pages/Videos'));
const Photos = React.lazy(() => import('../../Pages/Photos'));
const Designs = React.lazy(() => import('../../Pages/Designs'));
const Campaigns = React.lazy(() => import('../../Pages/Campaigns'));
const NotFound = React.lazy(() => import('../../Pages/NotFound'));
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "videos",
        element: <Videos/>
      },
      {
        path: "photos",
        element: <Photos/>
      },
      {
        path: "designs",
        element: <Designs/>
      },
      {
        path: "campaigns",
        element: <Campaigns/>
      },
      {
        path: '*',
        element: <NotFound/>
      }
    ]
  }
])

function App() {
  return (

    <>
    <Suspense fallback={<Lazy/>}>
    <RouterProvider router={routes} />
    
    </Suspense>
    </>
  )
}

export default App