import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { fetchDisneyCharacter } from "../api";

const Contianer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
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
  color: white;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  font-family: "Dancing Script", cursive;
  font-size: 28px;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const FilmContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  padding: 0 20px;
`;

const FilmItem = styled.li`
  padding: 8px 16px;
  background-color: white;
  color: black;
  font-style: italic;
  border-radius: 12px;
  font-size: 16px;
  white-space: nowrap;
  text-align: center;
`;

interface CharacterParams {
  id: number;
  imageUrl: string;
}
interface CharacterDetail {
  films: string[];
  name: string;
  sourceUrl: string;
}

function Detail() {
  const { id } = useParams();
  const location = useLocation();
  const state = location.state as CharacterParams;

  const { isLoading, data } = useQuery<CharacterDetail>({
    queryKey: ["character", id],
    queryFn: () => fetchDisneyCharacter(Number(id!)),
    enabled: !!id,
  });

  return (
    <Contianer>
      <Header>
        <Title>Detail</Title>
      </Header>
      {isLoading ? (
        "Loading..."
      ) : (
        <Card>
          <Avatar src={state.imageUrl} />
          <Name>{data?.name ? data.name : "name"}</Name>
          <FilmContainer>
            {data?.films.map((film, index) => (
              <FilmItem key={index}>{film}</FilmItem>
            ))}
          </FilmContainer>
        </Card>
      )}
    </Contianer>
  );
}

export default Detail;
