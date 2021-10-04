import Header from "../../components/Header"
import { IProductg } from "../../components/Giftbox"
import Footer from "../../components/Footer"
import Head from "next/head"
import {useState, useEffect} from "react"
import { createClient } from 'contentful';
import giftboxList from "../../lib/gift.json"



const Productpage = (props ) => {
  
  const [orderOption, setOrderOption] = useState({
    name: props.option[0].fields.label,
    price: props.option[0].fields.price
  })
  const changeOrderOption = (n, p) => {
    setOrderOption({
      name:n,
      price:p
    })
  }

  const [orderQty, setOrderQty] = useState(1)
  const increment = () => {
    setOrderQty(orderQty+1)
    return false
  }
  const dectrement = () => {
    orderQty>1 ? setOrderQty(orderQty-1) : null
    return false
  }

  return (
    <div className=" mx-auto  ">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      
      <section className="container overflow-x-hidden mx-auto text-center flex flex-wrap w-full items-center mt-20" >
        <div className="w-full md:w-2/4">
            <h1 className="text-7xl text-white"></h1>
            <div className="container ">
                <img className="w-full " src= {props.gift[0].fields.image.fields.file.url.toString()} alt=""  />
           </div>
        </div>
        <div className="md:w-2/4">
             <h1 className=" text-white uppercase text-4xl leading-10 mt-4">
               <img className="inline mr-2 w-2" src="/static/image 2.svg" alt="" />
               {props.gift[0].fields.name}
               <img className="inline align-middle ml-2 w-2" src="/static/image 2.svg" alt="" />
            </h1>
        
            <p className="uppercase  mt-3 text-xl amber_caviar_cart -m-3" >
             {props.gift[0].fields.type}
            </p>
       
        <div className="text-white mt-10 text-center px-10 ">
          <p className=" mb-10 text-justify text-xs md:text-md">
            {props.gift[0].fields.description}
          </p>      
        </div>
       
        <div className="mx-2 boxed-option grid grid-cols-2 gap-4">
            
    
                  {props.option.map ((i, idx) => {
                    return (
                      <label key={idx}>
                        <input className="boxed-radio"  id="" type="radio" checked={i.fields.label==orderOption ? true: false}  name="Options" value={i.fields.label} 
                          onChange={()=>{changeOrderOption(i.fields.label, i.fields.price)}}    />
                        <span className="option-value-name ">
                          <span >{i.fields.label}</span>
                          <span className="option-serves">{i.fields.serves}</span>
                          <span className="option-price">{i.fields.price}</span>
                        </span>
                      </label>
                    )})}
               
             
        </div>

        <div>
          <button className="text-white uppercase" onClick={()=>{dectrement()}}>-</button>
          <input className="quantity-input__screen text-white rounded-sm border bg-grey border-gold w-12 h-8 mt-10 mb-8 mx-3 pl-1" type="text" value={orderQty} />
          <button className="text-white uppercase" onClick={()=>{increment()}}>+</button>
        </div>

        <div className="mt-3 mx-2 ">
          <button className="snipcart-add-item text-white uppercase bg-gold p-4 w-full rounded-sm"
            data-item-id={props.gift[0].fields.id}
            data-item-name={props.gift[0].fields.name + "-" }
            data-item-price={Number(orderOption.price)*Number(orderQty)}
            data-item-url={"/product/" + props.gift[0].fields.id}
            data-item-image={props.gift[0].fields.image.fields.file.url}>Add to Cart <span>${Number(orderOption.price)*Number(orderQty)}</span></button>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

Productpage.getInitialProps = async function({query}) {

  let client = createClient({
   space: 'e9tizipl8pfb', // ID of a Compose-compatible space to be used \
   accessToken: '6-cYWF6txzBEEkuRh_aPsw6ijS2wTjLQK4q0r6GH2L4', // delivery API key for the space \
   });
  
   const res = await client.getEntries ({content_type: 'caviar'})
   const opt = await client.getEntries ({content_type: 'optionGift'})
   let result = res.items.filter(obj=>{
     return obj.fields.id === query.slug
   })
   let optionres = opt.items.filter(o=>{
    return o.fields.id === query.slug
  })
    return {
    option:optionres,
      gift:result
    };
  };

export default Productpage