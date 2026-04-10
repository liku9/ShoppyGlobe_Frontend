import React from "react";
import Cart from "../components/Cart";

/**
 * 🛒 CartPage Component
 * ----------------------------------------
 * Acts as a page wrapper for the Cart component.
 * 
 * Purpose:
 * - Renders the Cart UI inside a page-level container
 * - Keeps routing structure clean and modular
 */
const CartPage = () => {
  return (
    /**
     * 🔹 Page Container
     * Can be extended with layout styles if needed
     */
    <div>
      
      {/* 🔹 Cart Component (main cart functionality UI) */}
      <Cart />

    </div>
  );
};

export default CartPage;