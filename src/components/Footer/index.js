import { Container, DepositButton, PaymentButton } from './style';
import minusCircle from '../../assets/images/minus-circle.png';
import plusCircle from '../../assets/images/plus-circle.png';
import { useNavigate } from 'react-router-dom';

export default function Footer() {

    const navigate = useNavigate();

    return (
        <>
            <Container>

                <DepositButton onClick={() => navigate('/deposit')}>
                    <img src={plusCircle} alt='plus' />
                    <p>Nova entrada</p>
                </DepositButton>

                <PaymentButton onClick={() => navigate('/payment')}>
                    <img src={minusCircle} alt='minus' />
                    <p>Nova saída</p>
                </PaymentButton>

            </Container>
        </>
    )
}