import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import { IProductg } from "../components/Giftbox"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

import GiftboxList from "../components/GiftboxList"
import Head from "next/head"
import productList from "../lib/products.json"
import Link from 'next/link'
import { createClient } from 'contentful';


interface IProductProps {
  
  gift: IProductg[]
}


const Index = (props: IProductProps) => {
 /** console.log(props.option)
   console.log( prop.gift.map(productss => productss.fields.name)  )**/
  return (
    <div className="mx-auto ">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
    
          <section >
            <div className="flex flex-col items-center product-list text-center   relative w-full">
             <div className="bg_container w-full relative">
             <div className=" hidden text-center absolute top-0 bottom-0 left-0 right-0 md:flex flex-col justify-center">
               <div className="bg-opacity w-2/4 mx-auto border-2 border-gold">
      <h1 className="text-white uppercase text-4xl leading-10 mt-8">in caviar 
we trust</h1>
<div className="flex justify-center mt-4 mb-10 ease-linea  ">
        <img className="mr-1.5 w-1.5" src="/static/image 2.svg" alt=""  />
        <img className="mr-1.5 mt-2 w-1.5" src="/static/image 3.svg" alt="" />
        <img className="w-1.5"src="/static/image 6.svg" alt=""/>
      </div >
      </div>
     </div >
     
              <img className="md:h-screen md:object-cover bg_small object-cover w-full pt-16" src="/static/Bgsmall.jpg" alt=""  />
            </div>
          <div className="text-center md:hidden ">
      <h1 className="text-white uppercase text-2xl leading-10 mt-8">in caviar
we trust</h1>
      <div className="flex justify-center mt-4 mb-10 ease-linea  ">
        <img className="mr-1.5 w-1.5" src="/static/image 2.svg" alt=""  />
        <img className="mr-1.5 mt-2 w-1.5" src="/static/image 3.svg" alt="" />
        <img className="w-1.5"src="/static/image 6.svg" alt=""/>
      </div ></div ></div>
          </section>
      
     
          <GiftboxList gift={props.gift} />
   
    <Footer />
   
</div>
  )
}

Index.getInitialProps = async function({query}) {

 let client = createClient({
  space: 'e9tizipl8pfb', // ID of a Compose-compatible space to be used \
  accessToken: '6-cYWF6txzBEEkuRh_aPsw6ijS2wTjLQK4q0r6GH2L4', // delivery API key for the space \
  });
 
  const res = await client.getEntries ({content_type: 'caviar'})
  const opt = await client.getEntries ({content_type: 'optionGift'})
 
  
   return {
     gift: res.items,
     
   };
 };

export default Index

















