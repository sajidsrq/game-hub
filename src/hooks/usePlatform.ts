import useData from "./useData";
import { Platform } from "./useGames";

interface Plaform{
    id:number
    name:string;
    slug:string;
}

const usePlatForms=()=>useData<Platform>("/platforms/lists/parents");

export default usePlatForms;