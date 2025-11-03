import { Portal } from '@radix-ui/react-portal';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { cn } from '@/lib/cn';

type Props = {
  main: React.ReactElement;
  aside?: React.ReactNode;
  sidebarToggleButton?: React.ReactNode;
  className?: string;
};

export const MainLayout: React.VFC<Props> = ({
  main,
  aside,
  sidebarToggleButton,
  className,
}) => {
  const lg = useBreakPoint('lg');

  // If aside is null, render full-width layout
  if (!aside) {
    return (
      <div className={cn(className, 'w-full max-w-full')}>
        <main className="w-full">{main}</main>
        {sidebarToggleButton && !lg && (
          <Portal>
            <div className="fixed z-50 right-4 top-[59px]">
              {sidebarToggleButton}
            </div>
          </Portal>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        className,
        'grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-full',
      )}
    >
      <div className="lg:col-span-2">
        <main className="w-full">{main}</main>
      </div>
      <aside>{aside}</aside>
    </div>
  );
};
