import React, { useState } from 'react'
import Card from './card'
import { IoIosAddCircleOutline } from "react-icons/io";


const ProductList = () => {
    const [cartCount, setCartCount] = useState(0);

  const handleAddProduct = () => {
    setCartCount(prevCount => prevCount + 1);
    console.log("Product added to cart");
  }

    const products=[
        {
            id:1,
            title:"I-Watch",
            src:"https://apollo.olx.in/v1/files/pxbd4yb9zows3-IN/image;s=300x600;q=60",
            cost:2000,
            description: "We have new latest collection ultra 5g sim watch online order book",
            seller: "Ashu Dhande"
        },
        {
            id:2,
            title:"Shirt",
            src:"https://apollo.olx.in/v1/files/zxysrl5mgop61-IN/image;s=300x600;q=60",
            cost: 300,
            description: "Men Regular Fit Self Design Lapel Collar Popcorn Shirt",
            seller: "Gaurav Pandey"
        },
        {
            id:3,
            title: "LED Projector",
            src:"https://apollo.olx.in/v1/files/0150adyrnom12-IN/image;s=780x0;q=60",
            cost: 3500,
            description: "RD6 LED projector 3d 4k wifi smart youtube live tv usb hdmi 154 inchs",
            seller: "6 Wholesale Bazaar "
        },
        {
            id:4,
            title: "IPhone",
            src:"https://apollo.olx.in/v1/files/0o9c93jy2vhw1-IN/image;s=300x600;q=60",
            cost: 6500,
            description: "iPhone 11 good",
            seller: "Mobile showroom"
        },
        {

        id: 5,
        title: "Refurbished Laptop",
        src: "https://cdn.mos.cms.futurecdn.net/Ajc3ezCTN4FGz2vF4LpQn9-1200-80.jpg",
        cost: 22000,
        description: "A certified refurbished laptop in excellent condition with a 1-year warranty.",
        seller: "TechResale"
    },
    {
        id: 6,
        title: "Used Smartphone",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSyLC3s5XchlI4LqKUgbrVyouuuRNIUNTUhg&s",
        cost: 5700,
        description: "A gently used smartphone with minimal wear and a new battery.",
        seller: "SmartphoneExchange"
    },
    {
        id: 7,
        title: "Pre-owned Gaming Console",
        src: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/494424048/665/494424048-1_2776.webp",
        cost: 9500,
        description: "A pre-owned gaming console with original packaging and two controllers.",
        seller: "GameResell"
    },
    {
        id: 8,
        title: "Second-hand Camera",
        src: "https://5.imimg.com/data5/OY/VJ/MY-13169908/digital-slr-camera.jpg",
        cost: 7000,
        description: "A second-hand DSLR camera with low shutter count and additional lenses.",
        seller: "PhotoMarket"
    },
    {
        id: 9,
        title: "Vintage Vinyl Records",
        src: "https://images-cdn.ubuy.co.in/633aa3f44885c515c471ac26-ubuy-online-shopping.jpg",
        cost: 3000,
        description: "A collection of vintage vinyl records in good condition.",
        seller: "VinylCollector"
    }
    ]
  return (
    
    <div className='All-P'>
       
        {
            products.map(item=>(
                <Card
              
                 id={item.id}
                 title={item.title}
                 src={item.src}
                 cost = {item.cost}
                 description = {item.description}
                 seller = {item.seller}
                 addButton={ <IoIosAddCircleOutline onClick={handleAddProduct} className='add-icon'  />}
                 />
                 
                 
            )

            )
        }
        <div className='count'>{`${cartCount}`}</div>
      
    </div>
  )
}

export default ProductList
