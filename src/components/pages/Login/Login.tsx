import LoginImage from '../../../assets/images/login_form.jpg'

const Login = () => {
    return (
        <>
            <main className=" min-h-screen relative"
                style={
                    {
                        backgroundImage: `url(${LoginImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }
                }
            >
                {/* <img src={LoginImage} alt="gagal" className='object-cover w-full max-h-screen'/> */}
                <div className='absolute inset-0 flex-center'>
                    <div className='bg-white p-8 md:p-10  lg:p-12 w-9/10 flex flex-col gap-5 rounded-2xl sm:w-[400px] md:w-5/10 lg:w-4/12'>
                        <div className='flex-center flex-col gap-1'>
                            <h1>
                                <a href="" className='text-2xl font-bold hover:underline'>WELCOME TO KAFEI</a>
                            </h1>
                            <p className='text-sm'>Please enter your credentials to sign in</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="" className='font-semibold'>
                                        Email
                                    </label>
                                    <input 
                                        type="text" 
                                        className='border border-gray-300 p-1 rounded-[6px]'
                                    />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="" className='font-semibold'>
                                        Password
                                    </label>
                                    <input 
                                        type="text" 
                                        className='border border-gray-300 p-1 rounded-[6px]'
                                    />
                                </div>
                            </div>
                            <div>
                                <button className='w-full p-1 bg-[#21443c] text-white rounded-[6px]'>LOGIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login