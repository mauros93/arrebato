import { formatPrice } from '../lib/formatPrice.js'
import './ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      {product.image && (
        <div className="product-card__media">
          <img
            className="product-card__image"
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <ul className="product-card__prices">
          {product.prices.map((price) => (
            <li
              className="product-card__price"
              key={price.label ?? price.value}
            >
              {price.label && (
                <span className="product-card__price-label">{price.label}</span>
              )}
              <span className="product-card__price-value">{formatPrice(price.value)}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
