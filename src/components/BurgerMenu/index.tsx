import {List} from "@phosphor-icons/react"
import { burgerMenuProps } from "@/Types/type";
const BurgerMenu = ({handleClick}: burgerMenuProps) => {
    return(
    <div className='cursor-pointer text-white-700'>
    <List size={50} onClick={handleClick} />
    </div>
    )
}
export default BurgerMenu