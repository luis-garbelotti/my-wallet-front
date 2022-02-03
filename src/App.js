import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Historic, Deposit, Payment } from './pages';
import { AuthProvider } from "./context/AuthContext";

export default function App() {

    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/historic' element={<Historic />} />
                        <Route path='/deposit' element={<Deposit />} />
                        <Route path='/payment' element={<Payment />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    )

}