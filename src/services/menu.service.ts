import { type menuResponse } from "../types/order"
import { fetchApi } from "../utils/fetch"

const api = `${import.meta.env.VITE_URL_API}`

export const menuPagination = async (page:number, limit:number) => {
    const servicePage = `${api}/menu?page=${page}&pageSize=${limit}`
    const response = await fetchApi<menuResponse>(servicePage)
    return response
}

