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
    <div className="flex flex-col gap-2 pt-[36px] pb-8">
      {/* Title */}
      <h1 className="text-[32px] text-mikxc-primary-200 font-bold tracking-[-1.6px] leading-tight">
        {title}
      </h1>

      {/* Date */}
      <div className="text-[18px] text-mikxc-primary-500 font-bold tracking-[-0.9px]">
        <Date date={date} />
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Link key={tag} href={`/tags/${tag}`} passHref>
              <a className="px-3 py-1 text-xs font-bold text-white bg-mikxc-primary-600 rounded hover:bg-mikxc-primary-500 transition-colors">
                {tag}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
