import './CategoryNav.css'

export default function CategoryNav({ categories, activeId }) {
  return (
    <nav className="category-nav" aria-label="Categorías">
      <ul className="category-nav__list">
        {categories.map((category) => {
          const isActive = category.id === activeId
          return (
            <li key={category.id}>
              <a
                className={`category-nav__link${isActive ? ' category-nav__link--active' : ''}`}
                href={`#${category.id}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {category.name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
