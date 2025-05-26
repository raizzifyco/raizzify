import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// This component is a template screen that displays a gradient background,
// NOT WORKING AS EXPECTED AS OF NOW, NEEDS REFACTORING, SO USE s1, s2, s3, s4 components instead

interface TemplateScreenProps {
  gradient: {
    from: string;
    to: string;
  };
  graphic: StaticImport;
  content: {
    title: string;
    description: string;
    titleColor?: string;
    descriptionColor?: string;
  };
  imagePosition?: "left" | "right";
}

const TemplateScreen: React.FC<TemplateScreenProps> = ({
  gradient,
  graphic,
  content,
  imagePosition = "right",
}) => {
  return (
    <div
      className="relative h-screen overflow-hidden"
      style={{
        background: `linear-gradient(to top right, ${gradient.from}, ${gradient.to})`,
      }}
    >
      <div className="container mx-0">
        {/* Image section */}
        <div
          className={`absolute top-0 ${
            imagePosition === "right"
              ? "right-0 md:right-0"
              : "left-0 md:left-0"
          }`}
        >
          <Image
            src={graphic}
            className="w-auto h-[90vh] max-w-[60vw] object-contain"
            style={{
              objectPosition:
                imagePosition === "right" ? "top right" : "top left",
            }}
            alt="Graphic Image"
          />
        </div>

        {/* Content section */}
        <div className="relative w-screen overflow-hidden">
          <div
            className={`
                absolute ${
                  imagePosition === "right" ? "left-5" : "right-5"
                } top-1/2 transform -translate-y-1/2 px-4
                md:relative md:flex md:items-center md:h-screen md:transform-none
                ${
                  imagePosition === "right"
                    ? "md:ml-10 md:w-1/2"
                    : "md:ml-auto md:w-1/2"
                }
            `}
          >
            <div
              className={`text-center w-full ${
                imagePosition === "right"
                  ? "md:text-left md:ml-40"
                  : "md:text-right md:mr-40"
              }`}
            >
              <div
                className="font-jakarta font-semibold text-[2rem] md:text-[2.5rem] leading-[1.3] mb-6"
                style={{ color: content.titleColor || "#1B857C" }}
              >
                {content.title}
              </div>

              <div
                className={`font-jakarta font-normal text-[1rem] md:text-[1.5rem] leading-[1.4] max-w-[90%] mx-auto ${
                  imagePosition === "right" ? "md:mx-0" : "md:ml-auto"
                }`}
                style={{ color: content.descriptionColor || "#525252" }}
              >
                {content.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateScreen;
