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
    <article className="pb-8">
      <div
        ref={contentRef}
        className={`${markdownStyles['markdown']} text-[20px] text-gray-800 dark:text-gray-400 tracking-[-1px] leading-[1.8]`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};
