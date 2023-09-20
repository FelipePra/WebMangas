import {useEffect, useState} from "react";
import {getAllMangas} from '../api/manga.api'
import {MangaCard} from './MangaCard'

export function MangaList(){

    const [mangas, setMangas] = useState([])
    useEffect(()=>{
        async function loadManga(){
            const res = await getAllMangas()
            setMangas(res.data);
        }
        loadManga()
    },[]);

    return (
    <div className="grid grid-cols-3 gap-3">
        {mangas.map(mangas =>(
            <MangaCard key={mangas.id} mangas ={mangas} /> 
        ))}
    </div>
    )
}