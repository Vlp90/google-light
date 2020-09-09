// ITS A CUSTOM HOOK

import { useState, useEffect } from "react";
import API_KEY from "./key";

const CONTEXT_KEY = "3014a9c8a553ac470";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  // datalayer variable which GET result from term
  return { data };

  // RETURN AN OBJECT
};

export default useGoogleSearch;
