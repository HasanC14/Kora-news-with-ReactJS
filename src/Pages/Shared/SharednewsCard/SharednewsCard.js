import React from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const SharednewsCard = ({ news }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="flex justify-start m-5">
          <div>
            <img src={news.author.img} alt="" className="w-11 rounded-box" />
          </div>
          <div className="ml-3">
            {news.author.name ? (
              <p className="font-semibold">{news.author.name}</p>
            ) : (
              <p className="font-semibold">Author name not found</p>
            )}
            {news.author.published_date ? (
              <p>{news.author.published_date}</p>
            ) : (
              <p>Published date not found</p>
            )}
          </div>
        </div>
        <figure>
          <img src={news.thumbnail_url} alt="thumbnail" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p>
            {news.details.slice(0, 200) + ".."}{" "}
            <Link to={`/news/${news._id}`}>Read More</Link>{" "}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <FaStar />
              {news.rating.number}
            </div>
            <div className="badge badge-outline">
              <FaEye />
              {news.total_view}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharednewsCard;
