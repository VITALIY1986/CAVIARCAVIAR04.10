import Header from "../../components/Header"
import { IProductg } from "../../components/Giftbox"
import Footer from "../../components/Footer"
import Head from "next/head"
import {useState, useEffect} from "react"
import { createClient } from 'contentful';
import giftboxList from "../../lib/gift.json"

interface IIndexPropsg {
  gift: IProductg[]
  
}


const Productpage = (props: IIndexPropsg ) => {
  

 

  return (
    <div className=" mx-auto  ">
     
      <Header />
      
      <section className="container overflow-x-hidden mx-auto text-center flex flex-wrap w-full items-center mt-20" >
        <div className="w-full md:w-2/4">
            <h1 className="text-7xl text-white"></h1>
            <div className="container ">
              
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
 
   
   let result = res.items.filter(obj=>{
     return obj.fields.id === query.slug
   })
    return {
      gift: result
     
    };
  };


export default Productpage