import Header from "../../components/Header"
import { IProductg } from "../../components/Giftbox"
import Footer from "../../components/Footer"
import Head from "next/head"
import {useState, useEffect} from "react"
import { createClient } from 'contentful';
import giftboxList from "../../lib/gift.json"




const Productpage = (props ) => {
  console.log(props.gift[0].fields.id)
 

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
           
        </div>
        <div className="md:w-2/4">
             <h1 className=" text-white uppercase text-4xl leading-10 mt-4">
               <img className="inline mr-2 w-2" src="/static/image 2.svg" alt="" />
               {props.gift[0].fields.name}
               <img className="inline align-middle ml-2 w-2" src="/static/image 2.svg" alt="" />
            </h1>
        
         
       
        <div className="text-white mt-10 text-center px-10 ">
             
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
   
    return {
    
      gift:result
    };
  };
export default Productpage