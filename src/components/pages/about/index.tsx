import { About as AboutContent } from '@/components/features/about';
import { MainLayout } from '@/components/features/app/Layout';
import { AboutType } from '@/types/about';

type Props = {
  about: AboutType;
};

export const About = ({ about }: Props) => (
  <MainLayout
    className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-[73px] py-8 sm:py-10 md:py-12 lg:py-[58px]"
    main={<AboutContent about={about} />}
  />
);
