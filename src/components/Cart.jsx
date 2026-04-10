import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingBag,
  ChevronLeft,
  ShoppingCart,
} from "lucide-react";
import { useSelector } from "react-redux";

/**
 * 🛒 Cart Component
 * ----------------------------------------
 * Displays all items added to the cart.
 * Handles:
 * - Syncing Redux cart data with local state
 * - Rendering cart items
 * - Showing empty state UI when cart is empty
 */
const Cart = () => {
  // 🔹 Local state to store cart items
  const [cartItems, setCartItems] = useState([]);

  // 🔹 Get cart items from Redux store
  const selector = useSelector((state) => state.cart.cartItems);

  /**
   * 🔹 Sync local state with Redux store
   * Runs whenever Redux cart state changes
   */
  useEffect(() => {
    setCartItems(selector);
  }, [selector]);

  /**
   * 🔹 Empty Cart UI
   * Rendered when no items exist in cart
   */
  if (!cartItems.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg px-6">
        <div className="max-w-md w-full text-center space-y-8 p-12 bg-light-surface dark:bg-dark-surface rounded-[3rem] border-2 border-dashed border-light-border dark:border-dark-border">
          
          {/* Empty cart icon */}
          <div className="relative mx-auto w-24 h-24 bg-light-primary/10 rounded-full flex items-center justify-center text-light-primary">
            <ShoppingBag size={48} />
          </div>

          {/* Empty message */}
          <div>
            <h1 className="text-3xl font-black text-light-text dark:text-dark-text uppercase tracking-tighter">
              Your cart is empty
            </h1>
            <p className="text-light-muted mt-2 font-medium text-lg">
              Add some premium items to your basket to proceed with checkout.
            </p>
          </div>

          {/* Navigate back to shop */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-light-text dark:bg-dark-primary text-white dark:text-dark-bg px-8 py-4 rounded-2xl font-black transition-transform active:scale-95 shadow-xl"
          >
            <ChevronLeft size={20} />
            BACK TO SHOP
          </Link>
        </div>
      </div>
    );
  }

  /**
   * 🔹 Main Cart UI
   * Rendered when cart has items
   */
  return (
    <div className="min-h-screen w-full bg-light-bg dark:bg-dark-bg py-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-8">
        
        {/* ================= Cart Header ================= */}
        <div className="w-full flex items-center justify-between mb-4">
          
          {/* Title */}
          <h1 className="text-4xl font-black text-light-text dark:text-dark-text tracking-tighter uppercase">
            Your{" "}
            <span className="text-light-primary dark:text-dark-primary">
              Basket
            </span>
          </h1>

          {/* Item count */}
          <span className="text-lg font-bold text-light-muted bg-light-surface dark:bg-dark-surface px-4 py-2 rounded-2xl border border-light-border dark:border-dark-border">
            {cartItems.length}{" "}
            {cartItems.length === 1 ? "Item" : "Items"}
          </span>
        </div>

        {/* ================= Cart Items ================= */}
        {cartItems.length > 0 ? (
          <div className="w-full flex flex-col gap-8 items-center">
            
            {/* Loop through cart items */}
            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}

                  /**
                   * 🔹 Calculate discounted price
                   * Formula:
                   * price - (price * discount%)
                   */
                  discountedPrice={(
                    item.price *
                    (1 - item.discountPercentage / 100)
                  ).toFixed(2)}
                />
              );
            })}

            {/* Continue Shopping */}
            <Link
              to="/products"
              className="flex items-center gap-2 text-light-primary font-black uppercase tracking-widest hover:underline mt-4"
            >
              <ArrowLeft size={20} />
              Continue Shopping
            </Link>
          </div>
        ) : (
          /**
           * 🔹 Fallback Empty State
           * (Rare case - already handled above)
           */
          <div className="flex flex-col items-center justify-center py-20 text-center gap-6 bg-light-surface dark:bg-dark-surface w-full rounded-[3rem] border-2 border-dashed border-light-border dark:border-dark-border">
            
            {/* Icon */}
            <div className="p-8 bg-light-bg dark:bg-dark-bg rounded-full text-light-muted opacity-50">
              <ShoppingCart size={80} strokeWidth={1} />
            </div>

            {/* Message */}
            <div>
              <h2 className="text-3xl font-black text-light-text dark:text-dark-text mb-2">
                Your cart is empty
              </h2>
              <p className="text-xl text-light-muted font-medium mb-8">
                Looks like you haven't added anything yet!
              </p>

              {/* Start shopping button */}
              <Link
                to="/products"
                className="bg-light-primary dark:bg-dark-primary text-white dark:text-dark-bg px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-light-primary/20 transition-transform active:scale-95"
              >
                START SHOPPING
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;