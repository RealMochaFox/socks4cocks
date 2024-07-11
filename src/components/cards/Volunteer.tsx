"use client";
import React, { useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import CardBase from "./CardBase";

export default function Volunteer(props: {
  imageSrc: StaticImport;
  name: string;
  bio: string;
  isOpen?: boolean;
  className?: string;
  facts: { type: string; list: string[] };
}) {
  const [isBioExpanded, setIsBioExpanded] = useState(props.isOpen ?? false);

  const toggleBio = () => {
    setIsBioExpanded(!isBioExpanded);
  };

  return (
    <CardBase
      hoverActions={true}
      className={`max-w-lg ${props.className ?? ""}`}
    >
      <Image
        src={props.imageSrc}
        alt={props.name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{props.name}</h3>
      <div className={`${!isBioExpanded ? "line-clamp-3" : ""}`}>
        <p className="text-justify text-lg">{props.bio}</p>
        <div className="mt-4 text-left">
          <h4 className="text-lg font-semibold mb-2">{props.facts.type}:</h4>
          <ul className="list-disc list-inside text-lg">
            {props.facts.list.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={toggleBio}
        className="text-blue-500 hover:text-blue-700 mt-2"
      >
        {isBioExpanded ? "Show Less" : "Show More"}
      </button>
    </CardBase>
  );
}
