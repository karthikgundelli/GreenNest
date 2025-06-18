import React from 'react';
import './style.css';

const productsData = [
  { id: 1, name: 'Organic Apple', category: 'fruit', price: 120, image: 'https://images.heb.com/is/image/HEBGrocery/000320637' },
  { id: 2, name: 'Organic Banana', category: 'fruit', price: 60, image: 'https://tse4.mm.bing.net/th?id=OIP.4jaDolOgQkmp97yU1WUMcgHaHa&pid=Api&P=0&h=180' },
  { id: 3, name: 'Organic Carrot', category: 'veggie', price: 40, image: 'https://tse3.mm.bing.net/th?id=OIP.DsHcDE14j4_9Pbd4QEu-uwHaFG&pid=Api&P=0&h=180' },
  { id: 4, name: 'Organic Spinach', category: 'veggie', price: 30, image: 'https://tse2.mm.bing.net/th?id=OIP.040MMbJbiGxRxXlOLz8MHAHaHa&pid=Api&P=0&h=180' },
  { id: 5, name: 'Organic Tomato', category: 'veggie', price: 25, image: 'https://tse1.mm.bing.net/th?id=OIP.Re2CyQT6zw4muM4OiJSjRgHaHa&pid=Api&P=0&h=180' },
  { id: 6, name: 'Organic Mango', category: 'fruit', price: 90, image: 'https://tse2.mm.bing.net/th?id=OIP.hfHF1MmknuBNfPFeV_EXjwHaG0&pid=Api&P=0&h=180' },
  { id: 7, name: 'Organic Grapes', category: 'fruit', price: 70, image: 'https://media.riverford.co.uk/images/organic-seedless-grapes-1100x1100-a9ecd6a0efea75c5f721d9933d319a77.jpg' },
  { id: 8, name: 'Organic Onion', category: 'veggie', price: 20, image: 'http://www.agrifarming.in/wp-content/uploads/2018/03/Growing-Organic-Onions.-e1523106941962.jpg' },
  { id: 9, name: 'Organic Potato', category: 'veggie', price: 22, image: 'https://tse2.mm.bing.net/th?id=OIP.Q5SdayDXe-rnypXaszTkBQHaE7&pid=Api&P=0&h=180' },
  { id: 10, name: 'Organic Cucumber', category: 'veggie', price: 35, image: 'https://freshgenfoods.com/wp-content/uploads/2021/11/Cucumbers-scaled.jpg' },
  { id: 11, name: 'Organic Papaya', category: 'fruit', price: 55, image: 'https://tse4.mm.bing.net/th?id=OIP._E7vO0DtjDOF8OOEg0A7ygHaHa&pid=Api&P=0&h=180' },
  { id: 12, name: 'Organic Pomegranate', category: 'fruit', price: 100, image: 'https://tse4.mm.bing.net/th?id=OIP.9bMpnjCL52QuCrr6i9jgvwAAAA&pid=Api&P=0&h=180' },
  { id: 13, name: 'Organic Broccoli', category: 'veggie', price: 60, image: 'https://tse4.mm.bing.net/th?id=OIP.q5YlmyQMI4FAmm7JxY-XjQHaHa&pid=Api&P=0&h=180' },
  { id: 14, name: 'Organic Pumpkin', category: 'veggie', price: 45, image: 'https://tse1.mm.bing.net/th?id=OIP.MJaZ6F4FFBRf7wnLhYUu7QHaEo&pid=Api&P=0&h=180' },
  { id: 15, name: 'Organic Lemon', category: 'fruit', price: 15, image: 'https://www.spiceboxorganics.com/wp-content/uploads/2020/02/Eat-Fresh-3-lemons-FINAL.jpg' },
  { id: 16, name: 'Organic Guava', category: 'fruit', price: 50, image: 'https://tse4.mm.bing.net/th?id=OIP.me7vFaVBWLcE_GsdDzX3DQHaE7&pid=Api&P=0&h=180' },
  { id: 17, name: 'Organic Beetroot', category: 'veggie', price: 28, image: 'https://tse1.mm.bing.net/th?id=OIP.CiF19smgNpWRZOWYuGzCWgAAAA&pid=Api&P=0&h=180' },
  { id: 18, name: 'Organic Beans', category: 'veggie', price: 32, image: 'https://tse4.mm.bing.net/th?id=OIP.fiymp6UYz1fqNGm7hqYXNgHaHa&pid=Api&P=0&h=180' },
  { id: 19, name: 'Organic Cauliflower', category: 'veggie', price: 38, image: 'https://tse4.mm.bing.net/th?id=OIP.jZ20ZMatKk9QMLr54EiN0AHaFs&pid=Api&P=0&h=180' },
  { id: 20, name: 'Organic Brinjal', category: 'veggie', price: 26, image: 'https://tse1.mm.bing.net/th?id=OIP.xpXUiYR0axroPfHFExIXcgHaEw&pid=Api&P=0&h=180' },
];

const Home = ({ addToCart, categoryFilter }) => {
  const filteredProducts = categoryFilter
    ? productsData.filter((item) => item.category === categoryFilter)
    : productsData;

  return (
    <div className="home">
      <h1 className="title">Welcome to GreenNest</h1>
      <div className="products">
        {filteredProducts.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
