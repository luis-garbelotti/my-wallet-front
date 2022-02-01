import Container from '../../components/FormComponents/Container';
import Form from '../../components/FormComponents/Form';
import Input from '../../components/FormComponents/Input';
import Button from '../../components/FormComponents/Button';
import StyledLink from '../../components/FormComponents/StyledLink';
import MyWallet from '../../assets/images/MyWallet.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        navigate('/historic')
    }

    return (
        <>
            <Container>
                <img src={MyWallet} alt="MyWallet" />

                <Form onSubmit={handleSubmit}>

                    <Input
                        type='email'
                        name='email'
                        placeholder='email'
                        value={formData.email}
                        onChange={handleChange}
                    />


                    <Input
                        type='password'
                        name='password'
                        placeholder='senha'
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <Button>Entrar</Button>

                    <StyledLink to='/register'>Primeira vez? Cadastre-se!</StyledLink>


                </Form>
            </Container>
        </>
    )
}