import ProductCard from './ProductCard.jsx'
import './CategorySection.css'

export default function CategorySection({ category }) {
  return (
    <section
      className="category-section"
      id={category.id}
      aria-labelledby={`title-${category.id}`}
    >
      <h2 className="category-section__title" id={`title-${category.id}`}>
        {category.name}
      </h2>
      <ul className="category-section__grid">
        {category.products.map((product) => (
          <li className="category-section__item" key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  )
}
