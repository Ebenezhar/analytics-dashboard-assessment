import React from 'react'

import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

export const NavBar = () => {
  const props = {
    items: [
      {
        text: 'Records',
        link: '/'
      },
      {
        text: 'Charts',
        link: 'charts'
      },
      {
        text: 'Analaysis',
        link: 'analaysis'
      },
      // {
      //   text: 'Contact',
      //   link: '#contact'
      // }
    ],
    logo: {
      text: 'Analytic-Dashboard-Assessment', 
    },
    style: {
      barStyles: {
        background: '#008080'
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'white'
      }
    }
  }
  return <Navbar {...props} />
}