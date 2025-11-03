import { Date } from '@/components/common/Date';
import { Link } from '@/components/common/Link';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags: string[];
};

export const PostHeader = ({ title, date, tags }: Props) => {
  return (
    <div className="flex flex-col gap-2 pt-[24px] sm:pt-[30px] md:pt-[36px] pb-6 sm:pb-7 md:pb-8 w-full">
      {/* Title */}
      <h1 className="text-[24px] sm:text-[28px] md:text-[32px] text-gray-900 dark:text-gray-200 font-bold tracking-[-1.2px] sm:tracking-[-1.4px] md:tracking-[-1.6px] leading-tight break-words">
        {title}
      </h1>

      {/* Date */}
      <div className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-600 dark:text-gray-400 font-bold tracking-[-0.7px] sm:tracking-[-0.8px] md:tracking-[-0.9px]">
        <Date date={date} />
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-1 md:mt-2 w-full">
          {tags.map((tag) => (
            <Link key={tag} href={`/tags/${tag}`} passHref>
              <a className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] sm:text-[11px] md:text-xs font-bold text-white bg-teal-600 dark:bg-gray-700 rounded hover:bg-teal-700 dark:hover:bg-gray-600 transition-colors">
                {tag}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
