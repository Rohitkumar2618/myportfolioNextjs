
import Link from "next/link"; 
import { FC } from "react";

import Image, { StaticImageData } from "next/image";

interface FeaturedCardProps {
  logo?: string; // Optional logo
  title: string;
  tag: string;
  video: string | StaticImageData; 
  active: boolean;
  link?: string; // Add link prop
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  // tag,
  video,
  active,
  link,
}) => {
  const cardContent = (
    <div
      className={`w-full h-full bg-secondary-background   
        border border-border
        shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 shrink-0 flex-nowrap p-2 transition-all duration-300 ease-in-out
        ${active ? "grayscale-0" : "grayscale"}`}
    >
      {/* Header */}

      {/* Body */}
      <div className="relative flex p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
        <Image
          src={video}
          alt={title}
          className="rounded-md object-left"
          fill
          style={{ objectFit: 'cover' }} // Use inline style for objectFit
          priority
        />
      </div>

      {/* Logo */}
      {logo && (
        <div className="flex justify-center mt-4">
          <Image
            src={logo}
            alt={`${title} Logo`}
            width={100}
            height={100}
            className="rounded-md"
            unoptimized // Optional: only if necessary
          />
        </div>
      )}
    </div>
  );

  // Return the card content wrapped in a Link if a link is provided, 
  // while maintaining its original styling
  return link ? (
    <Link href={link} passHref>
      <div className="w-full h-full"> {/* Adding an outer div to maintain structure */}
        {cardContent}
      </div>
    </Link>
  ) : (
    cardContent
  );
};

export default FeaturedCard;