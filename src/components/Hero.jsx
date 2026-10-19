import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__inner container">
        <img
          className="hero__badge"
          src="/logos/logo-badge.webp"
          alt="Logotipo de ARREBATO: una papa con sombrero y gafas de sol"
          width="560"
          height="570"
          fetchPriority="high"
        />
        <h1 className="hero__title">
          El sabor que <em>provoca volver</em>.
        </h1>
        <p className="hero__text">
          Salchipapas, patacones y perro especial. Mira el menú completo y elige tu antojo.
        </p>
        <a className="hero__button" href="#menu">
          Ver el menú
        </a>
      </div>
    </section>
  )
}
