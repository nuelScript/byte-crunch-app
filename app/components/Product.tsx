import React from "react";
import Link from "next/link";
import { TbCurrencyNaira } from 'react-icons/tb';

interface ProductProps {
  product: {
    image: string | string[];
    name: string;
    slug: {
      current: string;
    };
    price: number;
  };
}


const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product.slug}`}>
        <div className="product-card">
          <img
            src={product.image && product.image[0]}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{product.name}</p>
          <p className="product-price"><TbCurrencyNaira className="inline mb-0.5" size={20} />{product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
