import { menuItems } from "@/data"
import Menu from "../Menu"
const DesktopMenu = () => {
    return(
        <div className='hidden md:flex justify-end font-bold tracking-wide p-6 text-violet-700 text-2xl'>
        <Menu name={menuItems}  />
        </div>
    )
}

export default DesktopMenu