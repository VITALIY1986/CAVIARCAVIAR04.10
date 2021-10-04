import Link from "next/link";
import React, { useEffect, useRef, useState } from "react"


import SideBar from "./sidebar"







export default function Header() {
   
 
    

    const navbar = useRef(null)

    const [scrolled, changeState] = useState(false)
    const [navbarHeight, setNavbarHeight] = useState(0)
    const [sidebarOpen, setSidebarOpen] = useState(false)


    useEffect(() => {
        const onScroll = () => {
            if (document.documentElement.scrollTop > 50 && !scrolled) {
                changeState(true)
            } else if (document.documentElement.scrollTop <=90 && scrolled)
                changeState(false)
        }

        window.addEventListener("scroll", onScroll)

        setNavbarHeight(navbar.current.getBoundingClientRect().height)

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [scrolled])

    return (
      <header 
      className={`duration-500 transition-all fixed top-0 left-0  w-full px-3 lg:px-10 bg-black lg:py-1  z-10 ${
        scrolled ? "scrolled opacity-0 " : ""
    }`}
    ref={navbar}
      
      
      >
      <div className=" pb-1 md:p-4 flex justify-between items-center ">
      <button className="flex"  onClick={() => {
                        setSidebarOpen(true)
                    }}>
        <img className="mr-1" src="/static/image 2.svg" alt="" />
        <img className="mr-1" src="/static/image 3.svg" alt=""  />
        <img src="/static/image 6.svg" alt="" />
      </button>
      <SideBar open={sidebarOpen} onChange={setSidebarOpen}>
                    <div className="bg-black h-full flex-col justify-center relative">
                        <div className="relative top-0 py-4 text-center w-full">
                        <Link href="/">
       
       <img src="/static/logo.svg" alt="" className="header__logo mx-auto" />
     
   </Link>
                           
                        </div>
                        <div className="text-center">
                          <ul>
                        <li className="text-gold uppercase mt-10 p-3 ">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      </ul>               
      <article className="">
    <input id="contact" type="checkbox" />
    <label className="text-gold block p-3 " htmlFor="contact">CAVIAR</label>


                        <ul className="">
      
      <li className="text-gold  uppercase p-3">
        <Link href="/product/nextjs_halfmoon">
          <a>HALFMOON BETTA</a>
        </Link>
      </li>
      <li className="text-gold  uppercase p-3">
        <Link href="/product/nextjs_kaluga">
          <a>KALUGA BLACK</a>
        </Link>
      </li>
      <li className="text-gold  uppercase p-3">
        <Link href="/product/nextjs_amber">
          <a>OSETRA AMBER</a>
        </Link>
      </li>
      <li className="text-gold uppercase p-3">
        <Link href="/product/nextjs_black">
          <a>OSETRA BLACK</a>
        </Link>
      </li>
    </ul>

    </article>

    <ul>
                        <li className="text-gold uppercase  p-3 ">
        <Link href="/">
          <a>GIFT BOX</a>
        </Link>
      </li>
      <li className="text-gold uppercase  p-3 ">
        <Link href="/">
          <a>Events</a>
        </Link>
      </li>
      </ul>        


    
  
                        </div>
                    </div>
                </SideBar>
      <Link href="/">
       
          <img src="/static/logo.svg" alt="" className="header__logo" />
        
      </Link>
      <a className="header__summary snipcart-checkout snipcart-summary flex relative" href="#" style={{textDecoration: "none"}}>
      <img src="/static/card.svg" alt="" className="header__logo" />
        <span className="header__price snipcart-total-price  text-white ml-2 absolute bottom-3 left-0 hidden"></span>
      </a>
      </div>
    </header>
    )
}

