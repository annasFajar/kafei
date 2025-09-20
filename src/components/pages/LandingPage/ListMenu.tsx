import { useEffect, useState } from "react"
import { categorys, type dataMenu, type metadataMenu } from "../../../types/order"
import { fetchMenus } from "../../../services/menu.service"
import { useSearchParams } from "react-router-dom"
import { cleanParams } from "../../../utils/cleanParam"
import MenuCardSkeleton from "../../ui/shimmer/MenuCardSkeleton"
import CardMenu from "../../ui/card/CardMenu"

const ListMenu = () => {
    const [items, setItems] = useState<dataMenu[]>([]) 
    const [metadata, setMetadata] = useState<metadataMenu | null>(null)
    const [currentpage, setCurrentpage] = useState<number>(1)
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState<string>(searchParams.get('search') || '')
    const [category, setCategory] = useState<string>(searchParams.get('category') || '')
    
    // const startMenu = async (page:number):Promise<void> => {
    //     const response = await menuPagination(page,8)
    //     const resultItems = response.data
    //     const metadata = response.metadata
    //     setItems(resultItems)
    //     setMetadata(metadata) //untuk loop pages
    //     setCurrentpage(page)
    //     const query = new URLSearchParams({category: 'oke', name:'yey'})
        
    // }
    // const handlePages = async (page:number,e?:React.ChangeEvent<HTMLInputElement>):Promise<void> => {
    //     const response = await menuPagination(page,8) // pagination dari semua filter
    //     const resultItems = response.data
    //     const metadata = response.metadata
    //     const selected = e?.target.value
    //     if (selected) {
    //         const response = await menuPagination(page,8)
    //     }
    //     setItems(resultItems) 
    //     setCurrentpage(page) //page kita berada
    //     setMetadata(metadata) //loop pages
        
    // }
    // const handleFilters = async (page:number,category:string):Promise<void> => {
    //     const response = await filters(page,8,category)
    //     const resultItems = response.data
    //     const metadata = response.metadata //untuk loop pages
    //     setItems(resultItems)
    //     setMetadata(metadata)
    //     setCurrentpage(page) //page kita berada
    // }
    // const handleSearch = async (page:number, e:React.ChangeEvent<HTMLInputElement>) => {
    //     const resultSearch = e.target.value
    //     const response = await filterSearch(page,8,resultSearch)
    //     const resultItems = response.data
    //     const metadata = response.metadata
    //     setItems(resultItems)
    //     setMetadata(metadata)
    //     setCurrentpage(page)
    // }
    // const handleDropdown = (e:React.ChangeEvent<HTMLSelectElement>) => {
    //     const selected = e.target.value
    //     if (selected === 'All') {
    //         handlePages(1)
    //     } else {
    //         handleFilters(1,selected)
    //     }
    // }
    const params = new URLSearchParams(searchParams)

    type typeHandle = {
        clickTo?:number, 
        filterCategory?:string
    }

    const handleMenu = async ({clickTo}:typeHandle) => {
        const response = await fetchMenus(clickTo,{search:search, category:category})
        const menu = response.data
        const metadata = response.metadata
        setItems(menu)
        setMetadata(metadata)
        setCurrentpage(clickTo??1)
        // setSearchParams(search)
        const clean = await cleanParams({search:search, category:category})
        // console.log(`ui: ${category}`)
        if (Object.keys(clean).length > 0) {
            setSearchParams(clean)
        } else {
            params.delete('category')
            params.delete('search')
            setSearchParams(params)

        }
        // console.log(`param if: ${params}`)
    }

    useEffect(()=> {
        handleMenu({clickTo:1})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        handleMenu({clickTo:currentpage})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentpage,category, searchParams])
    
    useEffect(()=> {
        const handler = setTimeout(async () => {
            handleMenu({clickTo:currentpage})
        }, 500);
        return () => clearTimeout(handler)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])
    
    return <>
        {/* filter */}
        <div className="p-2 flex gap-4">
            {/* search */}
            <input type="search" name="search" id="" className="border-1 border-gray-500 rounded-md" onChange={(e)=>{
                setSearch(e.target.value)
                setCurrentpage(1)
            }}/>
            {/* dropdown */}
            <select name="" onChange={(e)=>{
                    if (e.target.value === 'All') {
                        setCategory('')
                    } else {
                        setCategory(e.target.value)
                    }
                    setCurrentpage(1)
                }}  
                defaultValue='All' id="" className="border-1 border-slate-500 rounded-md">
                {categorys.map((category)  => (
                    <option value={category} key={category}>{category}</option>
                ))}
            </select>
        </div>


        <div className="">
            {/* card */}
            <div className="flex items-center justify-center flex-wrap gap-2 lg:mx-40">
                {items.map(({id, image_url, name, price, category}) => (
                    <CardMenu key={id} img={image_url} category={category} name={name} price={price}/>
                ))}
            </div>

            {/* pagination */}
            <div className="flex items-center justify-center mt-7 gap-2">
                {Array.from({length: metadata?.totalPages?? 0}, (_,i) => i+1).map((page) => (
                    <div key={page} className={`h-6 w-6 border-1 border-black  
                        ${currentpage === page ? `bg-red-600 ` : `bg-amber-200 cursor-pointer`}`}
                    onClick={()=>setCurrentpage(page)}
                    >{page}</div>
                ))}
            </div>
            {/* <MenuCardSkeleton/> */}
        </div>
    </>
}

export default ListMenu