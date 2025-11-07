import { api } from "../../components/lib/axios";


export type MovieDTO = {
    title: string;
    year: number;
    image: string;
}

const _ENDPOINT = '/movies.json?key=43ebae60';

export const MovieService = {
    async list(): Promise<MovieDTO[]>{
       const result = await api.get(_ENDPOINT);
        return result.data;

    }
}