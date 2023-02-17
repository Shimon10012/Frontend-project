/*shimon kaldearo 318643368
  chen yakov 209382779*/


import React from 'react';
import './product.css';

//component that responsible to one instance of product
class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state with the values of props
    this.state = {
      name: props.name,
      date: props.date,
      price: props.price,
      category: props.category,
      description: props.description,
    };
  }

  render() {
    return(
      <div className="card">
        <div className="card-header">
          <h5><b>{this.props.name}</b></h5>
        </div>
        <div className="card-body">
          <p><b>Date:</b> {this.props.date}</p>
          <p><b>Price:</b> {this.props.price}</p>
          <p><b>Category:</b> {this.props.category}</p>
          <p><b>Description:</b> {this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default ProductCard;
