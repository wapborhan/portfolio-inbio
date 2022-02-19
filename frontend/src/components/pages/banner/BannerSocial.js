import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaCodepen,
} from "react-icons/fa";

export default function BannerSocial() {
  return (
    <div className="social-share-style-1">
      <ul className="social-share d-flex liststyle">
        <li>
          <a href="http://facebook.com/infoborhan">
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a href="https://www.github.com/wapborhan">
            <FaGithubSquare />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wapborhan/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/wapborhan/">
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a href="https://www.codepen.com/wapborhan/">
            <FaCodepen />
          </a>
        </li>
      </ul>
    </div>
  );
}
