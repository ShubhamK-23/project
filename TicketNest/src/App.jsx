import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth/auth'
import { login, logout } from './features/auth/authSlice'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

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

  if (loading) return null;

  return (
    <div className="min-h-screen bg-gray-400">
      <Header className="bg-gray-900 text-white py-4" />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App