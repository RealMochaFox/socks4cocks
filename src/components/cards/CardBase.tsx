import React from "react";

export default function CardBase(props: {
  children: React.ReactNode;
  hoverActions?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${props.className ?? ""} ${
        props.hoverActions
          ? "hover:shadow-2xl hover:scale-105 hover:border-2"
          : ""
      } bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center border-sockBlack transition-all ease-in-out`}
    >
      {props.children}
    </div>
  );
}
