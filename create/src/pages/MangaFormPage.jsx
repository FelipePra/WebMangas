import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import {createManga, deleteManga, updateManga, getManga} from '../api/manga.api'
import {useNavigate, useParams} from 'react-router-dom'
import { toast } from 'react-hot-toast';


export function MangaFormPage(){

    const {register, handleSubmit, formState:{errors}, setValue} = useForm()
    const navigate = useNavigate();
    const params = useParams()


    const onSubmit = handleSubmit (async data=>{
        if (params.id){
        await updateManga(params.id, data)
        toast.success('Manga Actualizado',{
            position:"bottom-right",
            style:{
                background: "#101010",
                color: "#FFFFFF",
            }
        })
        } else{
        await createManga(data)
        toast.success('Manga Ingresado',{
            position:"bottom-right",
            style:{
                background: "#101010",
                color: "#FFFFFF",
            }
        })
        }
        navigate("/mangas")

    });
    useEffect(() =>{
        async function loadManga(){
            if (params.id){
                const res = await getManga(params.id)
                setValue('nombre', res.data.nombre)
                setValue('autor',res.data.autor)
                setValue('genero',res.data.genero)
                setValue('demografia',res.data.demografia)
                setValue('tipo',res.data.tipo)
                setValue('link',res.data.link)
                setValue('puntuacion',res.data.puntuacion)
                setValue('estado',res.data.estado)
                setValue('sinopsis',res.data.sinopsis)
            }
        }
        loadManga()
    },[])


    return(
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre"
                {...register("nombre",{required : true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"></input>
                {errors.nombre && <span>Campo Requerido</span>}
                <input type="text" placeholder="Autor"
                {...register("autor",{required : true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"></input>
                {errors.autor && <span>Campo Requerido</span>}
                <input type="text" placeholder="Genero"
                {...register("genero",{required : true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"></input>
                {errors.genero && <span>Campo Requerido</span>}
                <input type="text" placeholder="Demografia"
                {...register("demografia",{required : true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"></input>
                {errors.demografía && <span>Campo Requerido</span>}
                <input type="text" placeholder="Tipo"
                {...register("tipo",{required : true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"></input>
                {errors.tipo && <span>Campo Requerido</span>}
                <input type="text" placeholder="Link"
                {...register("link",{required : true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"></input>
                {errors.link && <span>Campo Requerido</span>}
                <input type="number" placeholder="Puntuacion"
                {...register("puntuacion",{required : true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"></input>
                {errors.puntuación && <span>Campo Requerido</span>}
                <input type="text" placeholder="Estado"
                {...register("estado",{required : true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"></input>
                {errors.estado && <span>Campo Requerido</span>} <br/>
                <textarea rows="3" placeholder="Sinopsis"
                {...register("sinopsis",{required : true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"></textarea>
                {errors.sinopsis && <span>Campo Requerido</span>} <br/>
                <button className='bg-indigo-500 p-3 rounded-lg block w-full'>Guardar Manga</button>

            </form>

            {
                params.id && 
                <div className='flex justify-end'>
                    <button
                className="bg-red-500 p-3 rounded-lg block w-48 mt-3"
                onClick={async()=>{
                    const accepted = window.confirm('Estas seguro?');
                    if (accepted) {
                        await deleteManga(params.id);
                        toast.success('Manga Eliminado',{
                            position:"bottom-right",
                            style:{
                                background: "#101010",
                                color: "#FFFFFF",
                            }
                        })
                        navigate('/mangas')
                    }
                }}>Delete</button>
                </div>
            }
        </div>
    )
}