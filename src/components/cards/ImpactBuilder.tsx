"use client";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import CardBase from "./CardBase";

export default function ImpactBuilder(props: {
  articles: {
    title: string;
    impact: string;
    imageSrc: StaticImport;
  }[];
}) {
  return props.articles.map((article, index) => {
    const toggle = index % 2 === 0;
    console.log({ toggle });

    return (
      <CardBase key={index}>
        <div className="flex flex-col md:flex-row md:justify-center items-center">
          <div
            className={`flex flex-col items-center justify-center md:w-1/2 w-full mb-4 md:mb-0 md:mr-8 order-2 ${
              toggle ? "md:order-2" : "md:order-1"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">{article.title}</h3>
            <p className="text-lg mb-4">{article.impact}</p>
          </div>
          <div
            className={`md:w-1/2 w-full max-w-xs order-1 ${
              toggle ? "md:order-1" : "md:order-2"
            }`}
          >
            <Image
              src={article.imageSrc}
              alt={article.title}
              className="w-full h-auto object-cover rounded-lg mb-4 md:mb-0"
            />
            <hr className="my-4 md:hidden" />
          </div>
        </div>
      </CardBase>
    );
  });
}
