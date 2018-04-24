import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/so.png';

const Header = (props) => (
    <header id="header" className="alt">
      <span className="logo"><img src={logo} /></span>
      <h1>Blockchain Embassy Berlin</h1>
      <p>Permissionless Collaboration</p>
    </header>
)

export default Header
