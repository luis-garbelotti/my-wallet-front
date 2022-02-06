import { Container, Header, Content } from './style';
import { Input, Button, Form } from '../../components/FormComponents';
import { Invalid } from '../../components/Invalid';
import { Bars } from 'react-loader-spinner';
import api from '../../services/api';
import CancelButton from '../../components/CancelButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import useTransaction from '../../hooks/useTransaction';

export default function UpdatePayment() {

    const { auth } = useAuth();
    const { thisTransaction } = useTransaction();
    const [updatePaymentData, setUpdatePaymentData] = useState({ description: '', value: '' });
    const [error, setError] = useState('');
    const [hidden, setHidden] = useState('hidden');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setUpdatePaymentData({ ...updatePaymentData, [e.target.name]: e.target.value })
    }

    function handleDeposit(e) {
        e.preventDefault();

        if (!updatePaymentData.description || !updatePaymentData.value) {
            setError('inputs')
            setHidden('');
            return;
        }

        setIsLoading(true);

        const updatedTransaction = {
            ...thisTransaction,
            description: updatePaymentData.description,
            value: updatePaymentData.value
        };

        const promise = api.updateThisPayment(auth.token, updatedTransaction._id, updatedTransaction);
        promise.then(() => {
            setIsLoading(false);
            navigate('/historic')
        });
        promise.catch((error) => {
            setIsLoading(false);
            if (error.response.status === 422) {
                setError('inputs');
            } else {
                setError('post')
            }
            setHidden('');
        })

    }

    return (
        <>
            <Container>
                <Header>Editar saída</Header>
                <Content>
                    <Form onSubmit={handleDeposit}>
                        <Input
                            type='text'
                            name='value'
                            placeholder='Valor ( ex: 100,00 )'
                            value={updatePaymentData.value}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                        <Input
                            type='text'
                            name='description'
                            placeholder='Descrição'
                            value={updatePaymentData.description}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                        <Invalid className={`${hidden}`}>{
                            error === 'inputs' ? 'Preencha todos os campos corretamente.' :
                                error === 'post' ? 'Tente novamente.' : null}
                        </Invalid>
                        <Button disabled={isLoading}> {isLoading ? <Bars color="#A328D6" height={50} width={35} /> : 'Atualizar saída'}</Button>
                        <CancelButton disabled={isLoading} type='button' onClick={() => navigate('/historic')}>Cancelar</CancelButton>
                    </Form>
                </Content>
            </Container>
        </>
    )
}