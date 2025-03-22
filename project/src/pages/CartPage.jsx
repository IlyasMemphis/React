import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import styles from "../styles/CartPage.module.css";
import { useCart } from "../components/Cart";
import { useEffect } from "react";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const itemPrice = item.discont_price ?? item.price;
    return sum + itemPrice * item.quantity;
  }, 0);

  const discountApplied = localStorage.getItem("discountApplied") === "true";
  const discount = discountApplied ? 0.05 : 0;

  const totalPriceWithDiscount = discountApplied
    ? totalPrice * 0.95
    : totalPrice;
    
    useEffect(() => {
        window.scrollTo(0, 0);
      });

  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendOrder = (orderData) => {
    if (cart.length === 0) {
      setMessage("The cart is still empty!");
      setIsModalOpen(true);
    } else {
      Axios.post("http://localhost:3333/order/send", { orderData })
        .then(() => {
          setIsModalOpen(true);
          setMessage("Your order has been successfully placed.");
        })
        .catch(() => {
          setIsModalOpen(true);
          setMessage("There was an error processing your order.");
        });
    }
  };

  const handleCloseModal = () => {
    localStorage.removeItem("cart");
    setIsModalOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <section className={styles.cartContainer}>
      <h1 className={styles.title}>Shopping cart</h1>
      <div className={styles.cartContent}>
        <div className={styles.itemsList}>
          {cart.length === 0 ? (
            <p>Looks like you have no items in your basket currently.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={`http://localhost:3333${item.image}`} alt={item.title} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <div className={styles.quantityControls}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <input type="text" value={item.quantity} readOnly />
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div className={styles.itemPrice}>
                    {item.discont_price ? (
                      <>
                        <span className={styles.currentPrice}>
                          ${(item.discont_price * item.quantity).toFixed(2)}
                        </span>
                        <span className={styles.oldPrice}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className={styles.currentPrice}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                <button className={styles.removeItem} onClick={() => removeFromCart(item.id)}>×</button>
              </div>
            ))
          )}
        </div>

        <div className={styles.orderSummary}>
          <h3>Order details</h3>
          <p>{totalItems} items</p>
          <h2 className={styles.totalPrice}>${totalPriceWithDiscount.toFixed(2)}</h2>
          {discountApplied && <p className={styles.discountMessage}>You've received a 5% discount!</p>}

          <form className={styles.orderForm} onSubmit={handleSubmit(sendOrder)}>
  <input
    type="text"
    placeholder="Name"
    {...register("name", { required: "Name is required" })}
    className={errors.name ? styles.inputError : ""}
  />
  {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}

  <input
    type="tel"
    placeholder="Phone number"
    {...register("phone", {
      required: "Phone number is required",
      pattern: {
        value: /^[0-9]{11}$/,
        message: "Invalid phone number format",
      },
    })}
    className={errors.phone ? styles.inputError : ""}
  />
  {errors.phone && <p className={styles.errorMessage}>{errors.phone.message}</p>}

  <input
    type="email"
    placeholder="Email"
    {...register("email", {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Invalid email format",
      },
    })}
    className={errors.email ? styles.inputError : ""}
  />
  {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}

  <button type="submit" className={styles.orderButton}>Order</button>
</form>
        </div>
      </div>

      <div className={`${styles.modalOverlay} ${isModalOpen ? styles.active : ""}`}>
        <div className={styles.modalContent}>
          <h2>🎉 {cart.length === 0 ? "Oops!" : "Congratulations!"}</h2>
          <p>{cart.length === 0 ? message : "Your order has been successfully placed on the website."}</p>
          <button onClick={handleCloseModal} className={styles.modalCloseButton}>OK</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
