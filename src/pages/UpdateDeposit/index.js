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

export default function UpdateDeposit() {

    const { auth } = useAuth();
    const { thisTransaction } = useTransaction();
    const [updateDepositData, setUpdateDepositData] = useState({ description: '', value: '' });
    const [error, setError] = useState('');
    const [hidden, setHidden] = useState('hidden');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setUpdateDepositData({ ...updateDepositData, [e.target.name]: e.target.value })
    }

    function handleUpdateDeposit(e) {
        e.preventDefault();

        if (!updateDepositData.description || !updateDepositData.value) {
            setError('inputs')
            setHidden('');
            return;
        }

        setIsLoading(true);

        const updatedTransaction = {
            ...thisTransaction,
            description: updateDepositData.description,
            value: updateDepositData.value
        };

        const promise = api.updateThisDeposit(auth.token, updatedTransaction._id, updatedTransaction);
        promise.then(() => {
            setIsLoading(false);
            navigate('/historic')
        });
        promise.catch(() => {
            setHidden('');
            setIsLoading(false);
            setError('post');
        })

    }

    return (
        <>
            <Container>
                <Header>Editar Entrada</Header>
                <Content>
                    <Form onSubmit={handleUpdateDeposit}>
                        <Input
                            type='text'
                            name='value'
                            placeholder='Valor ( ex: 100,00 )'
                            value={updateDepositData.value}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                        <Input
                            type='text'
                            name='description'
                            placeholder='Descrição'
                            value={updateDepositData.description}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                        <Invalid className={`${hidden}`}>{
                            error === 'inputs' ? 'Preencha todos os campos corretamente.' :
                                error === 'post' ? 'Tente novamente.' : null}
                        </Invalid>
                        <Button disabled={isLoading}> {isLoading ? <Bars color="#A328D6" height={50} width={35} /> : 'Atualizar entrada'}</Button>
                        <CancelButton disabled={isLoading} type='button' onClick={() => navigate('/historic')}>Cancelar</CancelButton>
                    </Form>
                </Content>
            </Container>
        </>
    )
}