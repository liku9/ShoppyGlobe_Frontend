import React from "react";
import ProductDetail from "../components/ProductDetail";

/**
 * 📄 ProductDetailPage Component
 * ----------------------------------------
 * Acts as a page wrapper for the ProductDetail component.
 * 
 * Purpose:
 * - Displays detailed information of a selected product
 * - Keeps routing structure clean and modular
 */
const ProductDetailPage = () => {
  return (
    /**
     * 🔹 Page Container
     * Can be extended with layout styles if needed
     */
    <div>
      
      {/* 🔹 ProductDetail Component (handles product info & UI) */}
      <ProductDetail />

    </div>
  );
};

export default ProductDetailPage;