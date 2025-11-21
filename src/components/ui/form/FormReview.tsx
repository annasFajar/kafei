import React, { useEffect, useState } from "react"
import { useForm, useStore } from "@tanstack/react-form"
import { getMenus } from "../../../services/menu.service"
import type { dataMenu } from "../../../types/order"
import { useDebounce } from "use-debounce"
import { fetchCreate } from "../../../services/review.service"
import { FaRegHeart } from "react-icons/fa"


const FormReview = () => {
    const [modal, setModal] = useState<boolean>(false)
    const [menus, setMenus] = useState<dataMenu[]>([])
    const [showMenu, setShowMenu] = useState(true)
    const [showPilihan, setShowPilihan] = useState(false)
    const [gambarPilihan, setGambarPilihan] = useState<string>('')
    // const [menuIdPilihan, setMenuIdPilihan] = useState<string>('')
    const [menuPilihan, setMenuPilihan] = useState<string>('')
    // const [star, setStar] = useState<number>(5)
    
    // buka modal
    const openModal = (e:HTMLElement) => {
        if (modal) {
            if (e.id === 'luar' || e.id === 'button') {
                console.log(e.id)
                setModal(false)
            }
        } else {
            console.log(e.id)
            console.log('dalam')
            // lagi false
            setModal(true)
        }
    }
    
    // form tanstack
    const Form = useForm({
        defaultValues: {
            menu:'',
            idMenu:'',
            reviewerName:'',
            rating:5,
            comment:''
        },
        
        onSubmit: async (state) => {
            // await new Promise((resolve) => {
            //     setTimeout(() => {
            //         setModal(false)
            //         Form.reset()
            //         setShowPilihan(false)
            //         console.log(state.value)    
            
            //     }, 3000);
            // })
            try {
                await fetchCreate({
                    menuItemId:state.value.idMenu,
                    reviewerName:state.value.reviewerName,
                    rating:state.value.rating,
                    comment:state.value.comment
                })
                console.log(state.value)    
                
            } catch (error) {
                console.log(`submit gagal ${error}`)
            }
            finally{
                setModal(false)
                setShowPilihan(false)
                Form.reset()
            }
        }
    })

    const menuValue = useStore(Form.store,(state)=>state.values.menu)
    const [debounce] = useDebounce(menuValue,250)
    
    
    const resultMenus = async () => {
        const res = await getMenus(debounce)
        setMenus(res)
        // setMenuPilihan(res)
        console.log(res)
    }
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        Form.handleSubmit()
    }

    useEffect(()=>{
        resultMenus()
    },[debounce])

    // const starp = (star) => {
    //     setStar(star)
    // }

    return <>
        <div className="flex-center gap-1 fixed bottom-8 right-5 flex-col z-3 group">
            <button id="button" className="h-12 w-12 flex-center rounded-4xl bg-[#234b41]  hover:cursor-pointer hover:bg-[#31695d]" 
            onClick={(e:React.MouseEvent<HTMLElement>)=>{
                console.log(e.currentTarget)
                return openModal(e.currentTarget)}}>
            <div>
                <FaRegHeart className="h-6 w-6 text-white" />
            </div>
            </button>
            <span className={`text-[12px] md:text-sm group-hover:opacity-100 transition ${modal ? 'opacity-100' : 'opacity-0'}`}>Rate Us</span>
        </div>

        {/* openModal */}
        {modal && (
            <div id="luar" className="h-screen w-screen fixed top-0 z-11 flex-center backdrop-blur-[2px] bg-black/20" onClick={(e:React.MouseEvent<HTMLElement>)=>openModal(e.currentTarget)}>
                <form 
                    onSubmit={(e)=>handleSubmit(e)}
                    id="form"
                    onClick={(e)=>e.stopPropagation()}
                    className="bg-white w-80 sm:w-[450px] rounded-2xl z-20"
                >
                    <div className="flex-center flex-col p-5 gap-1 h-full">
                        <div className="flex justify-between w-full text-2xl font-bold  ml-3 mb-4">
                            <h1>Share Your Experience</h1>
                        </div>
                        <div className="w-full h-full justify-between flex flex-col">
                            <div className="flex flex-col w-full h-full gap-2">
                                <Form.Field
                                    name="menu"
                                    children={(field)=>{
                                        return <div className="relative mb-4">
                                                <label htmlFor="" className="label">Select Menu Item</label>
                                                <input
                                                    type="text" 
                                                    value={field.state.value} 
                                                    className="input mb-1"
                                                    onChange={(e)=>{
                                                        field.handleChange(e.target.value)
                                                        setShowMenu(true)
                                                        // setSearch(field.state.value)
                                                    }} 
                                                />
                                                <div className={!field.state.value || !showMenu ? 'hidden': 'block absolute bg-amber-200 w-full p-1 h-60 overflow-y-auto'}>
                                                    {menus.map((menu)=>(
                                                        <>
                                                            <div className="bg-amber-700 p-2" onClick={(e)=> {
                                                                field.setValue(e.currentTarget.textContent ?? '')
                                                                field.form.setFieldValue('idMenu',menu.id)
                                                                setShowMenu(false)
                                                                setShowPilihan(true)
                                                                setGambarPilihan(menu.image_url)
                                                                // setMenuIdPilihan(menu.id)
                                                                setMenuPilihan(menu.name)
                                                            }}>
                                                                {menu.name}
                                                            </div>
                                                        </>
                                                    ))}
                                                </div>
                                                <div className={!showPilihan ? 'hidden': 'block'}>
                                                    <div className="flex gap-2 border-gray-300 border">
                                                        <img className="w-10 h-10" src={gambarPilihan} alt='gambar' />
                                                        <h5 className="flex-center h-10">
                                                            {menuPilihan}
                                                        </h5>
                                                    </div>
                                                </div>
                                                {/* <div className={ ? 'hidden': 'block'}>{field.state.value}</div> */}
                                        </div>
                                    }}
                                    />
                                <Form.Field
                                    name="reviewerName"
                                    children={(field)=>{
                                        return <div>
                                            <label htmlFor="" className="label">Your Name</label>
                                            <input 
                                                type="text" 
                                                value={field.state.value}
                                                className="input"
                                                onChange={(e)=>{
                                                    field.handleChange(e.target.value)
                                                }}
                                            />
                                        </div>
                                    }}
                                />
                                <Form.Field
                                    name="rating"
                                    children={(field)=>{
                                        return <div>
                                            <label htmlFor="" className="label">Rating</label>
                                            {/* <input 
                                                type="text" 
                                                className="input"
                                                onChange={(e)=>field.handleChange(e.target.value)}
                                                
                                                /> */}
                                            <div className="flex gap-1">
                                                {Array.from({length:5}).map((_,i)=>{
                                                    const rating = i + 1
                                                    return <button
                                                    // value={}
                                                        type="button"
                                                        className={rating <= field.state.value ? 'text-amber-400 text-xl md:text-4xl hover:cursor-pointer':'hover:cursor-pointer text-xl md:text-4xl'}
                                                        onClick={()=>field.setValue(rating)}
                                                    >★</button>
                                                })}
                                            </div>
                                        </div>
                                    }}
                                />
                                <Form.Field
                                    name="comment"
                                    children={(field)=>{
                                        return <div className="h-full flex flex-col">
                                            <label htmlFor="" className="label">Review</label>
                                            <textarea 
                                                value={field.state.value}
                                                className="input flex-1"
                                                onChange={(e)=>field.handleChange(e.target.value)}
                                            />
                                        </div>
                                    }}
                                />
                            </div>
                            <div>
                                <Form.Subscribe
                                    selector={(state)=>[state.canSubmit,state.isSubmitting]}
                                    children={([canSubmit,isSubmitting])=>{
                                        return <div>
                                            <button 
                                                type="submit"
                                                className="button"
                                                disabled={!canSubmit || isSubmitting}
                                            >
                                            {isSubmitting ? '...':'Submit'}
                                            </button>
                                        </div>
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )}
    </>
}

export default FormReview