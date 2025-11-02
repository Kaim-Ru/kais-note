import { Link } from '@/components/common/Link';
import { ContentLayout } from '@/components/features/app/Layout';
import { SITE_NAME } from '@/config/app';
import { sns } from '@/config/sns';

export const Footer = () => {
  return (
    <footer>
      <ContentLayout className="p-10 center bg-[#251f2e]">
        <div className="vstack items-center gap-4">
          <div className="flex gap-4">
            {sns.map(({ href, icon, label }) => (
              <Link key={href} href={href} passHref>
                <a
                  className="text-[#9c8cb8] hover:text-[#bbadd2] active:text-[#756293] transition duration-100"
                  aria-label={label}
                >
                  {icon}
                </a>
              </Link>
            ))}
          </div>
          <div className="text-[#9c8cb8] text-sm text-center">
            &copy; 2022 - {SITE_NAME}
          </div>
        </div>
      </ContentLayout>
    </footer>
  );
};
