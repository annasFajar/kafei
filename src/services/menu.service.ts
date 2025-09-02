import { fetchApi } from "../utils/fetch"

export const getMenu = async (
    page:number,
    pageSize:number,
) => {
    const api = `${import.meta.env.VITE_URL_API}/menu?page=${page}&pageSize=${pageSize}`

    const result = await fetchApi(api,{'method':'GET'})
    return result
}