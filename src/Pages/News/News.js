import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaEye } from "react-icons/fa";
const News = () => {
  const news = useLoaderData();
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={news.thumbnail_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p>{news.details}</p>
          <div className="flex justify-between mt-2">
            <div className="flex justify-between">
              <img
                src={news.author.img}
                alt=""
                className="w-14 rounded-full mr-3"
              />
              <div>
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
            <div className="card-actions justify-end mt-3">
              <div className="badge badge-outline p-5">
                <FaStar />
                {news.rating.number}
              </div>
              <div className="badge badge-outline p-5">
                <FaEye />
                {news.total_view}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
