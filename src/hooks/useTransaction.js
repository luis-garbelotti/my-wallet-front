import { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

export default function useTransaction() {
    return useContext(TransactionContext);
}