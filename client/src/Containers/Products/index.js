import React from 'react';
import { getProducts } from '../../Query'
import ProductItem from '../../Components/ProductCard'
import { ProductAppContainer } from './style'

export const ProductApp = ({ loading, error, products }) => {
    if (loading) return <h1>Yükleniyor...</h1>;
    if (error) return <h1>ERROR</h1>;
    return (
        <ProductAppContainer>
            {
                products && products.map(({ title, price, image, description, cargo, link }, i) => (
                    <ProductItem
                        key={i}
                        title={title}
                        price={price}
                        image={image}
                        description={description}
                        cargo={cargo}
                        link={link}
                    />
                ))
            }
        </ProductAppContainer>
    )
}

export const ProductCard = getProducts(ProductApp);