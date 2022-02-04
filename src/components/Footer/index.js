import { Container, FooterButton } from './style';
import minusCircle from '../../assets/images/minus-circle.png';
import plusCircle from '../../assets/images/plus-circle.png';
import { useNavigate } from 'react-router-dom';

export default function Footer() {

    const navigate = useNavigate();

    return (
        <>
            <Container>

                <FooterButton onClick={() => navigate('/deposit')}>
                    <img src={plusCircle} alt='plus' />
                    <p>Nova entrada</p>
                </FooterButton>

                <FooterButton onClick={() => navigate('/payment')}>
                    <img src={minusCircle} alt='minus' />
                    <p>Nova saída</p>
                </FooterButton>

            </Container>
        </>
    )
}