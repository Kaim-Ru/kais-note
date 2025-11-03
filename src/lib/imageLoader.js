export default function imageLoader({ src }) {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/kais-note' : '';

  // 外部URLの場合はそのまま返す
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // basePathを含める
  return `${basePath}${src}`;
}
