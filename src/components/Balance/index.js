import { Container } from "./style"

export default function Balance({ balance }) {

    return (
        <>
            <Container balance={balance}>
                <span>SALDO</span>
                <p>{`R$ ${balance}`}</p>
            </Container>
        </>
    )
}