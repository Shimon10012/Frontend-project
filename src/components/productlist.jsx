/*shimon kaldearo 318643368
  chen yakov 209382779*/

  import ProductCard from './product';
  import './product-list.css';
  import LocalStorageWrapper from '../localstorageewrap';
  import React, { useState, useEffect } from 'react';
  
//component that responsible to the management of the product list
  export default function ProductList() {
    // state variables for month, year, previous products, and filtered products
    const [month, setMonth] = useState("2023-02");
    const [year, setYear] = useState("2023");
    const [prevProducts, setPrevProducts] = useState([]);
    const [products, setProducts] = useState([]);
  
    // useEffect hook to fetch data from local storage on component mount
    useEffect(() => {
      const getlists = async () => {
        const storage = new LocalStorageWrapper();
        const lst = await storage.getstorage();
        
        // set both previous and filtered products to fetched data
        setPrevProducts(lst);
        setProducts(lst);
      }
      
      getlists();
    }, []);
  
    // event handlers for month and year input changes
    const handleChangemonth = (event) => {
      setMonth(event.target.value);
    }
  
    const handleChangeyear = (event) => {
      setYear(event.target.value);
    }
  
    // event handler to filter products by month
    const showByMonth = (event) => {
      event.preventDefault();
      const filteredList = prevProducts.filter((item) => {
        return item.date.includes(month);
      });
      setProducts(filteredList);
      
    }
  
    // event handler to filter products by year
    const showByYear = (event) => {
      event.preventDefault();
      const filteredList = prevProducts.filter((item) => {
        return item.date.includes(year);
      });
      setProducts(filteredList);
    }
  
    // event handler to reset filtered products to previous products
    const showall = (event) => {
      event.preventDefault();
      setProducts(prevProducts);
    };
    
    // JSX for the search form and product list
  return (
    <div className='all'>
      <br></br>
    <div className='search-block'>
    <form>
<div className="search-month">
  <h3>SEARCH BY MONTH:</h3> &nbsp;&nbsp;&nbsp;&nbsp;
  <input
    type="month"
    id="monthpicker"
    min="1990-01"
    onChange={handleChangemonth}
    value={month}
    required
  /> &nbsp;&nbsp;
  <button id="search-month"className="search-btn btn btn-secondary" onClick={showByMonth}>SEARCH</button> &nbsp;&nbsp;&nbsp;&nbsp;
</div>
</form>
<form onSubmit={showByYear}>
<div className="search-year">

  <h3>SEARCH BY YEAR:</h3> &nbsp;&nbsp;&nbsp;&nbsp;
  
  <input
    type="number"
    id="yearpicker"
    min="1900"
    max="2023"
    onChange={handleChangeyear}
    value= {year}
    placeholder="2023"
    required
  /> &nbsp;&nbsp;
  <button type='submit' id="search-year" className="search-btn btn btn-secondary">SEARCH</button>
</div>
</form> &nbsp;&nbsp;
<div className="reset-div">
  <button type="reset" onClick={showall}  className=" btn btn-danger reset-button">RESET</button>
</div>
</div>

    
    <div className="product-list">
    {products.length === 0 ? (
  <div className="no-items">
    <h1 style={{ margin: "0 auto" }}>
      THERE ARE NO ITEM TO DISPLAY!!!!
    </h1>
  </div>
) : (
  <div>
    <div className='product-list'>
    <h1>THE TOTAL SUM IS: {products.reduce((total, item) => total + parseInt(item.price),0)}</h1>
    </div>
    <div className='product-list'>
    {products.map((product, index) => (
      <ProductCard
        key={index}
        name={product.name}
        date={product.date}
        price={product.price}
        category={product.category}
        description={product.description}
      />
    ))}
  </div>
  </div>
)}

    </div>
  </div>
 );}



