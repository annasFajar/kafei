type prod = {
    rateProduk:number
}
const StarRate = ({rateProduk}:prod) => { 
    return <>
        <div className="flex text-xs md:text-3xl">
            {Array.from({length:5}).map((_,index) => (
                <span key={index} className={rateProduk > index ? 'text-amber-300':''}>★</span>
            ))}
        </div>
    </>
}

export default StarRate