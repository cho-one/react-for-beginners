// To get a list of all the characters use this URL: https://disney_api.nomadcoders.workers.dev/characters
const BASE_URL = "https://disney_api.nomadcoders.workers.dev";

export async function fetchDisneyCharacters() {
  return fetch(`${BASE_URL}/characters`).then((response) => response.json());
}

export async function fetchDisneyCharacter(id: number) {
  return fetch(`${BASE_URL}/characters/${id}`).then((response) =>
    response.json()
  );
}
