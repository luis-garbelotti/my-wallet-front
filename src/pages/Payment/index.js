import { Container, Header, Content } from './style';
import { Input, Button, Form } from '../../components/FormComponents';
import { Invalid } from '../../components/Invalid';
import { Bars } from 'react-loader-spinner';
import api from '../../services/api';
import CancelButton from '../../components/CancelButton';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Fade from 'react-reveal/Fade';

export default function Deposit() {

    const { auth } = useAuth();
    const [paymentData, setPaymentData] = useState({ description: '', value: '', type: 'payment', userId: auth._id });
    const [error, setError] = useState('');
    const [hidden, setHidden] = useState('hidden');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setPaymentData({ ...paymentData, [e.target.name]: e.target.value, date: dayjs().format('DD/MM') })
    }

    function handlePayment(e) {
        e.preventDefault();

        if (!paymentData.description || !paymentData.value) {
            setError('inputs')
            setHidden('');
            return;
        }

        setIsLoading(true);

        const promise = api.payment({ ...paymentData });
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
            <Fade>
                <Container>
                    <Header>Nova Saída</Header>
                    <Content>
                        <Form onSubmit={handlePayment}>
                            <Input
                                type='text'
                                name='value'
                                placeholder='Valor ( ex: 100,00 )'
                                value={paymentData.value}
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                            <Input
                                type='text'
                                name='description'
                                placeholder='Descrição'
                                value={paymentData.description}
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                            <Invalid className={`${hidden}`}>{
                                error === 'inputs' ? 'Preencha todos os campos corretamente.' :
                                    error === 'post' ? 'Tente novamente.' : null}
                            </Invalid>
                            <Button disabled={isLoading}> {isLoading ? <Bars color="#A328D6" height={50} width={35} /> : 'Salvar saída'}</Button>
                            <CancelButton disabled={isLoading} type='button' onClick={() => navigate('/historic')}>Cancelar</CancelButton>
                        </Form>
                    </Content>
                </Container>
            </Fade>
        </>
    )
}