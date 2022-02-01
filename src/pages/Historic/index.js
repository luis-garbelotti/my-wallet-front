import Footer from "../../components/Footer";
import Header from "../../components/Header"
import { Content, Container } from './style';

export default function Historic() {
    return (
        <>
            <Header />
            <Container>
                <Content>

                    <p>Não há registros de
                        entrada ou saída</p>

                </Content>
            </Container>
            <Footer />
        </>
    )
}