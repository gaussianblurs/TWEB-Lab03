import React from 'react'
import '../assets/scss/Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  Navbar,
  NavbarBrand
} from 'reactstrap'

const Header = () => (
  <Navbar color="dark" className="navbar" expand="mx-auto">
    <NavbarBrand className="brand" href="/">GitHub GraphQL API</NavbarBrand>
    <a href="https://github.com/gaussianblurs/TWEB-Lab03" className="btn btn-outline-light">
      <FontAwesomeIcon className="header-btn-icon mr-2 d-inline" icon={['fab', 'github']} />
      <div className="header-btn-name d-inline">GitHub</div>
    </a>
  </Navbar>
)

export default Header
