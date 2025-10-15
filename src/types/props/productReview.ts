import type { metadataMenu } from "../order"

export type Item = {
    id: string,
    menu_item_id: string,
    reviewer_name: string,
    rating: number,
    comment: string,
    created_at: string
} 

export type Reviews = {
    items: Item[],
    total: number,
    averageRating: number
}

export type MenuItemDetail = {
    menuItem: Item[],
    reviews: Reviews
}

export type MenuRate = {
    id: string,
    name: string,
    description: string,
    price: number,
    image_url: string,
    category: string,
    is_available: boolean,
    created_at: string,
    averageRating: number
}

export type ReviewsItem = {
    id: string,
    menu_item_id: string,
    reviewer_name: string,
    rating: number,
    comment: string
    created_at: string
}

export type testimonials = {
    id: string,
    menu_item_id: string,
    reviewer_name:string,
    rating: number,
    comment: string,
    created_at: string
}

export type reviewResponse = { // response utama
    data: testimonials[],
    metadata: metadataMenu
}

export type createReview = {
    menuItemId: string,
    reviewerName: string,
    rating: number,
    comment: string
}