import type { pagination } from "../types/menu.pagination"
import {  type menuResponse } from "../types/order"
import type { MenuItemDetail } from "../types/props/productReview"
import { cleanParams } from "../utils/cleanParam"
import { fetchApi } from "../utils/fetch"

const api = `${import.meta.env.VITE_API_URL}`

export const fetchMenus = async (page?:number, params?:pagination):Promise<menuResponse> => {
        const safeParams = params?? {}
        console.log(`param: ${params?.category}, ${params?.search}`)
        const clean = await cleanParams(safeParams)
        console.log(clean)
        const query = new URLSearchParams({
            page: String(page),
            pageSize: String(8),
            ...clean
        })
        console.log(`query: ${query.toString()}`)

        const url = `${api}/menu?${query.toString()}`
        console.log(`url: ${url}`)
        const result = await fetchApi<menuResponse>(url)
        return result
    }

export const getMenus = async (search) => {
    const url = `${api}/menu?search=${search}`
    const response = await fetchApi<menuResponse>(url)
    const result = response.data
    return result
}

export const getRate = async (id:string) => {
    const result = await fetchApi<MenuItemDetail>(`${api}/menu/${id}`)
    return result
}