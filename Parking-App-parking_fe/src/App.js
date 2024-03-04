import { useRoutes } from 'react-router-dom'
import Login from './loginpage/login'
import Parkingmap from './ParkingMap/parkingmap'
import { Protected } from './HOC/Protected'
import { ToastContainer } from 'react-toastify'
function App() {

  const routes = useRoutes ([
   {
     path:'/',element:<Login/>
   },
   {
    path:'/parkingMap',element: <Protected compo={<Parkingmap/>}/>   
  }
  ])
  return (
    <>
    {routes}
    <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
    </>
  )
}

export default App;
