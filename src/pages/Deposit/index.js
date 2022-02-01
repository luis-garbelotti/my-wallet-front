import { Container, Header, Content } from './style';
import Input from '../../components/FormComponents/Input';
import Button from '../../components/FormComponents/Button';
import CancelButton from '../../components/CancelButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Deposit() {

    const [depositData, setDepositData] = useState({ description: '', value: '' });
    const navigate = useNavigate();

    function handleChange(e) {
        setDepositData({ ...depositData, [e.target.name]: e.target.value })
    }

    function handleDeposit() {
        navigate('/historic');
        console.log(depositData)
    }

    function cancel() {
        navigate('/historic');
    }

    return (
        <>
            <Container>
                <Header>Nova Entrada</Header>
                <Content>

                    <Input
                        type='text'
                        name='value'
                        placeholder='Valor'
                        value={depositData.value}
                        onChange={handleChange}
                    />
                    <Input
                        type='text'
                        name='description'
                        placeholder='Descrição'
                        value={depositData.description}
                        onChange={handleChange}
                    />
                    <Button onClick={handleDeposit}>Salvar entrada</Button>
                    <CancelButton onClick={cancel}>Cancelar</CancelButton>

                </Content>
            </Container>
        </>
    )
}