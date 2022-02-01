import { Container } from './style'
import logoutIcon from '../../assets/images/logoutIcon.png'

export default function Header() {
    return (
        <>
            <Container>
                Olá, Fulano
                <img src={logoutIcon} alt='logout' />
            </Container>
        </>
    )
}