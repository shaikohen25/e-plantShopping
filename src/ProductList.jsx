import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice'; // Make sure to import the addItem reducer

function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const [addedToCart, setAddedToCart] = useState({}); // Track plants added to cart

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                // Add other plants...
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                // Add other plants...
            ]
        },
        // Include other categories and plants here
    ];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };

    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    const handleAddToCart = (plant) => {
        // Dispatch the selected plant to CartSlice
        addItem(plant);
        
        // Update state to reflect the plant has been added
        setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Display cart
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false); // Show products, hide cart
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false); // Close cart, continue shopping
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={handlePlantsClick} style={styleA}>Plants</a></div>
                    <div> <a href="#" onClick={handleCartClick} style={styleA}><h1 className='cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                            <circle cx="80" cy="216" r="12"></circle>
                            <circle cx="184" cy="216" r="12"></circle>
                            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                    </h1></a></div>
                </div>
            </div>
            <div className="product-grid">
                {plantsArray.map((category) =>
                    category.plants.map((plant) => (
                        <div key={plant.name} className="product-card">
                            <img src={plant.image} alt={plant.name} />
                            <h3>{plant.name}</h3>
                            <p>{plant.description}</p>
                            <p>{plant.cost}</p>
                            <button 
                                onClick={() => handleAddToCart(plant)}
                                disabled={addedToCart[plant.name]}
                            >
                                {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    ))
                )}
            </div>
            {showCart && <CartItem onContinueShopping={handleContinueShopping}/>}
        </div>
    );
}

export default ProductList;
