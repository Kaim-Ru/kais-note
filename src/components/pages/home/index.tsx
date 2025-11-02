import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { formatDate } from '@/lib/date';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return (
    <MainLayout
      main={
        <div className="relative w-full min-h-screen bg-gray-50 dark:bg-[#130f18] pb-20 overflow-x-hidden">
          {/* Hero Section with Decorative Images */}
          <div className="relative w-full h-[280px] md:h-[320px] flex flex-col items-center justify-center pt-10 overflow-hidden max-w-full">
            {/* Background decorative article images - positioned behind title */}
            <div className="hidden xl:block absolute left-[-20px] top-[73px] w-[262px] h-[147px] opacity-30 rounded overflow-hidden z-0">
              <img
                src="/assets/blog/hello-world/cover.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="hidden xl:block absolute left-[264px] top-[147px] w-[247px] h-[141px] opacity-30 rounded overflow-hidden z-0">
              <img
                src="/assets/blog/dynamic-routing/cover.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="hidden xl:block absolute right-[326px] top-[70px] w-[213px] h-[120px] opacity-30 rounded overflow-hidden z-0">
              <img
                src="/assets/blog/preview/cover.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="hidden xl:block absolute right-[-20px] top-[112px] w-[276px] h-[155px] opacity-30 rounded overflow-hidden z-0">
              <img
                src="/assets/blog/dynamic-routing/cover.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>

            {/* Main Title Logo - with opaque background to hide overlapping images */}
            <div className="relative z-20 px-4 mb-6 md:mb-8">
              <div className="absolute inset-0 -m-4 bg-gray-50 dark:bg-[#130f18] blur-xl opacity-80 z-[-1]"></div>
              <img
                src="/kaisnote_title.svg"
                alt="KaisNote"
                className="h-[80px] md:h-[100px] w-auto object-contain relative z-10"
              />
            </div>

            {/* Description */}
            <p className="relative z-20 text-base md:text-[18px] text-gray-600 dark:text-[#9c8cb8] text-center max-w-[411px] mx-auto px-4">
              管理人のKaimRuが好きなこと(主にマインクラフト)に関する投稿をしていくサイトです。
            </p>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[51px] px-4 md:px-8 lg:px-[59px] mt-8 md:mt-12 w-full mx-auto max-w-full">
            {/* Latest Articles Section */}
            <div className="flex-1 min-w-0">
              <div className="bg-white dark:bg-[#251f2e] rounded-[13px] shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.25)] p-4 md:p-6">
                {/* Section Title */}
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <img
                    src="/rectangle.svg"
                    alt=""
                    className="w-[37px] h-[37px] flex-shrink-0 opacity-40"
                    style={{ mixBlendMode: 'screen' }}
                  />
                  <h2 className="text-xl md:text-[26px] text-gray-700 dark:text-[#9c8cb8] tracking-[-1.3px] font-medium">
                    最新の記事 / Latest posts
                  </h2>
                </div>

                {/* Articles Grid */}
                <div
                  className="grid gap-4 md:gap-6 w-full"
                  style={{
                    gridTemplateColumns:
                      'repeat(auto-fill, minmax(min(200px, 100%), 250px))',
                  }}
                >
                  {posts.map((post) => (
                    <Link key={post.slug} href={`/posts/${post.slug}`} passHref>
                      <a className="block group max-w-[250px]">
                        <article className="relative">
                          {/* Article Image */}
                          <div className="w-full h-[141px] bg-gradient-to-br from-blue-500 to-purple-500 rounded shadow-[0px_5px_4px_3px_rgba(0,0,0,0.06)] mb-3 md:mb-4 overflow-hidden">
                            {post.coverImage ? (
                              <img
                                src={post.coverImage}
                                alt={post.title}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500" />
                            )}
                          </div>

                          {/* Article Title */}
                          <h3 className="text-base md:text-[19px] text-gray-600 dark:text-[#8976a7] text-center tracking-[-0.95px] mb-2 md:mb-3 line-clamp-2 group-hover:text-gray-800 dark:group-hover:text-[#9c8cb8] transition-colors font-medium min-h-[3rem]">
                            {post.title}
                          </h3>

                          {/* Article Date */}
                          <time className="text-xs md:text-[13px] text-gray-500 dark:text-[#756293] tracking-[-0.65px] block text-left">
                            {formatDate(post.date)}
                          </time>
                        </article>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - hidden on mobile/tablet */}
            <div className="hidden xl:block xl:w-[16%] 2xl:w-[15%] flex-shrink-0 min-w-[220px] max-w-[300px]">
              <div className="bg-white dark:bg-[#251f2e] rounded-[13px] shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.25)] h-[560px] p-4 sticky top-[67px]">
                {/* Sidebar content can be added here */}
                <div className="text-gray-600 dark:text-[#9c8cb8] text-sm">
                  {/* Placeholder for future sidebar content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      aside={null}
    />
  );
};
