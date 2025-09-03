import { menuItems } from "@/data";
import { menuItemProps } from "@/Types/type";
import Link from "next/link";
const Menu = ({name}:menuItemProps)=> {
    const itemsRender = name ?? menuItems;
  
    return (
    <div className='flex gap-3.5 cursor-pointer'> 
       {itemsRender.map((item, index) => <Link href={item.href} key= {index} >{item.label}          <span
            className="
              absolute bottom-0 left-0 h-[2px] w-full
              bg-yellow-500
              scale-x-0
              transform-gpu
              origin-right
              transition-transform
              duration-300
              group-hover:scale-x-100
            "
          /></Link>)}
    </div>
    )
}

export default Menu