import { useEffect } from 'react';
import tocbot from 'tocbot';
import { ToggleSection } from '@/components/common/ToggleSection';

export const Toc: React.VFC = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: 'article',
      headingSelector: 'h1, h2, h3',
      scrollSmoothOffset: -80,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className="select-none flex flex-col gap-[6px]">
      <ToggleSection
        openText="開く"
        closeText="閉じる"
        defaultOpen={true}
        titleClassName="text-mikxc-primary-300 text-[17px] tracking-[-0.85px]"
      >
        <nav className="toc" />
      </ToggleSection>
    </div>
  );
};
