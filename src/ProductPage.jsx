import { useParams } from 'react-router-dom';

import {products} from './data'

import Star from './Star.jsx'
import Shipping from './Shipping.jsx'

export default function ProductPage(){
    const {id} = useParams();
    
    const product = products.find(product => product.id === parseInt(id));

    return (
        <div className="container">
            <div className="mt-3">
                <div className="row justify-content-center mb-3">
                <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                            <img src={product.productImage}
                                className="w-100" />
                            <a href="#!">
                                <div className="hover-overlay">
                                <div className="mask" style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>{product.productName}</h5>
                            <div className="d-flex flex-row">
                            <Star rating={product.rating} />
                            <span>{product.reviews}</span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                            <span>100% cotton</span>
                            <span className="text-primary"> • </span>
                            <span>Light weight</span>
                            <span className="text-primary"> • </span>
                            <span>Best finish<br /></span>
                            </div>
                            <div className="mb-2 text-muted small">
                            <span>Unique design</span>
                            <span className="text-primary"> • </span>
                            <span>{product.forMen?"For Men":"For Women"}</span>
                            <span className="text-primary"> • </span>
                            <span>Casual<br /></span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0">
                            {product.descriptions}
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                            <h4 className="mb-1 me-1">${product.priceBefore}</h4>
                            <span className="text-danger"><s>${product.priceAfter}</s></span>
                            </div>
                            <Shipping freeShipping={product.freeShipping} />
                            <div className="d-flex flex-column mt-4">
                            {/* <button className="btn btn-primary btn-sm" type="button">Details</button> */}
                            <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                                Add to wishlist
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}