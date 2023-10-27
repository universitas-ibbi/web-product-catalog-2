export default function Star(props){
    return (
        <div className="text-danger mb-1 me-2">
            {[...Array(5)].map((star,index) => {
                return (
                    <i key={index} className={index <= props.rating?"fa fa-star":"far fa-star"}></i>
                )
            })}
        </div>
    )
}