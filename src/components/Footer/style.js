import styled from "styled-components";

const Container = styled.div`

    display: flex;
    justify-content: space-between;
    padding: 12px 25px 0 25px;

    p {
        width: 70px;

        position: absolute;
        bottom: 9px;
        left: 11px;
        
        font-size: 17px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;

        color: #fff;

    }

    img {

        width: 21px;

        position: absolute;
        top: 9px;
        left: 11px;
    }

`

const PaymentButton = styled.button`

    width: 155px;
    height: 114px;

    background-color: #A328D6;

    border-radius: 5px;

    position: relative;

`

const DepositButton = styled.button`

    width: 155px;
    height: 114px;

    background-color: #A328D6;

    border-radius: 5px;

    position: relative;

`

export {
    Container,
    PaymentButton,
    DepositButton
}