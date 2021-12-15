import React from 'react'
import { useProductContext } from '../../context/ProductContext'

export default function DetailProduct() {
    const context=useProductContext();

    return (
        <div>
            <p>DETALLE</p>
            <p>{context.selectedProduct.product_name}</p>
            <p>{context.selectedProduct.description}</p>
            <p>{context.selectedProduct.category}</p>
            <p>{context.selectedProduct.brand}</p>
        </div>
    )
}

