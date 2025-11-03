import { withBasePath } from '@/lib/getBasePath';
import { PostType } from '@/types/post';
import { PostBody } from './PostBody';
import { PostHeader } from './PostHeader';

type Props = {
  post: PostType;
};

export const Post: React.VFC<Props> = ({ post }) => {
  const { title, coverImage, date, tags, content } = post;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Cover Image with Gradient Overlay */}
      {coverImage && (
        <div className="relative h-[150px] sm:h-[180px] md:h-[204px] w-full rounded-tl-[13px] rounded-tr-[13px] overflow-hidden">
          <img
            src={withBasePath(coverImage)}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#251f2e]" />
        </div>
      )}

      {/* Content */}
      <div className="px-[12px] sm:px-[14px] md:px-[16px] pb-6 sm:pb-7 md:pb-8 w-full">
        <PostHeader
          title={title}
          coverImage={coverImage}
          date={date}
          tags={tags}
        />
        <PostBody content={content} />
      </div>
    </div>
  );
};
