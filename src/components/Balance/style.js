import styled from "styled-components";

const Container = styled.div`

    width: 98%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 13px;

    background-color: #fff;
    border-radius: 5px;
    margin: -35px 0 0px 0;
    z-index: 1;
    
    font-size: 17px;
    
    span {
        font-weight: 700;
    }

    p {
        font-weight: 400;
        color: ${({ balance }) => balance >= 0 ? 'green' : 'red'};
    }

`

export {
    Container
}