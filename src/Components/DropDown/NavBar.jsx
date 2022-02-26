import React from 'react'
import MenuItemsList from './MenuItemsList';

const NavBar = ({ menuItems }) => {
    console.log("    ", menuItems)
    const depthLevel = 0;
    return (
        <nav>
            <ul className="menus">
                {menuItems.map((menu, index) => <MenuItemsList key={index} items={menu} depthLevel={depthLevel} />)}
            </ul>
            <p>
                {/* {menuItems} */}
            </p>
        </nav>
    )
}

export default NavBar