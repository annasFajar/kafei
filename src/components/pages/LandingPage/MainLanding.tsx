import coffeImage from "../../../assets/images/coffee-shop.png"
import ListMenu from "./ListMenu"
import Reviews from "./Reviews"
import CreateReview from "../../ui/review/CreateReview"

const MainLandingPage = () => {


    return <>
        <main className="min-h-screen scroll-smooth">

            {/* navbar */}
            <nav className="w-full sticky top-0 z-10 bg-amber-50">
                <div className="flex justify-between mx-5">
                    <div className="p-2 font-bold">Kafei</div>
                    
                    {/* desktop menu */}
                    <div className="max-sm:hidden">
                        <ul className="flex gap-1">
                            <li className="p-2">Home</li>
                            <li className="p-2">Menu</li>
                            <li className="p-2">About Us</li>
                            <li className="p-2">Contact</li>
                            <li className="p-2">Login</li>
                        </ul>
                    </div>

                    {/* hamburger menu */}
                    <div className="flex-center min-sm:hidden">
                        <h3>H</h3>
                    </div>
                </div>
            </nav>


            {/* Home */}
            <div>
                <div className="relative">
                    <img src={coffeImage} alt="kopi" className="object-cover w-full h-full sm:h-[300px] " />
                    <div className="absolute inset-0 flex-center bg-black/50 " >
                        <div className="text-center  text-white">
                            <h1 className="text-5xl mb-4 font-bold">Kāfēi</h1>
                            <p className="text-2xl">Enjoy a Cup of Happiness</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* section Produk Menu */}
            <section className="section">
                <h1 className="text-4xl font-bold text-yellow-950 text-center">Explore Our Best Menu</h1>
                <ListMenu/>
            </section>
            

            {/* section abouyUs */}
            <section className="section">
                <h1 className="font-bold text-4xl">About Us</h1>
                <p className=" text-center">
                    At Kāfēi, we are passionate about crafting the perfect cup of coffee, served in a cozy and welcoming environment where you can relax and enjoy the finest brews.
                </p>
            </section>


            {/* section Testimonial */}
            <section className="section px-0">
                <h1 className="font-bold text-4xl text-center">Customer Testimonials</h1>
                <Reviews/>
            </section>

            {/* createReview */}
            <div>
                <CreateReview/>
            </div>


            {/* footer contact*/}
            <footer className="bg-[#21443c] mt-5">
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
                            <div className="flex gap-2">
                                <p>o</p>
                                <p>o</p>
                                <p>o</p>
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