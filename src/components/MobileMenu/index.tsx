'use client'
import { useState } from 'react'
import BurgerMenu from '../BurgerMenu'
import { menuItems } from '@/data'
import Link from 'next/link'
import { menuItemProps } from '@/Types/type'
const MobileMenu = (name: menuItemProps) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()  => {
        setIsOpen(prev => !prev);
    }
    return (
        <div className='relative'>
         <BurgerMenu handleClick={toggleMenu}/>
          {isOpen && (
            <div className ={'absolute bg-black text-white p-4 rounded mt-7 right-0 w-38 z-50 '}>
                <div className = 'flex flex-col gap-2'> 
                  {menuItems.map((item, index) => (
                    <Link href = {item.href} key= {index}>{item.label}</Link>
                  ))}
                </div>
            </div>   
          )}  
          
        </div>
        
    )
}

export default MobileMenu