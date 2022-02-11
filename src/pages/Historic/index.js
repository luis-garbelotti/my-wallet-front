import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Loading from "../../components/Loading";
import DeleteButton from "../../components/DeleteButton";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Content, Container, Transactions, TransactionsContent, HeaderTransactions } from './style';
import useAuth from "../../hooks/useAuth";
import useTransaction from '../../hooks/useTransaction';
import api from '../../services/api';
import Fade from 'react-reveal/Fade';

export default function Historic() {

    const { auth } = useAuth()
    const { updateTransaction } = useTransaction();
    const [haveTransactions, setHaveTransactions] = useState(false);
    const [transactions, setTransactions] = useState(false);
    const [balance, setBalance] = useState();
    const navigate = useNavigate();
    let sum = 0;

    function loadTransactions() {
        const promise = api.getTransactions(auth.token);

        promise.then((response) => {
            const apiTransactions = response.data;

            if (apiTransactions.length === 0) {
                setTransactions([])
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

    function handleChangeContent(transaction, type) {
        updateTransaction(transaction);
        if (type === 'deposit') {
            navigate('/update-deposit');
        } else {
            navigate('/update-payment');
        }
    }

    if (!transactions) {
        return <Loading />
    }

    return (
        <>
            <Fade >
                <Header />
                <Container>
                    {haveTransactions ? <HeaderTransactions >Suas transações:</HeaderTransactions> : null}

                    <Content>
                        {haveTransactions ?
                            <div>
                                {transactions.map(transaction => (
                                    <Transactions key={transaction._id}>
                                        <TransactionsContent type={transaction.type} >
                                            <div className="group left" onClick={() => handleChangeContent(transaction, transaction.type)}>
                                                <div className="date">{transaction.date}</div>
                                                <div className="description" >{transaction.description}</div>
                                            </div>
                                            <div className="group right">
                                                <div className="value">{`R$ ${transaction.value}`}</div>
                                                <DeleteButton transaction={transaction} loadTransactions={loadTransactions} />
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
            </Fade>
        </>
    )
}