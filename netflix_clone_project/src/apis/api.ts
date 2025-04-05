const API_KEY = "d0d42f8386c85852576575b36df7b8e4";

const BASE_PATH = "https://api.themoviedb.org/3";
export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
