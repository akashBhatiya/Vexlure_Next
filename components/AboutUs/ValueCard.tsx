import React from "react";

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <div className="bg-[var(--white)] rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 border border-[var(--border)]">
      <h3 className="text-about-quote font-semibold text-[var(--black)] mb-4">
        {title}
      </h3>
      <p className="text-about-small-text text-[var(--gray-text)]">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
