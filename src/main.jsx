import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import HomePage from './pages/Home.jsx'
import Layout from './components/Layout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import AboutPage from './pages/About.jsx'
import ProductsPage from './pages/Products.jsx'
import ProductPage from './pages/Product.jsx'
import { Store } from './redux/store.js'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import LoginPage from './pages/LoginPage.jsx'

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
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'product/:productId',
          element: <ProductPage />,
        },
        // protected routes
        {
          element: <ProtectedRoute />,
          children: [
            { path: '/profile', element: <ProfilePage /> }
          ]

        },
        {
          element: <ProtectedRoute />,
          children: [
            { path: '/products', element: <ProductsPage /> }
          ]

        }
      ]


    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
