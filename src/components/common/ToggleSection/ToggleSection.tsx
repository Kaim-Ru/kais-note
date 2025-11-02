import { useState } from 'react';

type Props = {
  title?: string;
  openText?: string;
  closeText?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  titleClassName?: string;
};

export const ToggleSection: React.VFC<Props> = ({
  title,
  openText,
  closeText,
  defaultOpen = false,
  children,
  titleClassName = 'text-[17px] text-mikxc-primary-100 tracking-[-0.85px]',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const displayText =
    title || (isOpen ? closeText || '閉じる' : openText || '開く');

  return (
    <div className="flex flex-col gap-[2px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-[7px] ${titleClassName} hover:text-mikxc-primary-200 transition-colors text-left`}
      >
        <span
          className="transform transition-transform w-[9px] h-[13px] flex items-center justify-center"
          style={{ transform: isOpen ? 'rotate(270deg)' : 'rotate(180deg)' }}
        >
          <div className="w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[13px] border-b-current rotate-[-90deg]"></div>
        </span>
        <span>{displayText}</span>
      </button>

      <div style={{ display: isOpen ? 'block' : 'none' }}>{children}</div>
    </div>
  );
};
