import React, { useState, useEffect } from 'react';
import { Link } from '@/components/common/Link';
import { useDarkMode } from '@/hooks/useDarkMode';

export const Header = () => {
  const { dark, toggle } = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // モバイルメニューが開いているときにbodyのスクロールを防ぐ
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full bg-white dark:bg-[#251f2e] h-[51px] sticky top-0 z-50 shadow-md overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto h-full flex items-center justify-between px-2 sm:px-4">
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
        <nav className="items-center hidden gap-2 md:flex md:gap-3 lg:gap-6 xl:gap-8 -translate-x-[20px]">
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
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
          <div className="hidden lg:flex w-[200px] xl:w-[280px] 2xl:w-[347px] h-[32px] bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 bottom-1 rounded-lg items-center px-3 gap-2">
            <img
              src="/assets/search.svg"
              alt="検索"
              className="flex-shrink-0 w-4 h-4 svg-icon"
            />
            <input
              type="text"
              placeholder=""
              className="w-full bg-transparent text-gray-600 dark:text-[#9c8cb8] outline-none text-sm"
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

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggle}
            className="flex items-center justify-center w-8 h-8 transition-colors bg-gray-200 rounded-full dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            aria-label="ダークモード切り替え"
          >
            {dark ? (
              // Sun icon for light mode
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-[#9c8cb8] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="メニュー"
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
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setMobileMenuOpen(false);
            }}
            role="button"
            tabIndex={0}
            aria-label="メニューを閉じる"
          />

          {/* Menu Panel */}
          <div className="fixed top-[51px] left-0 right-0 bg-white dark:bg-[#251f2e] shadow-lg z-50 md:hidden">
            <nav className="flex flex-col gap-4 p-4">
              {/* Navigation Links */}
              <Link href="/posts/page/1" passHref>
                <a className="flex items-center gap-3 py-2 text-gray-700 dark:text-[#9c8cb8] hover:text-gray-900 dark:hover:text-white group">
                  <img
                    src="/assets/by_files.svg"
                    alt="ファイル別もくじ"
                    className="w-auto h-[16px] svg-icon group-hover:svg-icon-hover transition-all"
                  />
                </a>
              </Link>

              <Link href="/tags" passHref>
                <a className="flex items-center gap-3 py-2 text-gray-700 dark:text-[#9c8cb8] hover:text-gray-900 dark:hover:text-white group">
                  <img
                    src="/assets/by_feature.svg"
                    alt="機能別もくじ"
                    className="w-auto h-[16px] svg-icon group-hover:svg-icon-hover transition-all"
                  />
                </a>
              </Link>

              <Link href="/tags" passHref>
                <a className="flex items-center gap-3 py-2 text-gray-700 dark:text-[#9c8cb8] hover:text-gray-900 dark:hover:text-white group">
                  <img
                    src="/assets/by_tags.svg"
                    alt="タグ別"
                    className="w-auto h-[16px] svg-icon group-hover:svg-icon-hover transition-all"
                  />
                </a>
              </Link>

              <Link href="/about" passHref>
                <a className="flex items-center gap-3 py-2 text-gray-700 dark:text-[#9c8cb8] hover:text-gray-900 dark:hover:text-white group">
                  <img
                    src="/assets/About.svg"
                    alt="About"
                    className="w-auto h-[16px] svg-icon group-hover:svg-icon-hover transition-all"
                  />
                </a>
              </Link>

              {/* Dark Mode Toggle in Mobile Menu */}
              <button
                onClick={toggle}
                className="flex items-center gap-3 py-2 text-gray-700 dark:text-[#9c8cb8] hover:text-gray-900 dark:hover:text-white text-left"
                aria-label={
                  dark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'
                }
              >
                {dark ? (
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
                <span>{dark ? 'ライトモード' : 'ダークモード'}</span>
              </button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
