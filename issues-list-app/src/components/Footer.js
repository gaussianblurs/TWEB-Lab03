import React from 'react'
import '../assets/scss/Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <div className="footer bg-dark text-white text-center py-2">
    MADE WITH <FontAwesomeIcon className="d-inline" icon="heart" style={{ color: 'red' }} /> BY <a href="https://github.com/gaussianblurs">gaussianblurs</a>
  </div>
)

export default Footer
