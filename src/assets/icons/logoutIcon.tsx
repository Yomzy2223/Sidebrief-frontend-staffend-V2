import React from "react";

const LogoutIcon = ({
  className,
}: {
  className?: { svg?: any; path?: any };
}) => {
  return (
    <svg
      className={className?.svg}
      width="20"
      height="20"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className?.path}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.43283 18.8332H5.36116C3.32449 18.8332 1.66699 17.1757 1.66699 15.1373V5.86317C1.66699 3.82484 3.32449 2.1665 5.36116 2.1665H9.42366C11.462 2.1665 13.1203 3.82484 13.1203 5.86317V6.63984C13.1203 6.98484 12.8403 7.26484 12.4953 7.26484C12.1503 7.26484 11.8703 6.98484 11.8703 6.63984V5.86317C11.8703 4.51317 10.7728 3.4165 9.42366 3.4165H5.36116C4.01366 3.4165 2.91699 4.51317 2.91699 5.86317V15.1373C2.91699 16.4865 4.01366 17.5832 5.36116 17.5832H9.43283C10.7762 17.5832 11.8703 16.4898 11.8703 15.1465V14.3607C11.8703 14.0157 12.1503 13.7357 12.4953 13.7357C12.8403 13.7357 13.1203 14.0157 13.1203 14.3607V15.1465C13.1203 17.1798 11.4653 18.8332 9.43283 18.8332Z"
        fill="#ED4E3A"
      />
      <mask
        id="mask0_9641_101934"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="7"
        y="9"
        width="12"
        height="3"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.49707 9.875H18.7812V11.125H7.49707V9.875Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_9641_101934)">
        <path
          className={className?.path}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.1562 11.125H8.12207C7.77707 11.125 7.49707 10.845 7.49707 10.5C7.49707 10.155 7.77707 9.875 8.12207 9.875H18.1562C18.5012 9.875 18.7812 10.155 18.7812 10.5C18.7812 10.845 18.5012 11.125 18.1562 11.125Z"
          fill="#ED4E3A"
        />
      </g>
      <mask
        id="mask1_9641_101934"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="15"
        y="7"
        width="4"
        height="7"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0918 7.4458H18.7813V13.5548H15.0918V7.4458Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_9641_101934)">
        <path
          className={className?.path}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7166 13.5548C15.5566 13.5548 15.3958 13.4939 15.2741 13.3706C15.0308 13.1256 15.0316 12.7306 15.2758 12.4873L17.2708 10.4998L15.2758 8.51309C15.0316 8.26976 15.0299 7.87476 15.2741 7.62976C15.5174 7.38476 15.9124 7.38476 16.1574 7.62809L18.5974 10.0573C18.7158 10.1739 18.7816 10.3339 18.7816 10.4998C18.7816 10.6656 18.7158 10.8256 18.5974 10.9423L16.1574 13.3723C16.0358 13.4939 15.8758 13.5548 15.7166 13.5548Z"
          fill="#ED4E3A"
        />
      </g>
    </svg>
  );
};

export default LogoutIcon;
