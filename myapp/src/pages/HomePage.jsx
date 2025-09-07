import React from 'react'
import products from '../data/products';
import ProductSection from '../components/ProductSection';
import ImageCarousel from '../components/ImageCarousel';
import '../App.css';

function HomePage() {
  const trending = products.filter(p => p.category === 'trending');
  const chargers = products.filter(p => p.category === 'charger');
  const cables = products.filter(p => p.category === 'cable');
  const neckbands = products.filter(p => p.category === 'neckband');

  return (
     <div>
      <div className="css-107">
        <ImageCarousel />
      </div>
      <ProductSection title="Trending" products={trending} category="trending" />
      <ProductSection title="Chargers" products={chargers} category="charger" />
      <ProductSection title="Cables" products={cables} category="cable" />
      <ProductSection title="Neckbands" products={neckbands} category="neckband" />
    </div>
  )
}

export default HomePage
