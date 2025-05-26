import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../Layout/layout"
import Home from "../Home/Home"

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
  return <RouterProvider router={routes} />
}

export default App