import { Date } from '@/components/common/Date';
import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export const Story = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a className="w-full h-full max-w-full overflow-hidden cursor-pointer select-none vstack md:flex-row focus:outline-2">
        <div className="relative flex-shrink-0 w-full center md:w-1/3 h-52 md:h-full bg-neutral-50 md:bg-transparent">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className="object-cover"
            layout="fill"
          />
        </div>
        <div className="gap-2 p-4 md:w-2/3 md:p-6 vstack bg-primary-1">
          <Date date={date} />
          <h3 className="text-xl font-medium text-primary-1">{title}</h3>
          <p className="font-normal text-neutral-700 dark:text-neutral-300 text-md line-clamp-2 md:line-clamp-3">
            {excerpt}
          </p>
        </div>
      </a>
    </Link>
  );
};
