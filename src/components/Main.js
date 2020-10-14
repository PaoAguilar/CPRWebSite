import PropTypes from 'prop-types'
import React from 'react'
import pred1 from '../images/pred1.jpg'
import pred2 from '../images/pred2.jpg'
import pred3 from '../images/pred3.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pred1} alt="" />
          </span>
          <p>
            <h5>Misión</h5>
            Brindar soluciones por medio de análisis predictivo y utilizando las mejores tecnologías del mercado,
            para que nuestros clientes puedan tener información valiosa para tomar decisiones.
          </p>
          <p>
            <h5>Visión</h5>
            Ser la empresa consultora líder de análisis predictivo en Centro América,
            apoyando a nuestros clientes por medio de información valiosa acerca de riesgos y oportunidades futuras.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Acerca</h2>
          <span className="image main">
            <img src={pred2} alt="" />
          </span>
          <p>
            Quevedo Consultores S.A. de C.V. presenta a sus clientes la oportunidad de optar por consultoría sobre
            la implantación de soluciones que empleen el análisis predictivo para anticiparse a los resultados de los
            productos o servicios que tengan en el mercado, identificar nuevas oportunidades de crecimiento,
            así como tomar medidas para optimizar y hacer más eficiente el negocio basándose en el mencionado análisis,
            entre otros beneficios. Esto a través del empleo de conocimientos, técnicas y herramientas basadas en BigData.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Trabajos</h2>
          <span className="image main">
            <img src={pred3} alt="" />
          </span>
          <p>
            <h5>Análisis predictivo</h5>
            Realizamos un plan de marketing digital más efectivo ya que previamente se analizan
            los datos para averiguar el comportamiento de un cliente y así poder basar el tipo de estrategia
            a utilizar.
          </p>
          <p>
            <h5>Retención de clientes</h5>
            Ya que retener a los clientes que ya se tienen es menos costoso que adquirir nuevos,
            el análisis predictivo puede proporcionar una visión profunda del comportamiento de la
            rotación de clientes en la empresa.
          </p>
          <p>
            <h5>Optimización web</h5>
            Se puede profundizar en la forma en que los visitantes interactúan y se involucran en la
            web mediante el procesamiento de docenas de variables de datos a través de modelos predictivos.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contacto</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Enviar mensaje" className="special" />
              </li>
              <li>
                <input type="reset" value="Reiniciar" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/QuevedoConsult1" target="_blank"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Quevedo-consultores-107186371165389/" target="_blank" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/quevedoconsultores/" target="_blank" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div >
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
