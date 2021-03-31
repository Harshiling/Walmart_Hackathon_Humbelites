import Card from "./Card";
import styled from "styled-components";

const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Cards = ({data}) => {
    return (
        <CardsWrapper>
            {
                data.map( datum => {
                    return <Card price={datum.price}
                          productName={datum.productName}
                          audio={datum.audio}
                          manufacturer={datum.manufacturer}
                          os={datum.os} processor={datum.processor}/>
                })
            }
        </CardsWrapper>
    )
}

export default Cards;