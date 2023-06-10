import HeroBanner from './components/Banner/HeroBanner';
import { getBanners, getProducts } from '@/sanity/sanity-utils';
import Product from './components/Product';


export default async function Home(){
  const products = await getProducts(); // get all products from sanity
  const banners = await getBanners(); // get all banners from sanity
  return (
    <>
      <div>
        <HeroBanner heroBanner={banners.length && banners[0]} /> {/* display the first banner */}
        <div className="products-heading">
          <h2>Popular Meals</h2>
        </div>
        <div className="products-container">
          {products?.map((product) => <Product key={product._id} product={product} />)} {/* map through all products and display them */}
        </div>
      </div>
    </>
  );
};






