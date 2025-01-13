import React from 'react'
import { Outlet } from 'react-router';
import { NavBar } from './NavBar_Component';

function NavLayout() {
    return (
        <>
          <NavBar /> 
          <div className='position-sticky top-0'> 
            <Outlet /> 
          </div>
        </>
      );
}

export default NavLayout