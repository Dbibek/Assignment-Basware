import axios from "axios";
import { useState, useEffect } from "react";

const URL = "https://www.ag-grid.com/example-assets/olympic-winners.json";

const useFetchData = () => {
  const [players, setplayers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let fetchedData = true;
    axios
      .get(URL)
      .then((response) => setplayers(response.data))

      .catch((err) => {
        setError(err);
      });
    return () => {
      fetchedData = !fetchedData;
    };
  }, []);

  return { players, error };
};
export default useFetchData;
