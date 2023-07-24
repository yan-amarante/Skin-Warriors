import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeScreen from './Pages/HomeScreen/HomeScreen.tsx'
import './index.css'
import SkinDetails from './Pages/SkinDetails/SkinDetails.tsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children:
      [
        {
          path: "/",
          element: <HomeScreen/>
        },
        {
          path: "/skin/:id",
          element: <SkinDetails/>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
