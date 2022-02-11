import { Container } from './style';
import logoutIcon from '../../assets/images/logoutIcon.png';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        setAuth(null)
        navigate('/');
    }

    return (
        <>
            <Container>
                <p>Olá, {auth.name}</p>
                <img src={logoutIcon} alt='logout' onClick={logout} />
            </Container>
        </>
    )
}