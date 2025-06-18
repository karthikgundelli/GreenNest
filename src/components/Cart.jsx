const Cart = ({ cartItems, total, clearCart, removeFromCart }) => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p><strong>{item.name}</strong></p>
                  <p>₹{item.price}</p>
                  <button onClick={() => removeFromCart(index)} className="remove-btn">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total: ₹{total}</p>
            <textarea placeholder="Enter delivery address..."></textarea>
            <button onClick={clearCart}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;