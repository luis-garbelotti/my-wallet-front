import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import { useEffect, useState } from 'react';
import { Content, Container, Transactions, TransactionsContent, HeaderTransactions } from './style';
import useAuth from "../../hooks/useAuth";
import api from '../../services/api'

export default function Historic() {

    const { auth } = useAuth();
    const [haveTransactions, setHaveTransactions] = useState(false);
    const [transactions, setTransactions] = useState(false);
    const [balance, setBalance] = useState();
    let sum = 0;

    function loadTransactions() {
        const promise = api.getTransactions(auth.token);

        promise.then((response) => {
            const apiTransactions = response.data;

            if (apiTransactions.length === 0) {
                return;
            }

            setTransactions(apiTransactions);
            setHaveTransactions(true);

            apiTransactions.map(apiTransaction => {
                if (apiTransaction.type === 'deposit') {
                    sum += parseFloat(apiTransaction.value.replace(',', '.'));
                } else {
                    sum -= parseFloat(apiTransaction.value.replace(',', '.'));
                }
            })
            setBalance(parseFloat(sum).toFixed(2));
        });
        promise.catch(() => alert('Tente novamente.'));
    }

    useEffect(loadTransactions, []);

    return (
        <>
            <Header />

            <Container>
                {haveTransactions ? <HeaderTransactions >Suas transações:</HeaderTransactions> : null}

                <Content>
                    {haveTransactions ?
                        <div>
                            {transactions.map(transaction => (
                                <Transactions key={transaction._id}>
                                    <TransactionsContent type={transaction.type} >
                                        <div className="group left">
                                            <div className="date">{transaction.date}</div>
                                            <div className="description">{transaction.description}</div>
                                        </div>
                                        <div className="group rigth">
                                            <div className="value">{`R$ ${transaction.value}`}</div>
                                            <button className="delete">X</button>
                                        </div>
                                    </TransactionsContent>
                                </Transactions>
                            ))}
                        </div>
                        :
                        <div className={`no-transactions`}>
                            Não há registros de<br />
                            entrada ou saída
                        </div>
                    }
                </Content>

                {haveTransactions ? <Balance balance={balance}></Balance> : null}

            </Container>
            <Footer />
        </>
    )
}