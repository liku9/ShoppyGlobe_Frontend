import "./index.css";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * 🌐 App Component (Root Layout)
 * ----------------------------------------
 * This is the root component of the application.
 * 
 * Responsibilities:
 * - Provides global Redux store using <Provider>
 * - Renders common layout components (Header & Footer)
 * - Displays routed components using <Outlet />
 */
function App() {
  return (
    /**
     * 🔹 Redux Provider
     * Makes global state available across the app
     */
    <Provider store={appStore}>
      
      {/* 🔹 Header (visible on all pages) */}
      <Header />

      {/* 🔹 Routed Content */}
      {/* Outlet renders the matched child route component */}
      <Outlet />

      {/* 🔹 Footer (visible on all pages) */}
      <Footer />

    </Provider>
  );
}

export default App;