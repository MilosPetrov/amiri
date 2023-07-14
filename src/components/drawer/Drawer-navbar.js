import React from 'react'
import {X} from 'phosphor-react'

import './drawer.css';

export default function DrawerNavbar(props) {
  return (
        <div className='drawer-navbar'>
            <h2>SHOPPING BAG</h2>
            <div className='drawer-navbar-x'>
                <X size={24} weight='light' onClick={props.isClosed} />
            </div>
        </div>  
    )
}
