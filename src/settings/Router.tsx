import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/post/:postId',
      element: <Post />,
    },
  ])

  return <RouterProvider router={router} />
}
