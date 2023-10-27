export default function Shipping(props){
    return <h6 className={props.freeShipping?"text-success":"text-danger"}>{props.freeShipping?"Free Shipping":"No Free Shipping"}</h6>
}