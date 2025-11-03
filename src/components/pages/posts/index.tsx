import { NextSeo } from 'next-seo';
import { useState } from 'react';
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          <div className="w-full min-h-screen bg-gray-50 dark:bg-[#130f18] pb-12 sm:pb-16 md:pb-20">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-[51px] px-3 sm:px-4 md:px-6 lg:px-[34px] pt-[50px] sm:pt-[56px] md:pt-[62px] w-full mx-auto max-w-full">
              {/* Left Sidebar */}
              <aside className="hidden lg:block lg:w-[20%] xl:w-[18%] flex-shrink-0 sticky top-[67px] self-start">
                <div className="flex flex-col gap-4 xl:gap-6">
                  {/* Table of Contents */}
                  {lg && (
                    <div className="bg-white dark:bg-[#251f2e] rounded-[13px] shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.25)] px-[14px] xl:px-[18px] py-[4px]">
                      <Toc />
                    </div>
                  )}

                  {/* Category Navigation */}
                  <div className="bg-white dark:bg-[#251f2e] rounded-[13px] shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.25)] px-[10px] xl:px-[13px] py-[4px]">
                    <h3 className="text-[15px] xl:text-[17px] text-gray-800 dark:text-gray-200 font-medium tracking-[-0.75px] xl:tracking-[-0.85px] h-[34px] xl:h-[38px] flex items-center">
                      アドオン関連：
                    </h3>

                    <div className="flex flex-col gap-[2px]">
                      <ToggleSection
                        title="チュートリアル"
                        defaultOpen={true}
                        titleClassName="text-[15px] xl:text-[17px] text-gray-700 dark:text-gray-400 tracking-[-0.75px] xl:tracking-[-0.85px]"
                      >
                        <div className="flex flex-col gap-0 pl-[10px] xl:pl-[12px] text-[15px] xl:text-[17px] text-gray-600 dark:text-gray-400 tracking-[-0.75px] xl:tracking-[-0.85px]">
                          <div className="h-[26.5px] xl:h-[29.5px] flex items-center">
                            1.はじめに
                          </div>
                          <div className="h-[26.5px] xl:h-[29.5px] flex items-center">
                            2.インストール
                          </div>
                        </div>
                      </ToggleSection>

                      <ToggleSection
                        title="ビヘイビアパック"
                        defaultOpen={false}
                        titleClassName="text-[15px] xl:text-[17px] text-gray-600 dark:text-gray-400 tracking-[-0.75px] xl:tracking-[-0.85px]"
                      >
                        <div className="flex flex-col gap-0 pl-[10px] xl:pl-[12px] text-[15px] xl:text-[17px] text-gray-600 dark:text-gray-400 tracking-[-0.75px] xl:tracking-[-0.85px]"></div>
                      </ToggleSection>

                      <ToggleSection
                        title="リソースパック"
                        defaultOpen={false}
                        titleClassName="text-[15px] xl:text-[17px] text-gray-600 dark:text-gray-400 tracking-[-0.75px] xl:tracking-[-0.85px]"
                      >
                        <div className="flex flex-col gap-0 pl-[10px] xl:pl-[12px] text-[15px] xl:text-[17px] text-gray-600 dark:text-gray-400 tracking-[-0.75px] xl:tracking-[-0.85px]"></div>
                      </ToggleSection>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1 min-w-0 max-w-full lg:max-w-[60%] xl:max-w-[64%] w-full">
                <article className="bg-white dark:bg-[#251f2e] rounded-[13px] shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.25)] overflow-hidden w-full">
                  <Post post={post} />
                </article>
              </div>

              {/* Right Sidebar */}
              <aside className="hidden xl:block xl:w-[18%] flex-shrink-0 top-[67px] self-start">
                <div className="bg-white dark:bg-[#251f2e] rounded-[13px] shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.25)] p-4 h-[200px]">
                  {/* Placeholder */}
                </div>
              </aside>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && !lg && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-40 bg-black bg-opacity-50"
                  onClick={() => setSidebarOpen(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setSidebarOpen(false);
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="サイドバーを閉じる"
                />

                {/* Sidebar Panel */}
                <div className="fixed top-[51px] left-0 bottom-0 w-[280px] sm:w-[320px] bg-white dark:bg-[#251f2e] shadow-lg z-50 overflow-y-auto">
                  <div className="flex flex-col gap-4 p-4">
                    {/* Table of Contents */}
                    <div className="bg-gray-50 dark:bg-[#1a1420] rounded-[13px] shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.25)] px-[14px] py-[4px]">
                      <Toc />
                    </div>

                    {/* Category Navigation */}
                    <div className="bg-gray-50 dark:bg-[#1a1420] rounded-[13px] shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.25)] px-[10px] py-[4px]">
                      <h3 className="text-[15px] text-gray-800 dark:text-gray-200 font-medium tracking-[-0.75px] h-[34px] flex items-center">
                        アドオン関連：
                      </h3>

                      <div className="flex flex-col gap-[2px]">
                        <ToggleSection
                          title="チュートリアル"
                          defaultOpen={true}
                          titleClassName="text-[15px] text-gray-700 dark:text-gray-400 tracking-[-0.75px]"
                        >
                          <div className="flex flex-col gap-0 pl-[10px] text-[15px] text-gray-600 dark:text-gray-400 tracking-[-0.75px]">
                            <div className="h-[26.5px] flex items-center">
                              1.はじめに
                            </div>
                            <div className="h-[26.5px] flex items-center">
                              2.インストール
                            </div>
                          </div>
                        </ToggleSection>

                        <ToggleSection
                          title="ビヘイビアパック"
                          defaultOpen={false}
                          titleClassName="text-[15px] text-gray-600 dark:text-gray-400 tracking-[-0.75px]"
                        >
                          <div className="flex flex-col gap-0 pl-[10px] text-[15px] text-gray-600 dark:text-gray-400 tracking-[-0.75px]"></div>
                        </ToggleSection>

                        <ToggleSection
                          title="リソースパック"
                          defaultOpen={false}
                          titleClassName="text-[15px] text-gray-600 dark:text-gray-400 tracking-[-0.75px]"
                        >
                          <div className="flex flex-col gap-0 pl-[10px] text-[15px] text-gray-600 dark:text-gray-400 tracking-[-0.75px]"></div>
                        </ToggleSection>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        }
        aside={null}
        sidebarToggleButton={
          !lg ? (
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center justify-center w-8 h-8 text-gray-700 dark:text-[#9c8cb8] hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
              aria-label="サイドバーを開く"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          ) : null
        }
      />
    </>
  );
};
