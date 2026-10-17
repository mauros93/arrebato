import './Header.css'

export default function Header({ categories }) {
  return (
    <header className="header">
      <div className="header__inner container">
        <a className="header__brand" href="#inicio" aria-label="ARREBATO, volver al inicio">
          <img
            className="header__logo"
            src="/logos/logo-tipografia.jpeg"
            alt="ARREBATO"
            width="1542"
            height="293"
          />
        </a>
        <nav className="header__nav" aria-label="Categorías del menú">
          {categories.map((category) => (
            <a key={category.id} className="header__link" href={`#${category.id}`}>
              {category.name}
            </a>
          ))}
        </nav>
        <a className="header__menu-link" href="#menu">
          Menú
        </a>
      </div>
    </header>
  )
}
