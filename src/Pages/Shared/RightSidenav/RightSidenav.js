import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSidenav = () => {
  return (
    <div>
      {/* Google & GitHub Login */}
      <div>
        <div className="mb-5">
          <button className="btn btn-outline btn-primary pl-24 pr-24">
            Login with Google{" "}
            <span className="ml-3">
              <FaGoogle />
            </span>
          </button>
        </div>
        <div>
          <button className="btn btn-outline pl-24 pr-24">
            Login with GitHub{" "}
            <span className="ml-3">
              <FaGithub />
            </span>
          </button>
        </div>
      </div>
      {/* Socials */}
      <div className="mt-10">
        <p className="text-xl mb-5">Find Us On</p>
        <div>
          <button className="btn btn-ghost  pr-40 mb-5">
            <span className="mr-3">
              <FaFacebook />
            </span>
            Facebook
          </button>
        </div>
        <div>
          <button className="btn btn-ghost  pr-40 mb-5">
            <span className="mr-3">
              <FaYoutube />
            </span>
            YouTube
          </button>
        </div>
        <div>
          <button className="btn btn-ghost  pr-40 mb-5">
            <span className="mr-3">
              <FaTwitter />
            </span>
            Twitter
          </button>
        </div>
        <div>
          <button className="btn btn-ghost   pr-40 mb-5">
            <span className="mr-3">
              <FaWhatsapp />
            </span>{" "}
            WhatsApp
          </button>
        </div>
      </div>
      {/* BrandCarousel */}
      <BrandCarousel></BrandCarousel>
    </div>
  );
};

export default RightSidenav;
