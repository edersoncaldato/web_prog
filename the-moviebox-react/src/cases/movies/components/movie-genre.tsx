import { use, useEffect, useState } from "react"


type MovieGenresProps = {
    movie: any,
    children: any
}
export function MovieGenres({
    movie,
    children
}: MovieGenresProps) {

    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        if (movie && movie.genres) {
            setGenres(movie.genres.split("|"));
        }
    }, [movie]);


    return (
        <div className="flex flex-wrap gap-2 my-2.5 text-sm items-center">
            {genres.map((genre: string, index: number) => (
                <span key={index} className="bg-white/20 rounded-full px-3 py-1.5">{genre}</span>
            ))}
            {children}
        </div>
    )



}