import React, { useEffect, useRef, useState } from "react"

import SideBar from "./sidebar"




type NavbarProps = { navPlaceholder: boolean,  currentTheme: number, switchTheme: () => void,  allowThemeSwitch: boolean, front: boolean };

const Navbar: React.FC<NavbarProps> = ({ navPlaceholder,  currentTheme, switchTheme,  allowThemeSwitch=true, front }) => {
    const currentLocation = location.pathname.split("/")[1]


   

    

    const navbar = useRef(null)

    const [scrolled, changeState] = useState(false)
    const [navbarHeight, setNavbarHeight] = useState(0)
    const [sidebarOpen, setSidebarOpen] = useState(false)


    useEffect(() => {
        const onScroll = () => {
            if (document.documentElement.scrollTop > 50 && !scrolled) {
                changeState(true)
            } else if (document.documentElement.scrollTop <= 50 && scrolled)
                changeState(false)
        }

        window.addEventListener("scroll", onScroll)

        setNavbarHeight(navbar.current.getBoundingClientRect().height)

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [scrolled])

    return (
        <React.Fragment>
            <div
                className={`duration-300 transition-all flex justify-center lg:justify-between items-center z-20 fixed w-full nav ${
                    scrolled ? "scrolled bg-bg p-4" : "p-5"
                }`}
                ref={navbar}
            >
                <button
                    className="absolute text-primary outline-0 lg:hidden"
                    style={{
                        transform: "translateY(-50%)",
                        top: "50%",
                        left: "10px",
                    }}
                    onClick={() => {
                        setSidebarOpen(true)
                    }}
                >
              
                </button>
                <SideBar open={sidebarOpen} onChange={setSidebarOpen}>
                    <div className="bg-bg h-full flex flex-col justify-center relative">
                        <div className="absolute top-0 my-4 text-center w-full">
                           
                        </div>
                        <div className="text-center">
                          
                        </div>
                    </div>
                </SideBar>
                <div
                                    className={`duration-300 transition-all ${
                                        scrolled ? "w-6" : "w-8"
                                    }`}
                                >sdfs</div>
              
                <div className="absolute line h-px left-0 bottom-0 bg-gradient-primary"></div>
            </div>
          
            
        </React.Fragment>
    )
}

export default Navbar