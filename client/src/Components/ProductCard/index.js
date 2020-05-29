import React, {useState} from 'react'
import { Product, ProductContainer } from './style'
import { LikeIcon, CargoIcon } from '../../Utils/icons'
import { Seperator } from '../../Utils/seperator'
const ProductItem = ({ title, image, price, description, cargo, link }) => {
    const [like, setLike] = useState(false);
    return (
        <ProductContainer>
            <div className="like">
                <span onClick={() => setLike(!like)}><LikeIcon color={like && like ? "red" : "gray"} /></span>
            </div>
            <Product href={link && link}>
                <div className="image"><img src={image} alt={title}/></div>
                <div className="title">{ title }</div>
                <div className="description">{Seperator(description, 50)}</div>
                <div className="price">{price} TL</div>
                <div className="cargo">
                    { cargo !== "Ücretli Kargo" && <CargoIcon />}
                    <span>{cargo}</span>
                </div>
            </Product>
        </ProductContainer>
    );
};

export default ProductItem