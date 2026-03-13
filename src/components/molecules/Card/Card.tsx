import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Icon, IconName } from '@/components/atoms/Icon/Icon';

interface CardTag {
  icon: IconName;
  label: string;
}

interface CardProps {
  status: string;
  statusType: 'drop' | 'candidate' | 'progress';
  className?: string;
  rightElement?: ReactNode;
  title: string;
  author: string;
  authorIcon?: IconName;
  tags?: CardTag[]; 
  onClick?: () => void;
}

const STATUS_COLORS = {
  progress: 'text-da-t-positive',
  candidate: 'text-da-t-link',
  drop: 'text-da-lg-red3',
};

const Card = ({ 
  status, 
  className = "",
  statusType, 
  rightElement, 
  title, 
  author,
  authorIcon = "man",
  tags = [], 
  onClick 
}: CardProps) => {
  return (
    <motion.article
      data-component="card-wrap"
      onClick={onClick}
      className={`
        relative cursor-pointer flex flex-col items-start w-full p-[24px] bg-white rounded-[16px] border-2 transition-all duration-300
        border-transparent shadow-sm 
        hover:border-[#4A5EDA] 
        hover:shadow-[4px_4px_12px_rgba(104,122,230,0.25),-2px_-2px_12px_rgba(255,0,0,0.15)]
        ${className} /* min-w-[448px]를 여기서 제거하고 외부에서 제어하게 합니다 */
      `}
    >
      {/* 1st Row */}
      <div data-component="card-division" className="flex justify-between items-center w-full mb-[12px]">
        <span className={`text-da-b2 font-bold ${STATUS_COLORS[statusType]}`}>{status}</span>
        {rightElement && <div className="flex items-center">{rightElement}</div>}
      </div>

      {/* 2nd Row */}
      <h2 data-component="card-title" className="text-da-h2 text-da-t-title font-bold mb-[16px] truncate w-full break-all">{title}</h2>

      {/* 3rd Row */}
      <div data-component="card-author" className="flex items-center gap-[8px] mb-[20px]">
        <Icon name={authorIcon} size="sm" className="text-da-t-description" />
        <span className="text-da-b2 text-da-t-description">{author}</span>
      </div>

      {/* 4th Row */}
      {tags.length > 0 && (
        <div data-component="card-point" className="flex items-center place-content-evenly gap-[24px] w-full p-[8px_16px] bg-da-bg1 rounded-[8px] self-stretch">
          {tags.map((tag, index) => (
            <div key={index} className="flex items-center gap-[8px]">
              <Icon name={tag.icon} size="sm" className="text-da-t-description" />
              <span className="text-da-b3 text-da-t-description whitespace-nowrap tuncate">
                {tag.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </motion.article>
  );
};

export default Card;