import React from "react";

export default function IconPin(props) {
  return (
    <a href={props.url} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="51"
        fill="none"
        viewBox="0 0 50 51"
      >
        <g clipPath="url(#clip0_428_52)">
          <path
            fill="#1A1919"
            d="M25 4.667c-8.063 0-14.583 6.52-14.583 14.583C10.417 30.188 25 46.334 25 46.334S39.583 30.188 39.583 19.25c0-8.062-6.52-14.583-14.583-14.583zm0 19.792a5.21 5.21 0 01-5.208-5.209A5.21 5.21 0 0125 14.042a5.21 5.21 0 015.208 5.208A5.21 5.21 0 0125 24.46z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_428_52">
            <path
              fill="#fff"
              d="M0 0H50V50H0z"
              transform="translate(0 .5)"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}
