import { PostType } from '@/types/post';
import { PostBody } from './PostBody';
import { PostHeader } from './PostHeader';

type Props = {
  post: PostType;
};

export const Post: React.VFC<Props> = ({ post }) => {
  const { title, coverImage, date, tags, content } = post;

  return (
    <div className="relative">
      {/* Cover Image with Gradient Overlay */}
      {coverImage && (
        <div className="relative h-[204px] w-full rounded-tl-[13px] rounded-tr-[13px] overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#251f2e]" />
        </div>
      )}

      {/* Content */}
      <div className="px-[16px] pb-8">
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
