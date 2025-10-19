"use client";

import { socialLinks } from "@/lib/data/constant";
import { SocialLink } from "./SocialLink";

type BrandSectionProps = {
  brandText: string;
};

export const BrandSection = ({ brandText }: BrandSectionProps) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold text-white ">{brandText}</h2>
      <div className="flex items-center justify-center gap-6">
        {socialLinks.map((link) => (
          <SocialLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  );
};
