import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../Layout/layout"
import React, { Suspense } from "react"
const Home = React.lazy(() => import('../Home/Home'));
const Lazy = React.lazy(() => import('../Lazy/lazy'));
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>
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