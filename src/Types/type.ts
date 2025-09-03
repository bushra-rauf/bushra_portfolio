export interface MenuItem {
   label: string;
   href: string;
}

export type menuItemProps =  {
   name:MenuItem[];
}

export interface logoProps {
   image: string;
   href: string;
}

export type burgerMenuProps = {
   handleClick: () => void;

}