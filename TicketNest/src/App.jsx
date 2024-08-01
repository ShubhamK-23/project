/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth/auth'
import { login, logout } from './features/auth/authSlice'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { LoadingProvider } from "./Context/LoadingContext"
import Skeleton from './components/SkeletonShimmer/Skeleton'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userdata) => {
        if(userdata) {
          dispatch(login({userdata}))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <div className="min-h-screen bg-gray-50">
    <Skeleton className="flex-1 p-6 ml-08" /> </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 ml-08">

          <LoadingProvider>
            <Outlet />
          </LoadingProvider>
        </main>       
      </div>
    </div>
  )
}

export default App