/*shimon kaldearo 318643368
  chen yakov 209382779*/
import './form.css';
import React, { useState } from 'react';
import LocalStorageWrapper from '../localstorageewrap';
//react component for the form with state of product that the user need to insert
const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    date: '',
    price:'',
    category: '',
    description: '',
  });
  //variable for the popup message
  const [showPopup, setShowPopup] = useState(false);



  //the function that responsible to insert changing in the form into the state
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  //the function is responsible to insert product from the state into the local storage asynchronically
   //using Localstoragewwrap class and after that clean the state 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const storage = new LocalStorageWrapper();
    await storage.adddtorage(product);
    setShowPopup(true);
    setProduct({
      name: '',
      date: '',
      price:'',
      category: '',
      description: '',
    });
  };
  return (
    <div>
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
   {/*the display form the user need to insert the product details*/}
    <form className="form-add p-5 border border-primary rounded" onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">ADD PRODUCT</h2>
      <div className="form-group" >
        <label htmlFor="name">NAME:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="form-control"
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="price">PRICE:</label>
        <input
          type='number'
          min="1"
          id="price"
          name="price"
          step='0.1'
          value={product.price}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">DATE:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={product.date}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      
      <div className="form-group">
  <label htmlFor="category">CATEGORY:</label>
  <select
    id="category"
    name="category"
    value={product.category}
    onChange={handleChange}
    className="form-control"
    required
  >
    <option value="" disabled selected>Select a category</option>
    <option value="sport">sport</option>
    <option value="food">food</option>
    <option value="education">education</option>
    <option value="housing">housing</option>
    <option value="electronics">electronics</option>
    <option value="other">other</option>
  </select>
</div>

      <div className="form-group">
        <label htmlFor="description">DESCRIPTION:</label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="button btn btn-primary styles.button">
         ADD PRODUCT
    </button>
  
    
    </form>
    
  </div>
  {/*this is responsible to the popup message*/ }
  {showPopup && (
        <div className="popup-container">
        <div className="popup">
          <h2>ITEM ADDED SUCCESFULLY!!!!</h2>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      </div>
      )}
  </div>
  );
};

export default AddProduct;
