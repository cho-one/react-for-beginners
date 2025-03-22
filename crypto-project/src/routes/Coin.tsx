import { useParams, useLocation } from "react-router-dom";
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

interface CoinParams {
  name: string;
}

function Coin() {
  const { coinId } = useParams();
  const location = useLocation();
  const state = location.state as CoinParams;
  const [loading, setLoading] = useState(true);
  console.log(coinId);

  return (
    <Contianer>
      <Header>
        <Title>{state?.name || "Invalid"}</Title>
        </Header>
        {loading ? <Loader>Loading...</Loader> :  null}
    </Contianer>
  );
}

export default Coin;