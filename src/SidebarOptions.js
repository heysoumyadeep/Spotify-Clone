import React from 'react';
import './SidebarOptions.css';

function SidebarOptions({ items, Icon }) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption_icon" />}
            {Icon ? <h4>{items}</h4> : <p>{items}</p>}
        </div>
    )
}

export default SidebarOptions
