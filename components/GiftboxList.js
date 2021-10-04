import Gift, { IProductg } from "./Giftbox"



const ProductList = (props) => {
  return (
    <div className="">
  
      <div className="">
      {props.gift.map((productss, index) => <Gift product={productss} key={index}/>)}
      </div>
    </div>
  )
}

export default ProductList