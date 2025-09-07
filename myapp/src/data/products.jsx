import Charger1 from '../assets/product_images/Charger1.png'
import Charger2 from '../assets/product_images/Charger2.png'
import Charger3 from '../assets/product_images/Charger3.png'
import Charger4 from '../assets/product_images/Charger4.png'
import Charger5 from '../assets/product_images/Charger5.png'
import Charger6 from '../assets/product_images/Charger6.png'
import Charger7 from '../assets/product_images/Charger7.png'
import Charger8 from '../assets/product_images/Charger8.png'
import Charger9 from '../assets/product_images/Charger9.png'

import Cable1 from '../assets/product_images/Cable1.png'
import Cable2 from '../assets/product_images/Cable2.png'
import Cable3 from '../assets/product_images/Cable3.png'
import Cable4 from '../assets/product_images/Cable4.png'
import Cable6 from '../assets/product_images/Cable6.png'
import Cable7 from '../assets/product_images/Cable7.png'
import Cable8 from '../assets/product_images/Cable8.png'
import Cable9 from '../assets/product_images/Cable9.png'
import Cable10 from '../assets/product_images/Cable10.png'
import Cable11 from '../assets/product_images/Cable11.png'
import Cable12 from '../assets/product_images/Cable12.png'

import Earbud1 from '../assets/product_images/Earbud1.png'
import Earbud2 from '../assets/product_images/Earbud2.png'
import Earbud3 from '../assets/product_images/Earbud3.png'
import Earbud4 from '../assets/product_images/Earbud4.png'
import Earbud5 from '../assets/product_images/Earbud5.png'

import Neckband1 from '../assets/product_images/Neckband1.png'
import Neckband2 from '../assets/product_images/Neckband2.png'
import Neckband3 from '../assets/product_images/Neckband3.png'
import Neckband4 from '../assets/product_images/Neckband4.png'
import Neckband5 from '../assets/product_images/Neckband5.png'
import Neckband6 from '../assets/product_images/Neckband6.png'
import Neckband7 from '../assets/product_images/Neckband7.png'
import Neckband8 from '../assets/product_images/Neckband8.png'

const chargerImageGallery = [Charger1, Charger2, Charger3, Charger4, Charger5, Charger6, Charger7, Charger8, Charger9];
const cableImageGallery = [Cable1, Cable2, Cable3, Cable4, Cable6, Cable7, Cable8, Cable9, Cable10, Cable11, Cable12]
const neckbandImageGallery = [Neckband1, Neckband2, Neckband3, Neckband4, Neckband5, Neckband6, Neckband7, Neckband8, Earbud1,Earbud2,Earbud3,Earbud4,Earbud5,]

const products = [
  // Charger Category
  { id: 1, name: "Fast USB-C Charger", price: 999, image: Charger1, images: chargerImageGallery,category: "charger" },
  { id: 2, name: "Wireless Charging Pad", price: 1499, image: Charger2 , images: chargerImageGallery, category: "charger" },
  { id: 3, name: "Multi-Port Charger", price: 1999, image:Charger3 ,images: chargerImageGallery, category: "charger" },
  { id: 4, name: "65W GaN Charger", price: 2599, image: Charger4,images: chargerImageGallery, category: "charger" },
  { id: 5, name: "2-Port USB Charger", price: 799, image: Charger5,images: chargerImageGallery, category: "charger" },
  { id: 22, name: "Wireless Charging Pad", price: 1499, image: Charger6 , images: chargerImageGallery, category: "charger" },
  { id: 23, name: "Multi-Port Charger", price: 1999, image:Charger7 ,images: chargerImageGallery, category: "charger" },
  { id: 24, name: "65W GaN Charger", price: 2599, image: Charger8,images: chargerImageGallery, category: "charger" },
  { id: 25, name: "2-Port USB Charger", price: 799, image: Charger9,images: chargerImageGallery, category: "charger" },


  // Cable Category
  { id: 6, name: "Braided USB-C Cable", price: 499, image: Cable1, images: cableImageGallery,category: "cable" },
  { id: 7, name: "Tangle-Free Micro USB", price: 299, image: Cable2, images: cableImageGallery,category: "cable" },
  { id: 8, name: "Lightning Cable 2m", price: 599, image: Cable3, images: cableImageGallery,category: "cable" },
  { id: 9, name: "Nylon Braided USB-C Cable", price: 549, image: Cable4, images: cableImageGallery,category: "cable" },
  { id: 10, name: "USB-C to Lightning Cable", price: 899, image: Cable12, images: cableImageGallery,category: "cable" },
  { id: 11, name: "High-Speed Data Cable", price: 399, image: Cable6, images: cableImageGallery,category: "cable" },
  { id: 12, name: "Fast Charging Micro USB", price: 299, image: Cable7, images: cableImageGallery,category: "cable" },
  { id: 26, name: "Lightning Cable 2m", price: 599, image: Cable8, images: cableImageGallery,category: "cable" },
  { id: 27, name: "Nylon Braided USB-C Cable", price: 549, image: Cable9, images: cableImageGallery,category: "cable" },
  { id: 28, name: "USB-C to Lightning Cable", price: 899, image: Cable10, images: cableImageGallery,category: "cable" },
  { id: 29, name: "High-Speed Data Cable", price: 399, image: Cable11, images: cableImageGallery,category: "cable" },
  { id: 30, name: "Fast Charging Micro USB", price: 299, image: Cable12, images: cableImageGallery,category: "cable" },



  // Neckband Category
  { id: 36, name: "Bluetooth Neckband", price: 1299, image: Earbud4, images: neckbandImageGallery,category: "neckband" },
  { id: 13, name: "Magnetic Neckband", price: 799, image: Neckband1, images: neckbandImageGallery,category: "neckband" },
  { id: 14, name: "Sports Neckband", price: 999, image: Neckband2, images: neckbandImageGallery,category: "neckband" },
  { id: 15, name: "Bluetooth Neckband", price: 1299, image: Neckband3, images: neckbandImageGallery,category: "neckband" },
  { id: 31, name: "Magnetic Neckband", price: 799, image: Neckband4, images: neckbandImageGallery,category: "neckband" },
  { id: 32, name: "Sports Neckband", price: 999, image: Neckband5, images: neckbandImageGallery,category: "neckband" },
  { id: 33, name: "Bluetooth Neckband", price: 1299, image: Earbud1, images: neckbandImageGallery,category: "neckband" },
  { id: 34, name: "Magnetic Neckband", price: 799, image: Earbud2, images: neckbandImageGallery,category: "neckband" },
  { id: 35, name: "Sports Neckband", price: 999, image: Earbud3, images: neckbandImageGallery,category: "neckband" },
  { id: 37, name: "Magnetic Neckband", price: 799, image: Earbud5, images: neckbandImageGallery,category: "neckband" },
  { id: 38, name: "Sports Neckband", price: 999, image: Neckband6, images: neckbandImageGallery,category: "neckband" },
  { id: 39, name: "Bluetooth Neckband", price: 1299, image: Neckband7, images: neckbandImageGallery,category: "neckband" },
  { id: 40, name: "Bluetooth Neckband", price: 1299, image: Neckband8, images: neckbandImageGallery,category: "neckband" },


  // Trending Category (उदाहरण के लिए)
  { id: 16, name: "Tangle-Free Micro USB", price: 299, image: Cable2, images: cableImageGallery,category: "trending" },
  { id: 17, name: "Bluetooth Neckband", price: 1299, image: Earbud1, images: neckbandImageGallery,category: "trending" },
  { id: 18, name: "65W GaN Charger", price: 2599, image: Charger8,images: chargerImageGallery, category: "trending" },
  { id: 19, name: "Lightning Cable 2m", price: 599, image: Cable1, images: cableImageGallery,category: "trending" },
  { id: 20, name: "Nylon Braided USB-C Cable", price: 549, image: Cable2, images: cableImageGallery,category: "trending" },
  { id: 21, name: "USB-C to Lightning Cable", price: 899, image: Cable1, images: cableImageGallery,category: "trending" },
  { id: 41, name: "Multi-Port Charger", price: 1999, image:Charger3 ,images: chargerImageGallery, category: "trending" },
  { id: 42, name: "65W GaN Charger", price: 2599, image: Charger4,images: chargerImageGallery, category: "trending" },
  { id: 43, name: "2-Port USB Charger", price: 799, image: Charger5,images: chargerImageGallery, category: "trending" },
];
export default products;