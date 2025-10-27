"use client";

import { IconType } from "react-icons";

type SocialLinkProps = {
  icon: IconType;
  url: string;
  label: string;
  color: string;
};

export const SocialLink = ({
  icon: Icon,
  url,
  label,
  color,
}: SocialLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        p-3 rounded-full bg-gray-900 border border-gray-700 
        transition-all duration-300 transform hover:scale-110 
        hover:bg-gray-800 hover:border-gray-600 ${color}
        group relative
      `}
      aria-label={`Visit our ${label}`}
    >
      <Icon className="text-2xl text-gray-300 group-hover:text-white transition-colors" />

      <div
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded 
                    opacity-0 group-hover:opacity-100 transition-opacity 
                    pointer-events-none whitespace-nowrap font-nunito-sans"
      >
        {label}
      </div>
    </a>
  );
};
