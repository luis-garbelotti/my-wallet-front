import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Historic, Deposit, Payment, UpdateDeposit, UpdatePayment } from './pages';
import { AuthProvider } from "./context/AuthContext";
import { TransactionProvider } from "./context/TransactionContext.js";

export default function App() {

    return (
        <>
            <AuthProvider>
                <TransactionProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/historic' element={<Historic />} />
                            <Route path='/deposit' element={<Deposit />} />
                            <Route path='/payment' element={<Payment />} />
                            <Route path='/update-deposit' element={<UpdateDeposit />} />
                            <Route path='/update-payment' element={<UpdatePayment />} />
                        </Routes>
                    </BrowserRouter>
                </TransactionProvider>
            </AuthProvider>
        </>
    )

}