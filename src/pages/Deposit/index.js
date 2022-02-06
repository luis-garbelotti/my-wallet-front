import { Container, Header, Content } from './style';
import { Input, Button, Form } from '../../components/FormComponents';
import { Invalid } from '../../components/Invalid';
import { Bars } from 'react-loader-spinner';
import api from '../../services/api';
import CancelButton from '../../components/CancelButton';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

export default function Deposit() {

    const { auth } = useAuth();
    const [depositData, setDepositData] = useState({ description: '', value: '', type: 'deposit', userId: auth._id });
    const [error, setError] = useState('');
    const [hidden, setHidden] = useState('hidden');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setDepositData({ ...depositData, [e.target.name]: e.target.value, date: dayjs().format('DD/MM') })
    }

    function handleDeposit(e) {
        e.preventDefault();

        if (!depositData.description || !depositData.value) {
            setError('inputs')
            setHidden('');
            return;
        }

        setIsLoading(true);

        const promise = api.deposit({ ...depositData });
        promise.then(() => {
            setIsLoading(false);
            navigate('/historic');
        });
        promise.catch((error) => {
            setIsLoading(false);
            if (error.response.status === 422) {
                setError('inputs');
            } else {
                setError('post')
            }
            setHidden('');
        });

    }

    return (
        <>
            <Container>
                <Header>Nova Entrada</Header>
                <Content>
                    <Form onSubmit={handleDeposit}>
                        <Input
                            type='text'
                            name='value'
                            placeholder='Valor ( ex: 100,00 )'
                            value={depositData.value}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                        <Input
                            type='text'
                            name='description'
                            placeholder='Descrição'
                            value={depositData.description}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                        <Invalid className={`${hidden}`}>{
                            error === 'inputs' ? 'Preencha todos os campos corretamente.' :
                                error === 'post' ? 'Tente novamente.' : null}
                        </Invalid>
                        <Button disabled={isLoading}> {isLoading ? <Bars color="#A328D6" height={50} width={35} /> : 'Salvar entrada'}</Button>
                        <CancelButton disabled={isLoading} type='button' onClick={() => navigate('/historic')}>Cancelar</CancelButton>
                    </Form>
                </Content>
            </Container>
        </>
    )
}