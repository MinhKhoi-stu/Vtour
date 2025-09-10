import './App.css'
import Login from './pages/login/Login'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Register from './pages/register/Register'
import {MainLayout} from './layouts'
import Home from './pages/home/Home'
import Tours from './pages/tours/Tours'
import Tickets from './pages/tickets/Tickets'
import Sales from './pages/sales/Sales'
import Tips from './pages/tips/Tips'
import Cart from './pages/cart/Cart'
import News from './pages/news/News'
import StationsList from './pages/stations/StationsList'
import StationBooking from './pages/stations/StationBooking'
import TicketCancellation from './pages/cancellation/TicketCancellation'
import EnableBooking from './pages/booking/EnableBooking'


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/home" element={<MainLayout><Home/></MainLayout>} />
        <Route path="/tours" element={<MainLayout><Tours/></MainLayout>} />
        <Route path="/tickets" element={<MainLayout><Tickets/></MainLayout>} />
        <Route path="/stations" element={<MainLayout><StationsList/></MainLayout>} />
        <Route path="/stations/:stationId" element={<MainLayout><StationBooking/></MainLayout>} />
        <Route path="/sales" element={<MainLayout><Sales/></MainLayout>} />
        <Route path="/tips" element={<MainLayout><Tips/></MainLayout>} />
        <Route path="/cart" element={<MainLayout><Cart/></MainLayout>} />
        <Route path="/news" element={<MainLayout><News/></MainLayout>} />
        <Route path="/cancellation" element={<MainLayout><TicketCancellation/></MainLayout>} />
        <Route path="/booking" element={<MainLayout><EnableBooking/></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
