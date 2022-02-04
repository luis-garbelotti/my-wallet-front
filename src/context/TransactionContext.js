import { createContext, useState } from "react";

const TransactionContext = createContext();

export function TransactionProvider({ children }) {

    const [thisTransaction, setThisTransaction] = useState(null);

    function updateTransaction(transaction) {
        setThisTransaction(transaction);
    }

    return (
        <TransactionContext.Provider value={{ thisTransaction, updateTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContext;