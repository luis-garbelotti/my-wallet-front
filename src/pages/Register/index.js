import { Button, Container, Form, Input, StyledLink } from '../../components/FormComponents';
import { Invalid } from '../../components/Invalid';
import MyWallet from '../../assets/images/MyWallet.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import api from '../../services/api';
import Fade from 'react-reveal/Fade';

export default function Register() {

    const [formData, setFormData] = useState({ email: '', password: '', name: '' });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hiddenMessage, setHiddenMessage] = useState('hidden');
    const [error, setError] = useState()
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!formData.email || !formData.password || !formData.name) {
            setHiddenMessage('');
            setError('inputs');
            return;
        }

        if (formData.password !== confirmPassword) {
            setHiddenMessage('');
            setError('password');
            return;
        }

        setIsLoading(true);

        const promise = api.register({ ...formData });
        promise.then(() => {
            setIsLoading(false);
            navigate('/')
        });
        promise.catch((error) => {
            setHiddenMessage('');
            if (error.response.status === 409) {
                setError('email');
            } else {
                setError('post')
            }
            setIsLoading(false);
        })
    }

    return (
        <>
            <Fade bottom>
                <Container>

                    <img src={MyWallet} alt="MyWallet" />

                    <Form onSubmit={handleSubmit}>
                        <Input
                            type='text'
                            name='name'
                            placeholder='Nome'
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                        <Input
                            type='email'
                            name='email'
                            placeholder='E-mail'
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                        <Input
                            type='password'
                            name='password'
                            placeholder='Senha'
                            value={formData.password}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                        <Input
                            type='password'
                            name='password'
                            placeholder='Confirme a senha'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            disabled={isLoading}
                        />
                        <Invalid className={`${hiddenMessage}`}>{
                            error === 'password' ? 'Confirme sua senha.' :
                                error === 'inputs' ? 'Preencha todos os campos corretamente.' :
                                    error === 'post' ? 'Tente novamente.' :
                                        error === 'email' ? 'Email já cadastrado.' : null
                        } </Invalid>

                        <Button disabled={isLoading}> {isLoading ? <Bars color="#A328D6" height={50} width={35} /> : 'Cadastrar'}</Button>

                        <StyledLink to='/'>Já tem uma conta? Entre agora!</StyledLink>
                    </Form>

                </Container>
            </Fade>
        </>
    )
}