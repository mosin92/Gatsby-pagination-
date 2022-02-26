import React from 'react';
import MenuItemsList from './MenuItemsList';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    // console.log("---- Dropdown component ",dropdown ,submenus[0])
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
            {submenus[0].map((submenu, index) => (
                <MenuItemsList items={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
    )
};

export default Dropdown;
