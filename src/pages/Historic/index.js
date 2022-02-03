import Footer from "../../components/Footer";
import Header from "../../components/Header"
import { Content, Container } from './style';
import useAuth from "../../hooks/useAuth";

export default function Historic() {

    const { auth } = useAuth();

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