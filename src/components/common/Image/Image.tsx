import React from 'react';
import NextImage from 'next/image';

type ImageProps = Omit<
  React.ComponentPropsWithoutRef<typeof NextImage>,
  'src'
> & {
  src: string;
};

export const Image = React.forwardRef<HTMLElement, ImageProps>(
  ({ src, alt = '', width, height, layout, ...props }, _forwardedRef) => {
    // srcがすでに絶対パス(/)またはURL(http/https)で始まっている場合はそのまま使用
    // それ以外の場合は、先頭に/を付ける
    const imgPath =
      src.startsWith('/') ||
      src.startsWith('http://') ||
      src.startsWith('https://')
        ? src
        : `/${src}`;

    // widthとheightが両方未指定の場合はlayout="fill"を使用
    const shouldUseFill = !width && !height && !layout;

    if (shouldUseFill) {
      return <NextImage src={imgPath} alt={alt} layout="fill" {...props} />;
    }

    return (
      <NextImage
        src={imgPath}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        {...props}
      />
    );
  },
);

Image.displayName = 'Image';
