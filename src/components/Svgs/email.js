import React from "react";

export default function IconEmail(props) {
  return (
    <a href={props.url} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="51"
        fill="none"
        viewBox="0 0 50 51"
      >
        <g clipPath="url(#clip0_428_40)">
          <path
            fill="#1A1919"
            d="M41.667 9.15H8.333c-2.291 0-4.146 1.875-4.146 4.167l-.02 25a4.179 4.179 0 004.166 4.166h33.334a4.179 4.179 0 004.166-4.166v-25a4.179 4.179 0 00-4.166-4.167zm0 8.333L25 27.9 8.333 17.483v-4.166L25 23.733l16.667-10.416v4.166z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_428_40">
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
