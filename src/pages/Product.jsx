import React from "react";
// import { Header } from '../components/Header'
import { Productlist } from "../components/ProductList";
import { Outlet } from "react-router-dom";

/**
 * 📦 Product Page Component
 * ----------------------------------------
 * Displays the list of all products.
 * 
 * Purpose:
 * - Acts as a main page for product browsing
 * - Renders ProductList component
 * - Can be extended to support nested routes using <Outlet />
 */
const Product = () => {
  return (
    /**
     * 🔹 Page Container
     */
    <div>
      
      {/* 🔹 Product List (main product browsing UI) */}
      <Productlist />

      {/* 🔹 Outlet (for future nested routes if needed) */}
      {/* Currently not used, but kept for scalability */}
      {/* <Outlet /> */}

    </div>
  );
};

export default Product;