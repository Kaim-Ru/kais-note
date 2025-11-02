import markdownStyles from './styles/markdown-styles.module.css';

type Props = {
  content: string;
};

export const PostBody = ({ content }: Props) => {
  return (
    <article className="pb-8">
      <div
        className={`${markdownStyles['markdown']} text-[20px] text-gray-800 dark:text-gray-400 tracking-[-1px] leading-[1.8]`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};
