import { MdOutlineShoppingBag } from "react-icons/md"
import type { MenuRate} from "../../../types/props/productReview" 
import StarRate from "../form/starRate"

const CardMenu = ({id,name,category,image_url,price,averageRating,description}: MenuRate) => {
    return <>
            <div key={id} className="h-52 w-32 md:w-60 md:h-96 border-gray-600 border-1 overflow-hidden relative flex justify-center items-center rounded-2xl">
                <img className="object-cover h-full w-full object-center" src={image_url} alt="" />
                <div className="absolute inset-0 h-full flex justify-center items-end">
                    <div className="h-16 w-44 md:h-30 md:w-60 bg-white bottom-0 [clip-path:polygon(0%_20%,0%_100%,100%_100%,100%_20%,50%_0%)] ">
                        <div className="p-0.5 gap-0.5 md:p-1 md:gap-1 flex flex-col justify-end items-center bottom-0 h-full">
                            <div>
                                <h1 className="font-bold text-xs md:text-lg">{name}</h1>
                            </div>
                            <div className="text-[10px] md:text-[15px]">{category}</div>
                            <div className="flex-center gap-5 md:gap-10">
                                <div>
                                    <StarRate rateProduk={averageRating}/>
                                </div>
                                <div>
                                    <h1 className="font-bold text-green-600 text-[10px] md:text-lg">${price}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-5 w-5 text-xs bottom-14 md:h-10 md:w-10 md:text-2xl md:bottom-25 absolute bg-[#21443c] flex justify-center items-center rounded-4xl">
                    <MdOutlineShoppingBag className="text-white"/>
                </div>
            </div>
        </>
}

export default CardMenu