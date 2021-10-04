import { createClient } from 'contentful';

export let client = createClient({
  space: 'e9tizipl8pfb', // ID of a Compose-compatible space to be used \
  accessToken: '6-cYWF6txzBEEkuRh_aPsw6ijS2wTjLQK4q0r6GH2L4', // delivery API key for the space \
  
});





export async function getPreviewPostBySlug() {
  const res = await client.getEntries ({content_type: 'caviar'})

      return{
   
      gift: res.items
     
      
      }
}


  
    
