import React from "react";
import styles from "./Section.module.css";
export { styles };

export enum SectionType {
  HeroParallax = "HeroParallax",
  Parallax = "Parallax",
  Background = "Background",
  Plain = "Plain",
}

type SectionTypeClasses = {
  [key in SectionType]: {
    section?: string;
    container?: string;
  };
};

const classesForType: SectionTypeClasses = {
  [SectionType.HeroParallax]: {
    section: `px-4 relative h-screen ${styles.parallax} ${styles.heroBackgroundImage}`,
    container: `relative flex flex-col items-center justify-center h-full`,
  },
  [SectionType.Parallax]: {
    section: `px-4 py-16 relative overflow-hidden ${styles.parallax} ${styles.heroBackgroundImage}`,
  },
  [SectionType.Background]: {
    section: `px-4 py-16 relative ${styles.heroBackground} ${styles.heroBackgroundImage}`,
  },
  [SectionType.Plain]: {
    section: "px-4 py-16",
  },
};

export default function Section(props: {
  type: SectionType;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${styles.baseStyle} ${classExistsForSectionType(
        props.type,
        "section"
      )} ${props.className ?? ""}`}
    >
      {props.type === SectionType.HeroParallax ||
      props.type === SectionType.Parallax ||
      props.type === SectionType.Background ? (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      ) : null}

      <div className={classExistsForSectionType(props.type, "container")}>
        {props.children}
      </div>
    </section>
  );
}

function classExistsForSectionType(
  type: SectionType,
  classType: keyof SectionTypeClasses[SectionType]
): string {
  if (
    typeof classesForType[type] === "object" &&
    `${classType}` in classesForType[type] &&
    classesForType[type][classType] !== undefined
  ) {
    return classesForType[type][classType];
  }
  return "";
}
