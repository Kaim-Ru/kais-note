import { NextSeo } from 'next-seo';
import { ToggleSection } from '@/components/common/ToggleSection';
import { MainLayout } from '@/components/features/app/Layout';
import { Post } from '@/components/features/post/Post';
import { Toc } from '@/components/features/post/Toc';
import { ROOT_URL } from '@/config/app';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { joinPath } from '@/lib/joinPath';
import { PostType } from '@/types/post';

type Props = {
  post: PostType;
};

export const Posts: React.VFC<Props> = ({ post }) => {
  const lg = useBreakPoint('lg');
  const imageURL = joinPath(ROOT_URL, post.ogImage.url);

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{
          url: ROOT_URL,
          title: post.title,
          description: post.excerpt,
          images: [
            {
              url: imageURL,
            },
          ],
        }}
      />
      <MainLayout
        main={
          <div className="w-full min-h-screen bg-gray-50 dark:bg-[#130f18] pb-20">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[51px] px-4 md:px-8 lg:px-[34px] pt-[62px] w-full mx-auto max-w-full">
              {/* Left Sidebar */}
              <aside className="hidden lg:block w-[259px] flex-shrink-0 sticky top-[67px] self-start">
                <div className="flex flex-col gap-6">
                  {/* Table of Contents */}
                  {lg && (
                    <div className="bg-white dark:bg-[#251f2e] rounded-[13px] shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.25)] px-[18px] py-[4px]">
                      <Toc />
                    </div>
                  )}

                  {/* Category Navigation */}
                  <div className="bg-white dark:bg-[#251f2e] rounded-[13px] shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.25)] px-[13px] py-[4px]">
                    <h3 className="text-[17px] text-gray-800 dark:text-gray-200 font-medium tracking-[-0.85px] h-[38px] flex items-center">
                      アドオン関連：
                    </h3>

                    <div className="flex flex-col gap-[2px]">
                      <ToggleSection
                        title="チュートリアル"
                        defaultOpen={true}
                        titleClassName="text-[17px] text-gray-700 dark:text-gray-300 tracking-[-0.85px]"
                      >
                        <div className="flex flex-col gap-0 pl-[12px] text-[17px] text-gray-600 dark:text-gray-400 tracking-[-0.85px]">
                          <div className="h-[29.5px] flex items-center">
                            1.はじめに
                          </div>
                          <div className="h-[29.5px] flex items-center">
                            2.インストール
                          </div>
                        </div>
                      </ToggleSection>

                      <ToggleSection
                        title="ビヘイビアパック"
                        defaultOpen={false}
                        titleClassName="text-[17px] text-gray-600 dark:text-gray-400 tracking-[-0.85px]"
                      >
                        <div className="flex flex-col gap-0 pl-[12px] text-[17px] text-gray-600 dark:text-gray-400 tracking-[-0.85px]"></div>
                      </ToggleSection>

                      <ToggleSection
                        title="リソースパック"
                        defaultOpen={false}
                        titleClassName="text-[17px] text-gray-600 dark:text-gray-400 tracking-[-0.85px]"
                      >
                        <div className="flex flex-col gap-0 pl-[12px] text-[17px] text-gray-600 dark:text-gray-400 tracking-[-0.85px]"></div>
                      </ToggleSection>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1 min-w-0 max-w-[960px]">
                <article className="bg-white dark:bg-[#251f2e] rounded-[13px] shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.25)] overflow-hidden">
                  <Post post={post} />
                </article>
              </div>

              {/* Right Sidebar */}
              <aside className="hidden xl:block w-[259px] flex-shrink-0 top-[67px] self-start">
                <div className="bg-white dark:bg-[#251f2e] rounded-[13px] shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.25)] p-4 h-[200px]">
                  {/* Placeholder */}
                </div>
              </aside>
            </div>
          </div>
        }
        aside={null}
        hamburgerMenu={
          <div
            role="button"
            tabIndex={0}
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent('keydown', { key: 'Escape' }),
              )
            }
            onKeyDown={() => {}}
            className="overflow-y-auto cursor-default"
          >
            <Toc />
          </div>
        }
      />
    </>
  );
};
