import { Container } from './style';
import logoutIcon from '../../assets/images/logoutIcon.png';
import useAuth from '../../hooks/useAuth';

export default function Header() {

    const { auth } = useAuth();

    return (
        <>
            <Container>
                Olá, {auth.name}
                <img src={logoutIcon} alt='logout' />
            </Container>
        </>
    )
}