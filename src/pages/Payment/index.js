import { Container, Header, Content } from './style';
import Input from '../../components/FormComponents/Input';
import Button from '../../components/FormComponents/Button';
import CancelButton from '../../components/CancelButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Deposit() {

    const [paymentData, setPaymentData] = useState({ description: '', value: '' });
    const navigate = useNavigate();

    function handleChange(e) {
        setPaymentData({ ...paymentData, [e.target.name]: e.target.value })
    }

    function handleDeposit() {
        navigate('/historic');
        console.log(paymentData)
    }

    function cancel() {
        navigate('/historic')
    }

    return (
        <>
            <Container>
                <Header>Nova Saída</Header>
                <Content>
                    <Input
                        type='text'
                        name='value'
                        placeholder='Valor'
                        value={paymentData.value}
                        onChange={handleChange}
                    />
                    <Input
                        type='text'
                        name='description'
                        placeholder='Descrição'
                        value={paymentData.description}
                        onChange={handleChange}
                    />
                    <Button onClick={handleDeposit}>Salvar saída</Button>
                    <CancelButton onClick={cancel}>Cancelar</CancelButton>

                </Content>
            </Container>
        </>
    )
}