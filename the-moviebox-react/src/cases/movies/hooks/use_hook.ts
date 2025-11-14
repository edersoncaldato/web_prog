import { useContext } from "react";
import MovieContext from "/Users/edersoncaldato/Documents/DAW-2025/DAW-2025-main/web_prog/the-moviebox-react/src/cases/movies/context/movie-context.tsx";

export function useMovies() {
    const context = useContext(MovieContext)
    return context;
}