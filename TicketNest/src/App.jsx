import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth/auth'
import { login, logout } from './features/auth/authSlice'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setoLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
      authService.getCurrentUser()
        .then((userdata) => {
          if(userdata)
          {
            console.log(userdata)
            //dispatching the action to store user data in redux state
            dispatch(login({userdata}))
          }else{
            dispatch(logout())
          }
    }).finally(()=>setoLoading(false))
  
},[])

return !loading ? ( 

  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      
        <main>
        <Header className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4"></Header>
         <Outlet />
        </main>
        
    </div>
  </div> ) : null
}

export default App
