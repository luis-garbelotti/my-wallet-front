import Container from '../../components/FormComponents/Container';
import Form from '../../components/FormComponents/Form';
import Input from '../../components/FormComponents/Input';
import Button from '../../components/FormComponents/Button';
import StyledLink from '../../components/FormComponents/StyledLink';
import MyWallet from '../../assets/images/MyWallet.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [formData, setFormData] = useState({ email: '', password: '', name: '' });
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formData.password !== confirmPassword) {
            alert('Confirmação de senha inválida!');
            return;
        }

        navigate('/')
    }

    return (
        <>
            <Container>
                <img src={MyWallet} alt="MyWallet" />

                <Form onSubmit={handleSubmit}>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Nome'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        type='email'
                        name='email'
                        placeholder='E-mail'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        type='password'
                        name='password'
                        placeholder='Senha'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Input
                        type='password'
                        name='password'
                        placeholder='Confirme a senha'
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    <Button>Cadastrar</Button>

                    <StyledLink to='/'>Já tem uma conta? Entre agora!</StyledLink>
                </Form>
            </Container>
        </>
    )
}