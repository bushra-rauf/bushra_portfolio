'use client'
import DesktopMenu from "../DesktopMenu"
import AnimatedLogo from "../AnimatedLogo"
import MobileMenu from "../MobileMenu"
const Header = () => {
    return(
        <div className='bg-gradient-to-b from-white to-indigo-400 flex items-center p-4 justify-between w-full shadow-md'>
          <div className="flex items-center gap-3">
            <AnimatedLogo />
          </div>
          <div className='items-center block md:hidden'>
            <MobileMenu/>
          </div>
          <div className="hidden md:block">            
            <DesktopMenu/>
          </div>
  
        </div>
    )
}

export default Header 