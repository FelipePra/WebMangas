import { useNavigate } from "react-router-dom";

export function MangaCard({ mangas }) {
  const navigate = useNavigate();

  return (
    <div 
    className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/mangas/` + mangas.id);
      }}
    >
            <h1 className="font-bold uppercase">{mangas.nombre}</h1>
            <p className="text-slate-400">{mangas.autor}</p>
            <p className="text-slate-400">{mangas.genero}</p>
            <p className="text-slate-400">{mangas.demografia}</p>
            <p className="text-slate-400">{mangas.tipo}</p>
            <p className="text-slate-400">{mangas.link}</p>
            <p className="text-slate-400">{mangas.puntuacion}</p>
            <p className="text-slate-400">{mangas.estado}</p>
            <p className="text-slate-400">{mangas.sinopsis}</p>

            <hr></hr>
        </div>
    )
}