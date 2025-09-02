import { useState } from "react"
import { getMenu } from "../../../services/menu.service"

const ListMenu = () => {
    const [page, setPage] = useState(null) 
    
    const menuPages = async () => {
        const menu1 = await getMenu(1,8)
        const menu2 = await getMenu(2,8)
        const menu3 = await getMenu(3,8)

        if (button1) {
            setPage(menu1)
        } else if (button2) {
            setPage(menu2)
        } else {
            setPage(menu3)
        }
    }
    
    return <>
        <div>
            {/* card */}
            <div>
                <div className="h-64 w-50 border-gray-600 border-1 "></div>
                <div className="h-64 w-50 border-gray-600 border-1 "></div>
                <div className="h-64 w-50 border-gray-600 border-1 "></div>
                <div className="h-64 w-50 border-gray-600 border-1 "></div>
                <div className="h-64 w-50 border-gray-600 border-1 "></div>
                <div className="h-64 w-50 border-gray-600 border-1 "></div>
                <div className="h-64 w-50 border-gray-600 border-1 "></div>
            </div>

            {/* pages */}
            <div></div>
        </div>
    </>
}

export default ListMenu