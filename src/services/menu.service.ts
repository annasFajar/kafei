import type { pagination } from "../types/menu.pagination"
import {  type menuResponse } from "../types/order"
import { cleanParams } from "../utils/cleanParam"
import { fetchApi } from "../utils/fetch"

const api = `${import.meta.env.VITE_URL_API}`

// export const menuPagination = async ({page,category,limit,search}:pagination):Promise<menuResponse> => {
    

//     const servicePage = `${api}/menu?`
//     const param = new URLSearchParams(servicePage)
    
//     const response = await fetchApi<menuResponse>(servicePage)
//     // const query = new URLSearchParams({})
//     return response
// }

export const fetchMenus = async (page?:number, params?:pagination):Promise<menuResponse> => {
        const safeParams = params?? {}
        console.log(`param: ${params?.category}, ${params?.search}`)
        const clean = await cleanParams(safeParams)
        console.log(clean)
        const query = new URLSearchParams({
            page: String(page?? 1),
            pageSize: String(8),
            ...clean
        })
        console.log(`query: ${query.toString()}`)
        // if () {
            
        // }
        const url = `${api}/menu?${query.toString()}`
        console.log(`url: ${url}`)
        const result = await fetchApi<menuResponse>(url)
        return result
    }


//     export const filters = async (page:number, limit:number, category:string):Promise<menuResponse> => {
//     const response = await fetchApi<menuResponse>(`${api}/menu?page=${page}&pageSize=${limit}&category=${category}`)
//     return response
// }

// export const filterSearch = async (page:number, limit:number, search:string):Promise<menuResponse> => {
//     const response = await fetchApi<menuResponse>(`${api}/menu?page=${page}&pageSize=${limit}&search=${search}`)
//     return response
// }
