import { useEffect, useState } from "react";
import axios from "axios";

/**
 * ✅ Custom Hook: useFetch
 * ----------------------------------------
 * Purpose:
 * Fetch data from a given API URL and manage:
 * - data
 * - loading state
 * - error handling
 *
 * @param {string} url - API endpoint
 * @returns {Array} [data, loading, error]
 */

function useFetch(url) {
  // 🔹 State to store fetched data
  const [data, setData] = useState(null);

  // 🔹 State to track loading status
  const [loading, setLoading] = useState(true);

  // 🔹 State to store any error
  const [error, setError] = useState(null);

  useEffect(() => {
    // 🔸 Flag to prevent state update after component unmount
    let isMounted = true;

    /**
     * 🔹 Function: fetchData
     * Fetch data from API using axios
     */
    const fetchData = async () => {
      setLoading(true);
      setError(null); // reset previous errors

      try {
        const response = await axios.get(url);

        // ✅ Update state only if component is still mounted
        if (isMounted) {
          setData(response.data);
        }
      } catch (err) {
        // ❌ Handle error safely
        if (isMounted) {
          setError(err.message || "Something went wrong");
        }
      } finally {
        // 🔚 Stop loading
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    // 🔥 Call API
    fetchData();

    /**
     * 🧹 Cleanup Function
     * Prevents memory leaks if component unmounts
     */
    return () => {
      isMounted = false;
    };
  }, [url]); // 🔁 Re-run when URL changes

  // 🔙 Return data, loading, and error states
  return [data, loading, error];
}

export default useFetch;