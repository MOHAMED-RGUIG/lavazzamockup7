import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productAction';
import Product from '../components/product';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function Homescreen() {
    const dispatch = useDispatch();
    const { products, error, loading } = useSelector(state => state.products);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category filter

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    const filteredProducts = products.filter(product => {
        // Filter by product name
        const matchesName = product.name.toLowerCase().includes(searchQuery.toLowerCase());

        // Filter by category (if category is selected)
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;

        // Return true if both name and category filters match
        return matchesName && matchesCategory;
    });

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <div className='search-bar col-11 col-xl-8 col-md-11 text-center mt-5'>
                <h2 className='mb-3'> </h2>
                <input
                    className="form-control text-center"
                    id="search-input"
                    type='search'
                    placeholder='Search by product name ...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
              
            </div>
           
            <img src="https://i.postimg.cc/W1cMftDX/Lavazza1.jpg" alt="Lavazza" className='col-11 col-md-11 mt-3' />

            <div className="category-buttons mt-5 col-xs-12 col-12 col-md-12 col-xl-10">
    <button 
        className={`category-btn ${selectedCategory === '' ? 'active' : ''} col-xs-3 col-3 col-md-3`} 
        onClick={() => handleCategoryChange('')}
    >
        All 
    </button>
    {['nondecaf', 'caf', 'other'].map((category) => (
        <button
       
            key={category} 
            className={`category-btn ${selectedCategory === category ? 'active' : ''} col-xs-3 col-3 col-md-3`} 
            onClick={() => handleCategoryChange(category)}
        >
            {category}
        </button>
    ))}
</div>

            <div className='row justify-content-center col-xl-10 col-md-12 col-12 mx-auto'>
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error error='Something went wrong' />
                ) : (
                    filteredProducts.map((product) => (
                        <div key={product._id} className='col-12 col-md-6' >
                            <Product product={product}  />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
