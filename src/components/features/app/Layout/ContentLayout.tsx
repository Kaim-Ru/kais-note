import { Slot } from '@radix-ui/react-slot';

type Props = React.ComponentPropsWithoutRef<'div'>;

export const ContentLayout: React.VFC<Props> = ({ children, ...props }) => {
  return (
    <Slot {...props}>
      <div>{children}</div>
    </Slot>
  );
};
