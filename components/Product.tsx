import { useRouter } from 'next/router';
import Link from "next/link";

export interface IProduct {
  id: string
  name: string
  price: number
  type:string
  url: string  
  description: string
  image: string
  option: any
}

interface IProductProps {
  product: IProduct
}







const Product = (props: IProductProps) => {

  const router = useRouter()

  return (
    
    <div className="product w-full md:w-3/6 lg:w-3/12">
      <img  src={props.product.image} alt="" className="inline product__image"/>
      <h2 className="uppercase text-white product_title">{props.product.name}</h2>
      <p className="uppercase text-white mt-2  amber_caviar" >
        <img className="inline mr-2 " src="/static/image7.svg" alt="" />
          {props.product.type}
        <img className="inline align-middle ml-2" src="/static/image7.svg" alt="" />
      </p>

      <Link href="/product/[id]" as={"/product/" + props.product.id}>
        <a className="btn-find-out mt-4 mb-10 inline-block">find out more</a>
      </Link>
      
      </div>
 
  )
}

export default Product