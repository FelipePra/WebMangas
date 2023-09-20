import axios from 'axios'

const MangaApi = axios.create({
    baseURL: 'http://localhost:8000/mangas/api/v1/mangas/'
})

export const getAllMangas = () => MangaApi.get('/')

export const getManga = (id) => MangaApi.get(`/${id}/`)

export const createManga = (manga) => MangaApi.post('/',manga)

export const updateManga = (id, manga) => MangaApi.put(`/${id}/`, manga)

export const deleteManga = (id) => MangaApi.delete(`/${id}`)
