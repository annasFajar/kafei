import { useEffect, useState } from "react"
import { type ReviewsItem } from "../../../types/props/productReview"
import { fetchReview } from "../../../services/review.service"
import StarRate from "../../ui/review/starRate"

const Reviews = () => {
    const [reviews, setreviews] = useState<ReviewsItem[]>([])

    const handleReview = async () => {
        const result = await fetchReview(1,20)
        setreviews(result)
    }

    useEffect(()=> {
        handleReview()
    },[])

    // const reviewReverse = reviews.slice().reverse()
    // reviewReverse.map((s)=> console.log(s.reviewer_name))
    return <>
        <div className="overflow-hidden w-full flex">
            <div className="flex animate-slide-right hover:[animation-play-state:paused] gap-4">
                {[...reviews,...reviews].map(({reviewer_name,rating,comment}, index)=> (
                    <div key={index} className={"w-64 p-3 min-h-40 border border-gray-300 rounded-2xl flex-shrink-0 cursor-pointer hover:bg-gray-100"}>
                        <h1 className="text-teal-800 font-semibold ">{reviewer_name}</h1>
                        <StarRate  rateProduk={rating}/>
                        <p className="font-[400px] text-[14px] mt-4">{comment}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="overflow-hidden flex w-full">
            <div className="flex animate-slide-left hover:[animation-play-state:paused] gap-2">
                {[...reviews, ...reviews].map(({reviewer_name, rating, comment}, index) => (
                    <div key={index} className={"w-64 p-3 min-h-40 border border-gray-300 rounded-2xl flex-shrink-0 cursor-pointer hover:bg-gray-100"}>
                        <h1 className="text-teal-800 font-semibold ">{reviewer_name}</h1>
                        <StarRate  rateProduk={rating}/>
                        <p className="font-[400px] text-[14px] mt-4">{comment}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default Reviews