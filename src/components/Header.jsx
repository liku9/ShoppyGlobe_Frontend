import { ShoppingCart, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { SiGooglehome } from "react-icons/si";
import { GrProductHunt } from "react-icons/gr";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

/**
 * 🧭 Header Component
 * ----------------------------------------
 * Handles:
 * - Navigation links (Home, Products, Checkout)
 * - Theme toggle (light/dark)
 * - Cart item count display
 * - Mobile responsive menu (drawer)
 */
export default function Header() {
  // 🔹 Controls mobile menu open/close state
  const [open, setOpen] = useState(false);

  // 🔹 Theme state (dark mode toggle)
  const [dark, setDark] = useState(false);

  // 🔹 Detect if current screen is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 🔹 Cart items count (local state)
  const [cartItems, setCartItems] = useState(0);

  // 🔹 Get cart quantity from Redux store
  const selector = useSelector((state) => state.cart.totalQuantity);

  /**
   * 🔹 Sync cart count with Redux store
   * Runs whenever Redux state updates
   */
  useEffect(() => {
    setCartItems(selector);
  }, [selector]);

  /**
   * 🔹 Theme Sync with HTML Root
   * Adds/removes "dark" class for Tailwind
   */
  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  /**
   * 🔹 Handle Window Resize
   * - Updates mobile state
   * - Closes menu when switching to desktop
   */
  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) setOpen(false);
    }

    window.addEventListener("resize", handleResize);

    // Run once initially
    handleResize();

    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    /**
     * 🔹 Main Navigation Container
     */
    <nav className="bg-light-surface dark:bg-dark-surface text-md font-semibold border-b border-light-border dark:border-dark-border transition-colors duration-200 sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex h-16 items-center justify-between">
          
          {/* ================= LOGO ================= */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-light-primary dark:text-dark-primary"
          >
            ShoppyGlobe
          </NavLink>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden md:flex items-center space-x-16">
            
            <NavLink
              to="/"
              className="text-gray-700 dark:text-dark-text flex gap-1 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              <SiGooglehome className="mt-1" />
              Home
            </NavLink>

            <NavLink
              to="/products"
              className="text-gray-700 dark:text-dark-text flex gap-1 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              <GrProductHunt className="mt-1" />
              Products
            </NavLink>

            <NavLink
              to="/checkout"
              className="text-gray-700 dark:text-dark-text flex gap-1 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              <MdOutlineShoppingCartCheckout className="mt-1" />
              Checkout
            </NavLink>
          </div>

          {/* ================= RIGHT SIDE ICONS ================= */}
          <div className="flex items-center space-x-4">
            
            {/* 🔹 Theme Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>

            {/* 🔹 Cart Icon with Badge */}
            <NavLink
              to="/cart"
              className="p-2 relative hover:bg-light-border dark:hover:bg-dark-border rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-light-text dark:text-dark-text" />

              {/* Show cart count if items exist */}
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-light-accent dark:bg-dark-accent text-white dark:text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </NavLink>

            {/* 🔹 Mobile Menu Toggle Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="w-6 h-6 text-light-text dark:text-dark-text" />
              ) : (
                <Menu className="w-6 h-6 text-light-text dark:text-dark-text" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          open
            ? "opacity-100 visible backdrop-blur-sm bg-light-text/20 dark:bg-black/40"
            : "opacity-0 invisible backdrop-blur-0"
        }`}
        onClick={() => setOpen(false)}
      >
        {/* ================= MOBILE DRAWER ================= */}
        <div
          className={`absolute top-0 right-0 w-3/4 max-w-xs h-screen bg-light-surface dark:bg-dark-surface shadow-2xl transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Drawer Header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-light-border dark:border-dark-border">
            <span className="text-xl font-bold text-light-primary dark:text-dark-primary">
              Menu
            </span>

            <button onClick={() => setOpen(false)} className="p-2">
              <X className="w-6 h-6 text-light-text dark:text-dark-text" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col p-4 space-y-2">
            
            {/* Navigation Links */}
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/products" onClick={() => setOpen(false)}>
              Products
            </NavLink>

            <NavLink to="/checkout" onClick={() => setOpen(false)}>
              Checkout
            </NavLink>

            {/* Cart Link with Badge */}
            <NavLink
              to="/cart"
              className="flex items-center justify-between"
              onClick={() => setOpen(false)}
            >
              <span className="font-semibold">My Cart</span>

              {cartItems > 0 && (
                <span className="bg-dark-primary text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}