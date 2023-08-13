import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/HomeScreen/Home.tsx'
import './index.css'
import SkinPesquisa from './Pages/SkinPesquisa/SkinPesquisa.tsx'
import SkinDetalhes from './Pages/SkinDetalhes/SkinDetalhes.tsx'
import OfertasScreen from './Pages/OfertasScreen/OfertasScreen.tsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children:
      [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/skin/:id",
          element: <SkinPesquisa/>
        },
        {
          path: "/skinDetalhes/:id",
          element: <SkinDetalhes/>
        },
        {
          path: "/ofertas",
          element: <OfertasScreen/>
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
