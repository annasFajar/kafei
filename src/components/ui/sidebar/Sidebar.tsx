import { useEffect, useRef, useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"


const Sidebar = () => {
    const hamburgerRef = useRef(null)
    const sidebarRef = useRef(null)
    const [hamburger,setHamburger] = useState(false)

    useEffect(()=>{
        const handler = (e) => {
            if(hamburger) {
                // klik di sidebar
                if (sidebarRef.current.contains(e.target)) {
                    console.log('dalam')
                }
                // klik selain di sidebar dan selain di hamburger
                if (!sidebarRef.current.contains(e.target) && !hamburgerRef.current.contains(e.target)) {
                    console.log('luar')
                    setHamburger(false)
                }
            }
        }

        document.addEventListener('click',handler)
        return ()=>document.removeEventListener('click',handler)
    },[hamburger])
    
    return <>
            <button id="hamburger"
                ref={hamburgerRef}
                className="h-full"
                onClick={()=>setHamburger((prev) => !prev)}
            ><div>
                <RxHamburgerMenu className="bg-white w-5 h-5"/>
            </div>
            </button>

            {/* {hamburger && ( */}
                <>
                    <div className={`inset-0 backdrop-blur-[2px] bg-black/20 z-4 transition-transform duration-1000 ${hamburger ? 'fixed':''}`}></div>
                    <div className={`flex flex-col transform absolute h-screen gap-6 bg-amber-50 z-5 top-0 w-40 left-0 transition-transform duration-700 ${hamburger ? 'translate-x-0' : '-translate-x-full'}`}
                        ref={sidebarRef}>
                        <div className="text-2xl flex-center font-bold mt-3 w-30">Kafei</div>
                        <ul className="text-[20px] flex flex-col gap-2 ml-6">
                            <li className="">
                                <a href="#home" className="text-gray-800 hover:text-amber-700 transition-all duration-300">Home</a>
                            </li>
                            <li className="">
                                <a href="#menu" className="text-gray-800 hover:text-amber-700 transition-all duration-300">Menu</a>
                            </li>
                            <li className="">
                                <a href="#about" className="text-gray-800 hover:text-amber-700 transition-all duration-300">About Us</a>
                            </li>
                            <li className="">
                                <a href="#contact" className="text-gray-800 hover:text-amber-700 transition-all duration-300">Contact</a>
                            </li>
                            <li className="">
                                <a href="/login" className="text-gray-800 hover:text-amber-700 transition-all duration-300">Login</a>
                            </li>
                        </ul>
                    </div>
                </>
            {/* )}  */}
        </>
}

export default Sidebar