import react from 'react'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import AddUser from './component/AddUser'
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Dashboard from './component/Dashboard';
import EditUser from './component/EditUser';
function Layout() {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
        element : <Layout/>,
        children: [
            {path: "/", element: < Dashboard />},
            {path:"/add" , element:<AddUser/>},
            {path:"/edit/:id" , element:<EditUser/>},

          
        ],
  }
])

function App() {

  return (
   <RouterProvider router={router}/>
  )
}

export default App
