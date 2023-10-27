import Product from "./Product"
import { products } from "./data"

export default function App(){
  return (
    <section>
      <div className="container py-5">
        {products.map((product,index) => {
          return <Product key={index}
              id={product.id}
              productImage= {product.productImage}
              productName= {product.productName}
              rating= {product.rating}
              reviews= {product.reviews}
              forMen= {product.forMen}
              descriptions={product.descriptions}
              priceBefore={product.priceBefore}
              priceAfter={product.priceAfter}
              freeShipping={product.freeShipping}
            />
        })}
      </div>
    </section>
  )
}