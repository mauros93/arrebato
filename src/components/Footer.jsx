import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <img
          className="footer__mascot"
          src="/logos/logo-mascota.jpeg"
          alt="Mascota de ARREBATO: una papa con sombrero y gafas de sol"
          width="489"
          height="481"
          loading="lazy"
          decoding="async"
        />
        <p className="footer__brand">ARREBATO</p>
        <p className="footer__tagline">El sabor que provoca volver.</p>
      </div>
    </footer>
  )
}
