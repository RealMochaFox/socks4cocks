"use client";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import CardBase from "./CardBase";

export default function Impact(props: {
  title: string;
  imageSrc: StaticImport;
  impact: string;
  imageLeft?: boolean;
}) {
  return (
    <CardBase>
      <div className="flex flex-col md:flex-row md:justify-center items-center">
        <div
          className={`flex flex-col items-center justify-center md:w-1/2 w-full mb-4 md:mb-0 order-2 ${
            props.imageLeft ? "md:ml-8 md:order-2" : "md:mr-8 md:order-1"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">{props.title}</h3>
          <p className="text-lg mb-4 text-justify">{props.impact}</p>
        </div>
        <div
          className={`md:w-1/2 w-full max-w-xs order-1 ${
            props.imageLeft ? "md:order-1" : "md:order-2"
          }`}
        >
          <Image
            src={props.imageSrc}
            alt={props.title}
            className="w-full h-auto object-cover rounded-lg mb-4 md:mb-0"
          />
          <hr className="my-4 md:hidden" />
        </div>
      </div>
    </CardBase>
  );
}
