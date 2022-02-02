import { Button, Container, Form, Input, StyledLink } from '../../components/FormComponents';
import MyWallet from '../../assets/images/MyWallet.png';
import { Bars } from 'react-loader-spinner';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true);
    }

    return (
        <>
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
                    <Button disabled={isLoading}> {isLoading ? <Bars color="#A328D6" height={50} width={35} /> : 'Entrar'}</Button>

                    <StyledLink to='/register'>Primeira vez? Cadastre-se!</StyledLink>
                </Form>
            </Container>
        </>
    )
}