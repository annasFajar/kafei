// endpoint = /api/menu
type dataMenu = { // per item
    id: string,
    name: string,
    description: string,
    price: number,
    image_url: string,
    category: string,
    is_available: boolean,
    created_at: string
}

type metadataMenu = { // pagination
    total: number,
    page: number,
    pageSize: number,
    totalPages: number
}

type menuResponse = { // response utama
    data: dataMenu[],
    metadata: metadataMenu
}


//category 
export const categorys: string[] = [    
    'All',
    'Coffee',
    'Non-Coffee',
    'Pastries',
    'Desserts',
    'Sandwiches'
]

export type {menuResponse, dataMenu, metadataMenu}