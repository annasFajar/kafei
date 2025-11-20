const MenuCardSkeleton = () => {
    return <>
            <div className="h-52 w-32 md:w-60 md:h-96 border-gray-600 border-1 overflow-hidden relative flex justify-center items-center rounded-2xl animate-pulse">
                {/* <img className="object-cover h-full w-full object-center bg-gray-300" alt="" /> */}
                <div className="absolute inset-0 h-full flex justify-center items-end bg-gray-300">
                    <div className="h-16 w-44 md:h-30 md:w-60 bg-white bottom-0 [clip-path:polygon(0%_20%,0%_100%,100%_100%,100%_20%,50%_0%)] ">
                        <div className="p-0.5 gap-0.5 md:p-2 md:gap-1.5 flex flex-col justify-end items-center bottom-0 h-full">
                            <div>
                                <h1 className="bg-gray-300 w-20 md:w-40 h-4 rounded-md"></h1>
                            </div>
                            <div className="bg-gray-200 w-10 md:w-20 h-4 rounded-md"></div>
                            <div className="flex gap-5 md:gap-10">
                                <div className="bg-gray-200 w-12 h-4 rounded-md"></div>
                                <div className="bg-gray-200 w-7 h-4 rounded-md"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-5 w-5 text-xs bottom-14 md:h-10 md:w-10 md:text-2xl md:bottom-25 absolute bg-gray-100 flex justify-center items-center rounded-4xl">
                    <div className="bg-gray-200 w-5 h-4 rounded-md"></div>
                </div>
            </div>
        </>
}

export default MenuCardSkeleton