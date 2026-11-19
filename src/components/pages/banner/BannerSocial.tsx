"use client";
import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaCodepen,
} from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

export default function BannerSocial() {
  return (
    <div className="social-share-style-1">
      <ul className="social-share d-flex liststyle">
        <li>
          <a
            href="http://facebook.com/wapborhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/wapborhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/wapborhan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/wapborhan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a
            href="https://www.codepen.io/wapborhan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCodepen />
          </a>
        </li>
        <li>
          <a
            href="https://play.google.com/store/apps/developer?id=SR+Dream+Lab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillAndroid />
          </a>
        </li>
      </ul>
    </div>
  );
}
