import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const LeftSidenav = () => {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://kora-news-server-hasanc14.vercel.app/categories")
      .then((res) => res.json())
      // .then((data) => console.log(data)n
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <p className="text-2xl text-center ">All Categories</p>
      <div className="text-xl m-4">
        {Categories.map((Category) => (
          <p key={Category.id}>
            <Link to={`/Category/${Category.id}`}>{Category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSidenav;
