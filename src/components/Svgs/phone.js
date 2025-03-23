import React from "react";

export default function IconPhone(props) {
  return (
    <a href={props.url} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="51"
        fill="none"
        viewBox="0 0 50 51"
      >
        <g clipPath="url(#clip0_428_19)">
          <path
            fill="#1A1919"
            d="M41.667 33.108c-2.605 0-5.105-.417-7.438-1.187a2.126 2.126 0 00-2.125.5l-4.583 4.583a31.405 31.405 0 01-13.73-13.708l4.584-4.605c.583-.562.75-1.375.52-2.104a23.668 23.668 0 01-1.187-7.437 2.09 2.09 0 00-2.083-2.084H8.333A2.09 2.09 0 006.25 9.15c0 19.562 15.854 35.416 35.417 35.416a2.09 2.09 0 002.083-2.083v-7.292a2.09 2.09 0 00-2.083-2.083zM25 7.066V27.9l6.25-6.25h12.5V7.066H25z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_428_19">
            <path
              fill="#fff"
              d="M0 0H50V50H0z"
              transform="translate(0 .816)"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}