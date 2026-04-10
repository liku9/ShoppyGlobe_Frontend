import Body from "../components/Body";

/**
 * 🏠 Home Component
 * ----------------------------------------
 * Acts as the main landing page of the application.
 * 
 * Purpose:
 * - Renders the Body component
 * - Serves as the entry point for the home route (/)
 */
export default function Home(params) {
  return (
    /**
     * 🔹 Page Container
     * Can be extended with layout or styling if needed
     */
    <div>
      
      {/* 🔹 Main Body Component (contains hero + features) */}
      <Body />

    </div>
  );
}