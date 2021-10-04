import Product, { IProduct } from "./Product"

interface IProductListProps {
  products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className="flex flex-col items-center product-list text-center md:mt-10">
  
      <div className="flex flex-row flex-wrap w-full">
      {props.products.map((productss, index) => <Product product={productss} key={index}/>)}
      </div>
    </div>
  )
}

export default ProductList