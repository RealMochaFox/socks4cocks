import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import CardBase from "./CardBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type StandardCard = {
  title: string;
  description: string;
  icon?: IconDefinition;
};

type CustomContentCard = {
  children: React.ReactNode;
  icon?: IconDefinition;
};

export default function KeyPoint(props: StandardCard | CustomContentCard) {
  return (
    <CardBase hoverActions={true}>
      <div className="mr-4">
        {props.icon ? (
          <FontAwesomeIcon
            icon={props.icon}
            className="text-cockRed fa-3x mb-4"
          />
        ) : null}
      </div>
      <div>
        {"children" in props ? (
          props.children
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
            <p className="text-lg">{props.description}</p>
          </>
        )}
      </div>
    </CardBase>
  );
}
