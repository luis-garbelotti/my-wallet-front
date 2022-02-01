import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Deposit from './pages/Deposit';
import Payment from './pages/Payment';

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/deposit' element={<Deposit />} />
                    <Route path='/payment' element={<Payment />} />
                </Routes>
            </BrowserRouter>
        </>
    )

}