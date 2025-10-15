import { useState } from "react"
import type { createReview } from "../../../types/props/productReview"
import { Field, useForm } from "@tanstack/react-form"


type review = {
    menu: string,
    name: string,
    review: string
}

const CreateReview = () => {
    const [modal, setModal] = useState<boolean>(false)
    // const [createReview, setCreateReview] = useState<createReview>({})

    const form = useForm(({
        defaultValues:{
            name:'',
            review:''
        },
        onSubmit: (value)=> {
            console.log(value)
        }
    }))

    const handleSubmit = () => {
        
        
    }
    
    const openModal = (e) => {
        if (modal) {
            if (e.id === 'luar' || e.id === 'button') {
                setModal(false)
            }
        } else {
            setModal(true)
        }
    }

    
    return <>
        <button id="button" className="z-12 h-12 w-12 rounded-4xl bg-[#21443c] fixed bottom-8 right-5 hover:cursor-pointer hover:bg-[#31695d]" onClick={(e)=>openModal(e.target)}>
        
        </button>

        {/* openModal */}
        {modal && (
            <div id="luar" className="h-screen w-screen fixed top-0 z-11 flex-center backdrop-blur-[2px]" onClick={(e)=>openModal(e.target)}>
                <form id="dalam" onSubmit={handleSubmit} className="h-full bg-white rounded-2xl border-2 border-slate-200 flex-center flex-col gap-7 p-6 relative w-full max-w-md max-h-[490px] m-8" >
                    <h1 className="font-extrabold text-2xl">Share Your Experience</h1>
                    <div className="flex-center flex-col gap-2 w-full">
                        
                    </div>
                </form>
            </div>
        )}
    </>
}

export default CreateReview