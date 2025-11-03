import { About } from '@/components/pages/about';
import { getAboutContent } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { AboutType } from '@/types/about';

type Props = {
  about: AboutType;
};

const View: React.VFC<Props> = ({ about }) => <About about={about} />;

export const getStaticProps = async () => {
  const about = getAboutContent([
    'title',
    'date',
    'authorName',
    'authorImage',
    'authorIntro',
    'content',
  ]);

  const content = await markdownToHtml(about.content || '');

  return {
    props: {
      about: {
        ...about,
        content,
      },
    },
  };
};

export default View;
