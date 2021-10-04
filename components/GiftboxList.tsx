import Gift, { IProductg } from "./Giftbox"

interface IProductListProps {
  gift: IProductg[]
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className="">
  
      <div className="">
      {props.gift.map((productss, index) => <Gift product={productss} key={index}/>)}
      </div>
    </div>
  )
}

export default ProductList