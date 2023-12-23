import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Mainpage from "./components/Mainpage";
import SeperateDoctorPage from "./components/SeperateDoctorPage";
import Booking from "./components/Booking";


function App() {
 const router = createBrowserRouter([
   {path:"/" , element:<Mainpage></Mainpage>},
   {path:"/bookSlot" , element:<Booking></Booking>}
   
 ])
  return (
    <>
   <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
