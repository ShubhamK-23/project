import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store.js'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import { AuthLayout } from './components/index.js'
import Dashboard from './Pages/Dashboard.jsx'
import TicketsPage from './Pages/TicketsPage.jsx'
import { AddTicketPage } from './Pages/AddTicketPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: 
    [
      {
        path:"/",
        element: <Homepage/>
      },
      {
        path:"/login",
        element:
          (
            <AuthLayout authentication={false}>
                <Login/>
            </AuthLayout>
          )
      },
      {
        path:"/signup",
        element:
          (
            <AuthLayout authentication={false}>
              <Signup/>
            </AuthLayout>
          )
      },
      {
        path:"/dashboard",
        element:
          (
            <AuthLayout authentication>
              {" "}
              <Dashboard/>
            </AuthLayout>
          )
      },
      {
        path:"/tickets",
        element:
          (
            <AuthLayout authentication>
              {" "}
              <TicketsPage/>
            </AuthLayout>
          )
      },
      {
        path:"/addticket",
        element:
          (
            <AuthLayout authentication>
              {" "}
              <AddTicketPage/>
            </AuthLayout>
          )
      },



    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>  
  </React.StrictMode>,
)
