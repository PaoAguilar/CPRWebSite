import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <a><img className="image" src={logo} alt="" /></a>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Quevedo Consultores</h1>
        <p>
          A fully responsive site template designed by{' '}
          <a href="https://html5up.net">HTML5 UP</a> and released
          <br />
          for free under the{' '}
          <a href="https://html5up.net/license">Creative Commons</a> license.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Trabajos
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Acerca
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contacto
          </button>
        </li>
      </ul>
    </nav>
  </header >
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
