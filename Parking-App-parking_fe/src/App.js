import { useRoutes } from 'react-router-dom'
import Login from './loginpage/login'
import Parkingmap from './ParkingMap/parkingmap'
import { Protected } from './HOC/Protected'
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
    
    </>
  )
}

export default App;
