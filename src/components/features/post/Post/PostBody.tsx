import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import markdownStyles from './styles/markdown-styles.module.css';

type Props = {
  content: string;
};

export const PostBody = ({ content }: Props) => {
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hasAttribute('data-internal-link')) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          router.push(href);
        }
      }
    };

    const content = contentRef.current;
    if (content) {
      content.addEventListener('click', handleClick);
      return () => {
        content.removeEventListener('click', handleClick);
      };
    }
  }, [router]);

  return (
    <article className="pb-6 sm:pb-7 md:pb-8 w-full overflow-hidden">
      <div
        ref={contentRef}
        className={`${markdownStyles['markdown']} text-[16px] sm:text-[18px] md:text-[20px] text-gray-800 dark:text-gray-400 tracking-[-0.8px] sm:tracking-[-0.9px] md:tracking-[-1px] leading-[1.7] sm:leading-[1.75] md:leading-[1.8] w-full`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};
