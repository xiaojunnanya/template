import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('@/views/Home'))
const Login = lazy(() => import('@/views/Login'))
const NotFound = lazy(() => import('@/components/NotFound'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/404',
    element: <NotFound></NotFound>,
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]
export default routes
