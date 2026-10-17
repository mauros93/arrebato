import menu from './data/menu.json'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CategoryNav from './components/CategoryNav.jsx'
import CategorySection from './components/CategorySection.jsx'
import Footer from './components/Footer.jsx'
import { useActiveSection } from './lib/useActiveSection.js'

const categories = menu.categories
const categoryIds = categories.map((category) => category.id)
const NAV_OFFSET = 68

export default function App() {
  const activeId = useActiveSection(categoryIds, NAV_OFFSET)

  return (
    <>
      <a className="skip-link" href="#menu">
        Ir al menú
      </a>
      <Header categories={categories} />
      <main>
        <Hero />
        <div className="menu" id="menu">
          <CategoryNav categories={categories} activeId={activeId} />
          <div className="menu__list container">
            {categories.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
