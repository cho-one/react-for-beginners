import { Link } from "react-router-dom";
import styled from "styled-components";

const Contianer = styled.div`
padding: 0px 20px;
`;

const Header = styled.header`
   height: 15vh;
   display: flex;
   justify-content: center;
   align-items: center;
 `;

const CoinsList = styled.ul``;

const Coin = styled.li`
   background-color: white;
   color: ${(props) => props.theme.bgColor};
   border-radius: 15px;
   margin-bottom: 10px;
   a {
     padding: 20px;
     transition: color 0.2s ease-in;
     display: block;
   }
   &:hover {
     a {
       color: ${(props) => props.theme.accentColor};
     }
   }
 `;

const Title = styled.h1`
color: ${(props) => props.theme.accentColor};
font-size: 48px;
`

const coins = [
  {
    id: "bitcoin",
    name: "Bitcoin",
  },
  {
    id: "ethereum",
    name: "Ethereum",
  },
  {
    id: "ripple",
    name: "Ripple",
  },
];
 

function Coins() {
  return (
    <Contianer>
      <Header>
        <Title>Coins</Title>
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`${coin.id}`}>{coin.name} &rarr;</Link>
          </Coin>) )}
        </CoinsList>
      </Header>
    </Contianer>
  );
}

export default Coins;