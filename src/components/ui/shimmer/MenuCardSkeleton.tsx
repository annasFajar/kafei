const MenuCardSkeleton = () => {
    return <>
            <div className="h-96 w-60 border-gray-600 border-1 overflow-hidden relative flex justify-center items-center rounded-2xl animate-pulse">
                {/* <img className="object-cover h-full w-full object-center bg-gray-300" alt="" /> */}
                <div className="absolute inset-0 h-full flex justify-center items-end bg-gray-300">
                    <div className="h-30 bg-white w-60 bottom-0 [clip-path:polygon(0%_20%,0%_100%,100%_100%,100%_20%,50%_0%)] ">
                        <div className="p-2 gap-3 flex flex-col justify-end items-center bottom-0 h-full">
                            <div>
                                <h1 className="font-bold text-lg bg-gray-300 w-40 h-4 rounded-md"></h1>
                            </div>
                            <div className="bg-gray-200 w-20 h-4 rounded-md"></div>
                            <div className="flex gap-10">
                                <div className="bg-gray-200 w-7 h-4 rounded-md"></div>
                                <div className="bg-gray-200 w-7 h-4 rounded-md"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-25 h-10 w-10 bg-gray-100 flex justify-center items-center rounded-4xl">
                    <div className="bg-gray-200 w-5 h-4 rounded-md"></div>
                </div>
            </div>
        </>
}

export default MenuCardSkeleton