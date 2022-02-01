import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Historic, Deposit, Payment } from './pages';

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/historic' element={<Historic />} />
                    <Route path='/deposit' element={<Deposit />} />
                    <Route path='/payment' element={<Payment />} />
                </Routes>
            </BrowserRouter>
        </>
    )

}