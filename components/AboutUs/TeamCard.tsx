import React from "react";
import Image from "next/image";

interface TeamCardProps {
  image: string;
  title: string;
  description: string;
  alt: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, title, description, alt }) => {
  return (
    <div className="bg-[var(--secondary-bg)] rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-[190px] rounded-2xl overflow-hidden mb-6">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <h3 className="text-about-quote font-semibold text-[var(--black)] mb-4">
        {title}
      </h3>
      <p className="text-about-small-text text-[var(--gray-text)]">
        {description}
      </p>
    </div>
  );
};

export default TeamCard;
