import { Container } from "./style";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function DeleteButton({ transaction, loadTransactions }) {

    const { auth } = useAuth();

    function handleDeleteTransaction() {

        if (window.confirm(`Deseja excluir essa transação?
                            Descrição: ${transaction.description}.
                            Valor: R$${transaction.value}.`)
        ) {
            const promise = api.deleteTransaction(auth.token, transaction._id);
            promise.then(() => {
                loadTransactions();
            })
            promise.catch(() => {
                alert('Algo deu errado. Tente novamente.');
            })
        };
    }

    return (
        <>
            <Container onClick={handleDeleteTransaction} >
                X
            </Container>
        </>
    )
}