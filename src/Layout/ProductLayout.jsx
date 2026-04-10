import React from "react";
import { Outlet } from "react-router-dom";

/**
 * 🧩 ProductLayout Component
 * ----------------------------------------
 * Acts as a wrapper for all product-related routes.
 * 
 * Purpose:
 * - Provides a shared layout for nested routes
 * - Renders child components using <Outlet />
 * 
 * Example:
 * /products → ProductList
 * /products/:id → ProductDetail
 */
const ProductLayout = () => {
  return (
    /**
     * 🔹 Layout Container
     * You can add shared UI here (e.g., sidebar, header, etc.)
     */
    <div>
      
      {/* 🔹 Outlet renders nested route components */}
      <Outlet />

    </div>
  );
};

export default ProductLayout;