import { Link } from '@/components/common/Link';
import { ContentLayout } from '@/components/features/app/Layout';
import { SITE_NAME } from '@/config/app';
import { sns } from '@/config/sns';

export const Footer = () => {
  return (
    <footer className="w-full overflow-x-hidden">
      <ContentLayout className="p-10 center bg-gray-100 dark:bg-[#251f2e] max-w-full">
        <div className="items-center gap-4 vstack">
          <div className="flex gap-4">
            {sns.map(({ href, icon, label }) => (
              <Link key={href} href={href} passHref>
                <a
                  className="text-gray-600 dark:text-[#9c8cb8] hover:text-gray-800 dark:hover:text-[#bbadd2] active:text-gray-500 dark:active:text-[#756293] transition duration-100"
                  aria-label={label}
                >
                  {icon}
                </a>
              </Link>
            ))}
          </div>
          <div className="text-gray-600 dark:text-[#9c8cb8] text-sm text-center">
            &copy; 2022 - {SITE_NAME}
          </div>
        </div>
      </ContentLayout>
    </footer>
  );
};
