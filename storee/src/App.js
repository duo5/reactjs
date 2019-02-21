import React, { Component } from 'react';
import './App.css';



function ProductInfo(props){
  return (
    <div className="wrapper">
      <img className="image" src={props.img} alt={props.name}/>
      <h2>{props.name}</h2>
      <h3>{props.des}</h3>
      <h5>{props.img}</h5>
      <h4>Price: {props.price}</h4>
    </div>
  );
}

const product = {
name:"Her",
des:"A girl",
price:2000,
img:"http://lorempixel.com/400/200/city/"
}

class App extends Component {
  render() {
    return (
      <ProductInfo img={product.img} 
      name={product.name} 
      des={product.des}
      price={product.price}
      />
    );
  }
}

export default App;
