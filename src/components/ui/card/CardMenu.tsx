import type { MenuWithRate} from "../../../types/props/MenuWithRate" 

const CardMenu = ({id,name,category,img,price,rate}: MenuWithRate) => {
    return <>
            <div key={id} className="h-96 w-50 border-gray-600 border-1 overflow-hidden relative flex justify-center items-center">
                <img className="object-cover h-full w-full object-center" src={img} alt="" />
                <div className="absolute inset-0 h-full flex justify-center items-end">
                    <div className="h-30 bg-white w-50 bottom-0 [clip-path:polygon(0%_20%,0%_100%,100%_100%,100%_20%,50%_0%)] ">
                        <div className="p-2 gap-1.5 flex flex-col justify-end items-center bottom-0 h-full">
                            <div>
                                <h1 className="font-bold text-lg">{name}</h1>
                            </div>
                            <div>{category}</div>
                            <div className="flex gap-10">
                                <div>rate</div>
                                <div>
                                    <h1 className="text-green-600">${price}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-25 h-10 w-10 bg-green-500 flex justify-center items-center rounded-4xl">H</div>
            </div>
        </>
}

export default CardMenu