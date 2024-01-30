import './index.css'

import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Pages/HomeScreen/Home.tsx'

import OfertasScreen from './Pages/OfertasScreen/OfertasScreen.tsx'

import { NavigationProvider } from './Context/navigationContext.jsx'

import { CartProvider } from './Context/cartContext.jsx'


const router = createBrowserRouter([

  {

    path: "/",

    element: <App />,

    children: [

      {

        path: "/",

        element: <Home />

      },

      {

        path: "/ofertas",

        element: <OfertasScreen />

      },

    ]

  }

]

)


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <CartProvider>
      <NavigationProvider>
        <RouterProvider router={router} />
      </NavigationProvider>
    </CartProvider>
  </React.StrictMode >,

)
