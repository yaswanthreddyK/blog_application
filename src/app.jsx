import React from 'react'
import  ReactDOM  from 'react-dom/client'
import Layout from './components/Layout/Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home'
import Spinner from './Spinner'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home/>}/>
    </Route>
))

function App() {
  return (
    <div>
      <RouterProvider router={router} fallbackElement={<Spinner />}/>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
</React.StrictMode>
)