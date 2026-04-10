import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";
import "./index.css";
import Loading from "./components/Loading";
import ProductLayout from "./Layout/ProductLayout";

/**
 * ⚡ Lazy Loading (Code Splitting)
 * ----------------------------------------
 * Components are loaded only when needed,
 * improving performance and reducing initial bundle size.
 */
const ProductList = lazy(() => import("./components/ProductList"));
const Home = lazy(() => import("./pages/Home"));
const ProductDetailPage = lazy(() =>
  import("./pages/ProductDetailPage")
);
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));

/**
 * 🌐 Application Routing Configuration
 * ----------------------------------------
 * Defines all routes using React Router
 * Includes:
 * - Nested routes
 * - Lazy loading with Suspense
 * - Error handling
 */
const appRouter = createBrowserRouter([
  {
    path: "/",

    /**
     * 🔹 Root Layout
     * Contains Header, Footer, and Outlet
     */
    element: <App />,

    /**
     * 🔹 Global Error Boundary
     */
    errorElement: <Error />,

    /**
     * 🔹 Child Routes
     */
    children: [
      {
        /**
         * 🏠 Home Route (/)
         */
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },

      {
        /**
         * 📦 Products Routes (/products)
         * Uses ProductLayout for nested routing
         */
        path: "products",
        element: <ProductLayout />,
        errorElement: <Error />,

        children: [
          {
            /**
             * 📋 Product List (/products)
             */
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <ProductList />
              </Suspense>
            ),
          },

          {
            /**
             * 📄 Product Detail (/products/:id)
             */
            path: ":id",
            element: (
              <Suspense fallback={<Loading />}>
                <ProductDetailPage />
              </Suspense>
            ),
          },

          {
            /**
             * ❌ Catch-all route for invalid product paths
             */
            path: "*",
            element: <Error />,
          },
        ],
      },

      {
        /**
         * 🛒 Cart Route (/cart)
         */
        path: "cart",
        element: (
          <Suspense fallback={<Loading />}>
            <CartPage />
          </Suspense>
        ),
      },

      {
        /**
         * 💳 Checkout Route (/checkout)
         */
        path: "checkout",
        element: (
          <Suspense fallback={<Loading />}>
            <CheckoutPage />
          </Suspense>
        ),
      },
    ],
  },
]);

/**
 * 🚀 Application Entry Point
 * ----------------------------------------
 * Renders the app into the root DOM node
 * and provides routing configuration
 */
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);