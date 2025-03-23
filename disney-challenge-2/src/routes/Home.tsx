import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchDisneyCharacters } from "../api";

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
        <div>
          <ul>
            {characters?.map((character) => {
              return (
                <li key={character.id}>
                  <a href={`/character/${character.id}`}>{character.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
