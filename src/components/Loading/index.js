import { Bars } from 'react-loader-spinner';
import { Container } from './style';

export default function Loading() {
    return (
        <>
            <Container>
                <Bars color="#A328D6" height={80} width={80} />
            </Container>
        </>
    )
}