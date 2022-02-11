import { Button, Container, Form, Input, StyledLink } from '../../components/FormComponents';
import { Invalid } from '../../components/Invalid';
import api from '../../services/api';
import MyWallet from '../../assets/images/MyWallet.png';
import { Bars } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Fade from 'react-reveal/Fade';

export default function Login() {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [hidden, setHidden] = useState('hidden');
    const { auth, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth) {
            navigate('/historic')
        }
    }, []);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setError('inputs')
            setHidden('');
            return;
        }

        setIsLoading(true);

        const promise = api.login({ ...formData });
        promise.then((response) => {
            login(response.data);
            setIsLoading(false);
            navigate('/historic');
        });
        promise.catch(() => {
            setHidden('');
            setIsLoading(false);
            setError('post');
        });
    }

    return (
        <>
            <Fade top >
                <Container>

                    <img src={MyWallet} alt="MyWallet" />

                    <Form onSubmit={handleSubmit}>
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
                        <Invalid className={`${hidden}`}>{
                            error === 'inputs' ? 'Preencha todos os campos corretamente.' :
                                error === 'post' ? 'Email ou senha inválidos.' : null}
                        </Invalid>
                        <Button disabled={isLoading}> {isLoading ? <Bars color="#A328D6" height={50} width={35} /> : 'Entrar'}</Button>
                        <StyledLink to='/register'>Primeira vez? Cadastre-se!</StyledLink>
                    </Form>
                </Container>
            </Fade>
        </>
    )
}