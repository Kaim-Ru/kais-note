import React from 'react';
import { Link } from '@/components/common/Link';

export const Header = () => {
  return (
    <header className="w-full bg-[#251f2e] h-[51px] sticky top-0 z-50 shadow-md">
      <div className="max-w-[1600px] mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" passHref>
          <a className="flex items-center h-[33px] hover:opacity-80 transition-opacity">
            <img
              src="/kaisnote_title.svg"
              alt="KaisNote"
              className="object-contain w-auto h-full"
            />
          </a>
        </Link>

        {/* Navigation Menu */}
        <nav className="items-center hidden gap-6 md:flex lg:gap-8 -translate-x-[20px]">
          <div className="flex items-center gap-3 lg:gap-4">
            <Link href="/posts/page/1" passHref>
              <a className="flex items-center gap-1.5 transition-opacity group">
                <img
                  src="/assets/by_files.svg"
                  alt="ファイル別もくじ"
                  className="w-auto h-[14px] lg:h-[16px] svg-icon group-hover:svg-icon-hover transition-all"
                />
              </a>
            </Link>
            <Link href="/tags" passHref>
              <a className="flex items-center gap-1.5 transition-opacity group">
                <img
                  src="/assets/by_feature.svg"
                  alt="機能別もくじ"
                  className="w-auto h-[14px] lg:h-[16px] svg-icon group-hover:svg-icon-hover transition-all"
                />
              </a>
            </Link>
            <Link href="/tags" passHref>
              <a className="flex items-center gap-1.5 transition-opacity group">
                <img
                  src="/assets/by_tags.svg"
                  alt="タグ別"
                  className="w-auto h-[14px] lg:h-[16px] svg-icon group-hover:svg-icon-hover transition-all"
                />
              </a>
            </Link>
          </div>

          {/* Search Box */}
          <div className="hidden lg:flex w-[280px] xl:w-[347px] h-[32px] bg-mikxc-primary-900 border border-mikxc-primary-600 bottom-1 rounded-lg items-center px-3 gap-2">
            <img
              src="/assets/search.svg"
              alt="検索"
              className="flex-shrink-0 w-4 h-4 svg-icon"
            />
            <input
              type="text"
              placeholder=""
              className="w-full bg-transparent text-[#9c8cb8] outline-none text-sm"
            />
          </div>

          <Link href="/about" passHref>
            <a className="flex items-center gap-1.5 transition-opacity group">
              <img
                src="/assets/About.svg"
                alt="About"
                className="w-auto h-[14px] lg:h-[16px] svg-icon group-hover:svg-icon-hover transition-all"
              />
            </a>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#9c8cb8] p-2">
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
      </div>
    </header>
  );
};
