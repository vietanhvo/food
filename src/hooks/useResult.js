import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [result, setResult] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const searchApi = async searchTerm => {
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResult(res.data.businesses);
    } catch (err) {
      setErrMsg("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, [])

  return [searchApi, result, errMsg];
}

