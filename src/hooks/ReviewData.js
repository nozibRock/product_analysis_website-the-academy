import { useState } from "react";
import { useEffect } from "react";


const UseReviewData = () => {
  // Fake data for showing courses
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/Reviews.JSON")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return data;
};
export default UseReviewData;