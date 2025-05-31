import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home.jsx'
import Layout from './components/Layout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import AboutPage from './pages/About.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />

        },
        {
          path: 'about',
          element: <AboutPage />,
        }
      ]


    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
