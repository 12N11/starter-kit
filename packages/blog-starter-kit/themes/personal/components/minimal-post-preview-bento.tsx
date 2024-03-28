import React from 'react';
import Link from 'next/link';
import { DateFormatter } from './date-formatter';
import ChatBubbleSVG from './icons/svgs/ChatBubbleSVG';
import { BentoGridItem } from './ui/bento-grid';


type Author = {
  name: string;
};

type MinimalPostPreviewBentoProps = {
  title: string;
  date: string;
  author: Author;
  slug: string;
  commentCount: number;
  coverImageUrl?: string;
};

export const MinimalPostPreviewBento = ({
  title,
  date,
  author,
  slug,
  commentCount,
  coverImageUrl,
}: MinimalPostPreviewBentoProps) => {
  const postURL = `/${slug}`;

  // Prepare the header component, which typically includes the title.
  const header = (
    <h3 className="text-xl md:text-xl text-center font-bold ">
      <Link href={postURL}>
        {title}
      </Link>
    </h3>
  );

  // Icon (or image) to be displayed, if available.
  const icon = coverImageUrl ? (
    <img src={coverImageUrl} alt={`Cover image for ${title}`} className="rounded-lg" />
  ) : null;

  // Description could include the date and comment count.
  const description = (
    <>
	<div className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 text-center">
      <DateFormatter dateString={date}/>
	  </div>
      {commentCount > 0 && (
        <div className="flex items-center mt-2">
          {commentCount}
          <ChatBubbleSVG className="h-5 ml-1" />
        </div>
      )}
    </>
  );

  return (
    <BentoGridItem
      className="p-4"
      header={header}
      icon={icon}
      description={description}
    />
  );
};
