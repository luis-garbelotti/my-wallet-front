import { Container } from "./style";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import Swal from "sweetalert2";

export default function DeleteButton({ transaction, loadTransactions }) {

    const { auth } = useAuth();

    function handleDeleteTransaction() {

        Swal.fire({
            title: `Deseja excluir essa transação?`,
            text: `Descrição: ${transaction.description}.
                    Valor: R$${transaction.value}`,
            icon: 'warning',
            iconColor: '#c90606',
            width: 300,
            showCancelButton: true,
            confirmButtonColor: '#400059',
            cancelButtonColor: 'rgba(64, 0, 89, 0.5)',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Deletar transação',
            confirmButtonTextSize: 80
        }).then((result) => {
            if (result.isConfirmed) {
                const promise = api.deleteTransaction(auth.token, transaction._id);
                promise.then(() => {
                    Swal.fire({
                        width: 250,
                        confirmButtonColor: 'rgba(64, 0, 89)',
                        text: 'Deletado com sucesso!',
                        icon: 'success'
                    })
                    loadTransactions();
                })
                promise.catch(() => {
                    Swal.fire({
                        width: 250,
                        confirmButtonColor: 'rgba(64, 0, 89)',
                        text: 'Algo deu errado. Tente novamente!',
                        icon: 'error'
                    })
                })

            }
        })
    }

    return (
        <>
            <Container onClick={handleDeleteTransaction} >
                X
            </Container>
        </>
    )
}