import React from "react";
import Checkout from "../components/Checkout";

/**
 * 💳 CheckoutPage Component
 * ----------------------------------------
 * Acts as a page wrapper for the Checkout component.
 * 
 * Purpose:
 * - Renders the checkout UI
 * - Keeps routing structure modular and clean
 */
const CheckoutPage = () => {
  return (
    /**
     * 🔹 Page Container
     * Can be extended with layout styling if needed
     */
    <div>
      
      {/* 🔹 Checkout Component (handles order & payment flow) */}
      <Checkout />

    </div>
  );
};

export default CheckoutPage;