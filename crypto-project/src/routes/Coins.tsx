import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Contianer = styled.div`
padding: 0px 20px;
`;

const Header = styled.header`
   height: 15vh;
   width: 100%;
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
   width: 100%;
   a {
    display: flex;
    align-items: center;
     padding: 20px;
     transition: color 0.2s ease-in;
     width: 100%;
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

const Loader = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 24px;
`;

const Icon = styled.img`
  width: 30px;  
  height: 30px;
  margin-right: 10px;
  `;

interface CoinInterface{
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    ( async () => { 
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      console.log(json);
      setCoins(json.slice(0, 100));
      setLoading(false);
    } )()
  }, []);

  return (
    <Contianer>
      <Header>
        <Title>Coins</Title>
        </Header>
        {loading ? <Loader>Loading...</Loader> : 
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`${coin.id}`}>
              <Icon src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`} alt={coin.name}></Icon>
              {coin.name} &rarr;
              </Link>
          </Coin>) )}
        </CoinsList>
        }
    </Contianer>
  );
}

export default Coins;