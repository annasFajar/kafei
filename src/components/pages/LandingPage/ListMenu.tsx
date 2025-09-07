import { useEffect, useState } from "react"
import type { dataMenu, metadataMenu } from "../../../types/order"
import { menuPagination } from "../../../services/menu.service"

const ListMenu = () => {
    const [items, setItems] = useState<dataMenu[]>([]) 
    const [metadata, setMetadata] = useState<metadataMenu | null>(null)
    const [currentpage, setCurrentpage] = useState<number | null>(null)
    
    const startMenu = async ():Promise<void> => {
        const response = await menuPagination(1,8)
        const resultItems = response.data
        const metadata = response.metadata
        setItems(resultItems)
        setMetadata(metadata)
    }
    const handlePages = async (page:number):Promise<void> => {
        const response = await menuPagination(page,8)
        const resultItems = response.data
        setItems(resultItems)
        setCurrentpage(page)
    }

    useEffect(()=> {
        startMenu()
    },[])
    
    return <>
        <div className="">
            {/* card */}
            <div className="flex items-center justify-center flex-wrap gap-2 lg:mx-40">
                {items.map((item)=> (
                    <div key={item.id} className="h-64 w-50 border-gray-600 border-1 ">{item.name}</div>
                ))}
            </div>

            {/* pagination */}
            <div className="flex items-center justify-center mt-7 gap-2">
                {Array.from({length: metadata?.totalPages?? 0}, (_,i) => i+1).map((page) => (
                    <div key={page} className={`h-6 w-6 border-1 border-black  
                        ${currentpage === page ? `bg-red-600 ` : `bg-amber-200 cursor-pointer`}`}
                    onClick={()=>{handlePages(page)}}
                    >{page}</div>
                ))}
            </div>
        </div>
    </>
}

export default ListMenu