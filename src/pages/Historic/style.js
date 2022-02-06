import styled from "styled-components";

const Container = styled.div`
    
    display: flex;   
    flex-direction: column;
    align-items: center;

    padding-left: 25px;
    padding-right: 25px;

    position: relative;

`

const HeaderTransactions = styled.div`

    width: 85%;
    padding: 5px 8px;
    font-weight: 700;
    
    background-color: #fff;
    border-radius: 5px;
    
    z-index: 1;
    position: absolute;

`

const Content = styled.div`

    width: 100%;
    height: 446px;

    overflow: scroll;
    border-radius: 5px;
    padding: 25px 12px 45px 12px;

    background-color: #fff;

    position: relative;

    .no-transactions{

        width: 100%;
        height: 400px;

        display: flex;
        justify-content: center;
        align-items: center;

        text-align: center;        
        font-size: 20px;
    
        color: #868686;
        
    }
`

const Transactions = styled.div`

    width: 100%;
    padding: 15px 0px 0px 0px;
    
`

const TransactionsContent = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;

    font-size: 15px;

    .group {
        display: flex;
        align-items: center;
    }

    .left {
        width: 65%;
        align-items: flex-start;
    }
    
    .right {
        width: auto;
        display: flex;
        justify-content: space-between;
        text-align: right;
    }

    .date {
        color: #C6C6C6;
    }

    .description{
        margin-left: 10px;
        margin-right: 10px;
        color: #000000;
    }

    .value {
        margin-right: 10px;
        color: ${(props) => props.type === 'deposit' ? '#4aba1a' : '#c90606'}
    }

`

export {
    Content,
    Container,
    Transactions,
    TransactionsContent,
    HeaderTransactions
}