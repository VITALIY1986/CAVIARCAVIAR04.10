import { useRouter } from 'next/router';
import Link from "next/link";

export interface IProductg {
  id: string
  name: string
  price: number
  type:string
  url: string  
  description: string
  image: string
  option: string
 gift:string
  fields: any
  item: any
  label:string
}

interface IProductProps {
  product: IProductg
}

const Gift = (props: IProductProps) => {

  const router = useRouter()

  return (
    <section className="mb-20 mt-10">
    <div className=" text-center">
    <img  src={props.product.fields.image.fields.file.url} alt="" className="mx-auto header__logo"/>
    <h2 className="text-white uppercase  ">{props.product.fields.name}</h2>
        <p className="uppercase amber_caviar mt-2  " >
          <img className="inline mr-2 " src="/static/image7.svg" alt="" />
          {props.product.fields.type}
          <img className="inline align-middle ml-2" src="/static/image7.svg" alt="" />
        </p>
        <Link href="/gift/[id]" as={"/gift/" + props.product.fields.id}>
        <a className="btn-find-out mt-4 mb-10 inline-block">find out more</a>
      </Link>
    </div>
  </section>
  )
}
export default Gift

