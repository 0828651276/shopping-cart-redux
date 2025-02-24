import React from 'react'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
    <div style={{ marginBottom: 20 }}>
        <Product
            id={product.id}
            title={product.title}
            price={product.price}
            genre={product.genre}
            date={product.date}
            quantity={product.inventory} />
        <button
            onClick={onAddToCartClicked}
            disabled={product.inventory > 0 ? '' : 'disabled'}>
            {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
        <button className="btn btn-danger" type="button" onClick={() => handleRemove(product.id)}> Remove </button>
    </div>
)

export default ProductItem