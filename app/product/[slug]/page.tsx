import { getProduct, getProducts } from '@/sanity/sanity-utils';
import React from 'react'

type Props ={
    params: {
        slug: string;
    }
}

export default async function ProductDetails({params}: Props) {
    const slug = params.slug;
    const product = await getProduct(slug);
   
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={product.image && product.image[0]}/>
          </div>
        </div>
      </div>
    </div>
  );
}

