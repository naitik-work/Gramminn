import React from 'react'
import { RouterProvider } from 'react-router'
import {router} from './app.routes'
import './features/shared/global.scss'
import { PostContextProvider } from './features/posts/post.context'

import { AuthProvider } from './features/auth/auth.context'
const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
        <RouterProvider router={router} />
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App
