import coffeImage from "../../../assets/images/coffee-shop.png"
import ListMenu from "./ListMenu"
import Reviews from "./Reviews"
import CreateReview from "../../ui/form/FormReview"
import Sidebar from "../../ui/sidebar/Sidebar"
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa"

const MainLandingPage = () => {

    return <>
        <main className="
        ">

            {/* navbar */}
            <nav className="w-full sticky top-0 z-10 bg-amber-50 p-3">
                <div className="flex justify-between mx-5" >
                    <div className="text-2xl flex-center font-bold">Kafei</div>
                    
                    {/* desktop menu */}
                    <div className="max-sm:hidden">
                        <ul className="flex-center gap-2">
                            <li className="p-2">
                                <a href="#home" className="text-gray-800 hover:text-amber-700 transition-all duration-300 scroll-auto">Home</a>
                            </li>
                            <li className="p-2">
                                <a href="#menu" className="text-gray-800 hover:text-amber-700 transition-all duration-300">Menu</a>
                            </li>
                            <li className="p-2">
                                <a href="#about" className="text-gray-800 hover:text-amber-700 transition-all duration-300">About Us</a>
                            </li>
                            <li className="p-2">
                                <a href="#contact" className="text-gray-800 hover:text-amber-700 transition-all duration-300">Contact</a>
                            </li>
                            <li className="p-2">
                                <a href="/login" className="text-gray-800 hover:text-amber-700 transition-all duration-300">Login</a>
                            </li>
                        </ul>
                    </div>

                    {/* hamburger menu */}
                    <div className="flex-center min-sm:hidden  ">
                        <Sidebar />
                        {/* H */}
                    </div>
                </div>
            </nav>


            {/* Home */}
            <div id="home" className="scroll-mt-20">
                <div className="relative">
                    <img src={coffeImage} alt="kopi" className="object-cover w-full h-full sm:h-[300px] " />
                    <div className="absolute inset-0 flex-center bg-black/50 " >
                        <div className="text-center  text-white">
                            <h1 className="text-4xl md:text-5xl mb-4 font-bold">Kāfēi</h1>
                            <p className="text-[19px] md:text-2xl">Enjoy a Cup of Happiness</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* section Produk Menu */}
            <section className="section p-8 lg:p-16 scroll-mt-20" id="menu">
                <h1 className="md:text-4xl text-2xl font-bold text-yellow-950 text-center w-full ">Explore Our Best Menu</h1>
                <ListMenu/>
            </section>
            

            {/* section aboutUs */}
            <section className="section p-19 scroll-mt-20" id="about">
                <h1 className="font-bold md:text-4xl text-2xl">About Us</h1>
                <p className=" text-center">
                    At Kāfēi, we are passionate about crafting the perfect cup of coffee, served in a cozy and welcoming environment where you can relax and enjoy the finest brews.
                </p>
            </section>


            {/* section Testimonial */}
            <section className="section px-0 scroll-mt-20">
                <h1 className="font-bold md:text-4xl text-center text-2xl">Customer Testimonials</h1>
                <Reviews
                />
            </section>

            {/* create Form Review */}
            <div>
                <CreateReview/>
            </div>


            {/* footer contact*/}
            <footer className="bg-[#21443c] mt-5 scroll-mt-20" id="contact">
                <div className=" pt-8 px-6">
                    <div className="grid mb-6 md:grid-cols-4 items-center justify-center gap-8 ">
                        <div className="text-white h-full">
                            <h1 className="text-2xl font-bold mb-4">Kafei</h1>
                            <p>Serving the best coffee, tea, and pastries to brighten your day.</p>
                        </div>
                        <div className="text-white h-full">
                            <h1 className="text-xl font-bold mb-4">Opening Hours</h1>
                            <p>Monday - Sunday</p>
                            <p>07:00 AM - 10:00 PM WIB</p>
                        </div>
                        <div className="text-white h-full">
                            <h1 className="text-xl font-bold mb-4">Contact</h1>
                            <p>Jl. Coffee No. 123 Batam, Indonesia</p>
                            <p>Tel: +62 812-3456-7890</p>
                        </div>
                        <div className="text-white h-full">
                            <h1 className="text-xl font-bold mb-4">Social Media</h1>
                            <div className="flex gap-4">
                                <FaInstagram className="w-6 h-6"/>
                                <FaYoutube className="w-6 h-6"/>
                                <FaFacebook className="w-6 h-6"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex-center w-full h-full border-t-1 border-[#296c5e] pt-6 pb-9">
                        <h5 className="text-white font-light">© 2025 Kāfēi by Annas. All Right Reserved.</h5>
                    </div>
                </div>
            </footer>
        </main>
    </>
}

export default MainLandingPage