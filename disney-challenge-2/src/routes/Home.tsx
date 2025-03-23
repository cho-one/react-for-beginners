import { useQuery } from "@tanstack/react-query";
import { fetchDisneyCharacters } from "../api";
import { styled } from "styled-components";

const Contianer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
  color: white;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 32px;
  padding: 40px;
  justify-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  border-radius: 12px;
  padding: 12px;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Name = styled.div`
  color: white;
  font-size: 16px;
  text-align: center;
`;

interface Character {
  id: number;
  name: string;
  imageUrl: string;
}

function Home() {
  const { isLoading, data: characters } = useQuery<Character[]>({
    queryKey: ["characters"],
    queryFn: fetchDisneyCharacters,
  });

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <Contianer>
          <Title>Disney Characters</Title>
          <Grid>
            {characters?.map((character) => (
              <Card key={character.id}>
                <Avatar src={character.imageUrl} />
                <Name>{character.name}</Name>
              </Card>
            ))}
          </Grid>
        </Contianer>
      )}
    </div>
  );
}

export default Home;
