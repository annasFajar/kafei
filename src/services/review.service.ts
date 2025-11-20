
import type { reviewResponse, testimonials, createReview } from "../types/props/productReview"
import { fetchApi } from "../utils/fetch"

export const fetchReview = async (page:number, pageSize:number) => {
    let allTestimoni: testimonials[] = []
    let cekData = true
    while (cekData) {
        const result = await fetchApi<reviewResponse>(`${import.meta.env.VITE_API_URL}/reviews?page=${page}&pageSize=${pageSize}`)
        const reviews = result.data
        allTestimoni = [...allTestimoni, ...reviews]
        page++
        cekData = result.data.length === pageSize // cekData = false/true
    }
    return allTestimoni
}

export const fetchCreate = async (review:createReview) => {
    const res = await fetchApi(`${import.meta.env.VITE_API_URL}/reviews`, {
        method:'POST',
        body: JSON.stringify(review)
    })
    console.log(res)
    return res
}